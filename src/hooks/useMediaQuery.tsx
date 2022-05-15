import React, {useEffect, useState, useCallback} from "react";

const useMediaQuery = (query: string): boolean => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = React.useCallback((e: {matches: any}) => {
    if (e.matches) setTargetReached(true);
    else setTargetReached(false);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${query})`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) setTargetReached(true);

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default useMediaQuery;
