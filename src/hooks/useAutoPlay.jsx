import { useEffect } from "react";
import { useSize } from "./useSize";

export const useAutoPlay = (imgIndex, setImgIndex, isDepenencies, length) => {
  const windowSize = useSize();

  useEffect(() => {
    let interval;
    if (isDepenencies) {
      if (windowSize < 1000) {
        interval = setInterval(() => {
          setImgIndex((prevIndex) => prevIndex + 1);
        }, 3000);
      } else {
        setImgIndex(0);
      }
      return () => clearInterval(interval);
    }
    interval = setInterval(() => {
      setImgIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isDepenencies && windowSize]);

  if(imgIndex > length) setImgIndex(0)
};
