import { useState, useEffect } from "react";

export function useSize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, []);
  return windowSize;
}
