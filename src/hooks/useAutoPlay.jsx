import { useEffect } from "react";

export const useAutoPlay = (imgIndex) => {
  const [imgIndex, setImgIndex] = useState(imgIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(imgIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex >= companiesList.length) {
      newIndex = 0;
      setImgIndex(newIndex);
    }
  };
  return imgIndex;
};
