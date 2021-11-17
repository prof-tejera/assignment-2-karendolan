import {useContext, useEffect, useRef} from "react";
import { TimerContext } from "../context/TimerProvider";

const useResetCallback = () => {
  const { resetAll } = useContext(TimerContext);
  // Create a reset ref
  const resetCallback = useRef(() => {
    resetAll();
  });
  // On unload reset all timer context
  useEffect(() => {
    return () => {
      resetCallback.current();
    };
  },[resetCallback]);

  resetCallback.current = () => {
    resetAll();
  }
  // ----------------------------------
}
export default useResetCallback;
