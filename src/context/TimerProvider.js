import React, {createContext, useRef, useState} from 'react';
// Import helper
import { STATUS, RUNNING_STATUS } from '../utils/constants';
// Crete a Timer context with default empty
export const TimerContext = createContext({});
/**
 * Create a context for the Timers
 */
const TimerProvider = ({children}) => {
  const interval = useRef();
  const savedCallback = useRef(null);
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
  // The direction of the current counter, defaults descending
  // "[...] a significant increase (p=.007) in motivation
  // was measured when a descending timer was used.
  // When applying the findings of the current study to a
  // timed workplace or sports setting, the benefits of a
  // descending timer in regards to motivation should be considered."
  // Ruymaekers, Arno, Frederick, Dr. Christina M.
  // “Ascending versus Descending Timers: Stress and Motivation.”
  // Nevada State Undergraduate Research Journal. V4:I1 Spring-2018.
  // (2018). http://dx.doi.org/10.15629/6.7.8.7.5_4-1_S-2018_3
  // URL: http://nsurj.com/v4-i1-3/
  const [isCountASC, setIsCountASC] = useState(false);
  // the current running/puse/rest/reset state of the timer
  const [status, setStatus] = useState(STATUS.RESET);

  // ------- Start crazy counter --------- //

  const callback = () => {
    const endTime = isCountASC ? workSecs : 0;
    if (curSec === endTime) {
      end();
    } else {
      setCurSec(c => isCountASC ? c + 1 : c - 1);
    }
  }
  savedCallback.current = callback;

  const _startInterval = () => {
    // Safety check that existing interval is gone
    _stopInterval();
    interval.current = setInterval(() => {
      return (savedCallback.current(), 1000);
    });
  }
  const _stopInterval = () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  }
  // ------- End crazy counter --------- //

  const isRunning = () => {
    console.log('KAREN provider - status', status, 'isRunning', RUNNING_STATUS.includes(status));
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

  const work = () => {
    setStatus(STATUS.WORKING);
    _startInterval();
  }

  const rest = () => {
    setStatus(STATUS.RESTING);
    // todo: don't set time here, it'll be done  outside at top of work interval
    // setCurSec(isCountASC ? 0: restSecs);
    // Calling start ends prevous interval, if not already ended
    _startInterval();
  }

  const pause = () => {
    console.log('KAREN provier - pause');
    setStatus(STATUS.PAUSED);
    _stopInterval();
  }

  const end = () => {
    _stopInterval();
    // This fires off the fireworks!!
    setStatus(STATUS.ENDED);
    setCurRound(rounds);
    // assume ending on work vs rest
    console.log('KAREN end - isCountASC', isCountASC, 'workSecs', workSecs);
    setCurSec(isCountASC ? workSecs : 0);
  }

  const resetStart = () => {
    _stopInterval();
    setCurSec(isCountASC ? 0 : workSecs);
    setCurRound(0);
    setStatus(STATUS.RESET);
  }

  const resetAll = () => {
    _stopInterval();
    setCurSec(0);
    setWorkSecs(0);
    setRestSecs(0);
    setRounds(0);
    setCurRound(0);
    setStatus(STATUS.RESET);
  }

  // Abstract them?
  //const getCurSec = () => curSec;

  return (
    // Expose global values of the timer children
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
         isReset,
       }}>
      {children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;