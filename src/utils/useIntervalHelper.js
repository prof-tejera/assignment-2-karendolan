import { useRef } from 'react';
// Import helper
import { STATUS } from '../utils/constants';
/**
 * The Iterval Helper is used by the TimerProvider
 * It iterates over the possible timer state changes
 * after each iterval, until it hits the end state.
 * The Interval timer sets context states when moving over
 * boundaries of rounds or between work and rest states.
 * @returns {startInterval, stopInterval} - the 2 APIs for this helper
 */
const useIntervalHelper = ({
  // Range parameters to determine next step
  workSecs,
  restSecs,
  rounds,
  // The current state of the count and round
  curSec,
  curRound,
  // Indicates which way to move the counter next
  isCountASC,
  // State check function to test if currently in rest or work state
  isWorking,
  // Change state functions
  setStatus,
  setCurSec,
  setCurRound,
  // The termination function
  end,
}) => {
  // Initialize the 2 ref references
  const interval = useRef(null);
  const savedCallback = useRef(null);

  // This function does the work neede between each interval
  // to ensure the correct state is set on the interval increment.
  const callback = () => {
    // Calculate the critical end sec when state will change
    const endSec = isCountASC ? (isWorking() ? workSecs: restSecs) : 0;
    // If curSec is at endSec, do a change
    if (curSec === endSec) {
      // The Two possible states a the end of an interval
      // are Working or Resting
      if (isWorking()) {
        // End, if there are no more rounds and no last rest phase
        if (curRound === rounds && !(restSecs > 0)) {
          end();
        } else if (restSecs > 0) {
          // Otherwise, start resting
          setStatus(STATUS.RESTING);
          setCurSec(c => isCountASC ? 0 : restSecs);
        } else {
          // Otherwise, increment the round, and start working again
          setCurRound(r => r + 1);
          setCurSec(c => isCountASC ? 0 : workSecs);
        }
      } else {
        // Must be in Resting state
        if (curRound === rounds) {
          // No more rounds, end on this last rest phase
          end();
        } else {
          // More rounds, increment round, and switch from resting to working
          setStatus(STATUS.WORKING);
          setCurSec(c => isCountASC ? 0 : workSecs);
          setCurRound(r => r + 1);
        }
      }
    } else {
      // Not at end time, yet. Keep iterating on current seconds
      setCurSec(c => isCountASC ? c + 1 : c - 1);
    }
  }
  // Save the above Increment-end work function as the ref callback
  savedCallback.current = callback;

  // The function to start an interval counter
  const _startInterval = () => {
    // Safety check that existing interval is gone
    _stopInterval();
    interval.current = setInterval(() => {
      return (savedCallback.current(), 1000);
    }, 1000);
  }
  // The function to stop and clear the interval
  const _stopInterval = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }
  // Return the two interval functions
  return { startInterval: _startInterval, stopInterval: _stopInterval }
}

export default useIntervalHelper;