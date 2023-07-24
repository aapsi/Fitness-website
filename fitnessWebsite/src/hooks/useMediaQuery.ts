// The useMediaQuery hook is a custom hook that
//  can be used in React applications to handle responsive
//  behavior based on the media query conditions.
//  It allows you to conditionally render components or 
// apply styles depending on the screen size or other 
// media features.

import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;