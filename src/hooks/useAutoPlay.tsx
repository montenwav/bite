import { useEffect } from "react";
import { useSize } from "./useSize";
import { autoPlayHookType } from "../types";

export const useAutoPlay: autoPlayHookType = (imgIndex, setImgIndex, length, isDepenencies) => {
  const windowSize = useSize();

  useEffect(() => {
    let interval: any;
    if (isDepenencies) {
      if (windowSize < 1000) {
        interval = setInterval(() => {
          setImgIndex((prevIndex) => prevIndex + 1);
        }, 3000);
      } else {
        setImgIndex(0);
      }
      return () => clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setImgIndex((prevIndex) => prevIndex + 1);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [windowSize, setImgIndex, isDepenencies]);

  if (imgIndex > length) setImgIndex(0);
};
