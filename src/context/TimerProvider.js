import React, {createContext, useState} from 'react';
// Import helper
import useIntervalHelper from '../utils/useIntervalHelper';
import { STATUS, RUNNING_STATUS } from '../utils/constants';
// Crete a Timer context with default empty
export const TimerContext = createContext({});
/**
 * Create a context for the Timers
 */
const TimerProvider = ({children}) => {
  // the current seconds state of the timer
  const [curSec, setCurSec] = useState(0);
  // the total work seconds for the timer
  const [workSecs, setWorkSecs] = useState(0);
  // the total rest seconds for the timer
  const [restSecs, setRestSecs] = useState(0);
  // the total number of rounds for the timer
  const [rounds, setRounds] = useState(0);
  // the current round state of the timer
  const [curRound, setCurRound] = useState(0);
  // Keep track if wasResting before pause
  const [wasResting, setWasResting] = useState(0);
  // The direction of the current counter, defaults ascending
  const [isCountASC, setIsCountASC] = useState(false);
  // the current running/puse/rest/reset state of the timer
  const [status, setStatus] = useState(STATUS.RESET);
  // Set up convinience functions
  const isRunning = () => {
    return RUNNING_STATUS.includes(status);
  }
  const isPaused = () => {
    return status === STATUS.PAUSED;
  }
  const isEnded = () => {
    return status === STATUS.ENDED;
  }
  const isReset = () => {
    return status === STATUS.RESET;
  }
  const isResting = () => {
    return status === STATUS.RESTING;
  }
  const isWorking = () => {
    return status === STATUS.WORKING;
  }

  // -----  State change callback functions ---  //

  const end = () => {
    stopInterval();
    // This fires off the fireworks!!
    setStatus(STATUS.ENDED);
    setWasResting(false);
    setCurRound(rounds);
    // Ending on work secs vs rest
    setCurSec(isCountASC ? workSecs : 0);
  }

  const work = () => {
    // If was paused, set work status to either the work of resting or working
    setStatus(wasResting ? STATUS.RESTING : STATUS.WORKING);
    // If first start, initialize current round
    setCurRound(curSec === 0 && rounds > 0 && curRound === 0 ? 1 : curRound);
    // If first start, initialize start seconds
    setCurSec(isPaused ? curSec : (isCountASC ? workSecs : 0));
    // Start the counter!
    startInterval();
  }

  const rest = () => {
    setStatus(STATUS.RESTING);
    // Calling start ends prevous interval, if not already ended
    startInterval();
  }

  const pause = () => {
    setWasResting(isWorking());
    setStatus(STATUS.PAUSED);
    stopInterval();
  }

  const resetStart = () => {
    stopInterval();
    setStatus(STATUS.RESET);
    setWasResting(false);
    setCurSec(isCountASC ? 0 : workSecs);
    setCurRound(rounds > 0 ? 1 : 0);
  }

  const resetAll = () => {
    stopInterval();
    setStatus(STATUS.RESET);
    setWasResting(false);
    setCurSec(0);
    setWorkSecs(0);
    setRestSecs(0);
    setRounds(0);
    setCurRound(0);
  }

  // Retrieve the Interval helper API
  // Give it all it needs to manage context
  // state between intervals.
  const { startInterval, stopInterval } = useIntervalHelper({
      isCountASC,
      isWorking,
      workSecs,
      restSecs,
      curSec,
      curRound,
      rounds,
      end,
      setStatus,
      setCurSec,
      setCurRound,
    });

  return (
    // Expose global values to the timer children
    <TimerContext.Provider
      value={{
         isCountASC,
         setIsCountASC,
         curSec,
         setCurSec,
         workSecs,
         setWorkSecs,
         restSecs,
         setRestSecs,
         rounds,
         setRounds,
         curRound,
         setCurRound,
         status,
         work,
         rest,
         pause,
         end,
         resetStart,
         resetAll,
         isRunning,
         isPaused,
         isEnded,
         isResting,
         isWorking,
         isReset,
       }}>
      {children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;
