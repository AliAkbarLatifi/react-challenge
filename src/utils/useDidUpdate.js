import { useEffect, useRef } from "react";

export const useDidUpdate = (callback, deps) => {
  const firstTime = useRef(true);
  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
      return undefined;
    }
    return callback();
  }, deps);
};
