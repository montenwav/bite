import { useEffect } from "react";
import { useSize } from "./useSize";

export const useAutoPlay = (imgIndex, setImgIndex, isDependencies, length) => {
  const windowsize = useSize()

  useEffect(() => {
    if (isDependencies && windowsize < 1000) {
      const interval = setInterval(() => {
        updateIndex(imgIndex + 1);
      }, 3000);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        updateIndex(imgIndex + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isDependencies && windowsize]);

  const updateIndex = (newIndex) => {
    imgIndex =+ newIndex
    if (imgIndex > length) {
      setImgIndex(0);
      imgIndex = 0
    }
    return setImgIndex(prev => prev + 1);
  };

};
