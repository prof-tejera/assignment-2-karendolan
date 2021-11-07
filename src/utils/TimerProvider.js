import React, {createContext, useState} from 'react';
// Import helper
import {STATUS} from '../../utils/helpers';
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
  // the current running/puse/rest/reset state of the timer
  const [status, setStatus] = useState(STATUS.RESET);

  return (
    // Expose global values of the timer children
    <TimerContext.Provider value={{
       curSec, setCurSec,
       workSecs, setWorkSecs,
       restSecs, setRestSecs,
       rounds, setRounds,
       curRound, setCurRound,
       status, setStatus,
     }}>
      {children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;
