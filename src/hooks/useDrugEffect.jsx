import { useMotionValue } from "framer-motion";
import { useState } from "react";

export const useDrugEffect = () => {
  const [isDragging, setIsDragging] = useState(false);

  const ChangeThreshold = 50; // How much you should drag to change an image
  const dragLenght = useMotionValue(0); // displays how much you dragged

  const onDragStart = () => setIsDragging(true);

  const onDragEnd = () => {
    setIsDragging(false);

    const x = dragLenght.get();

    if (x <= -ChangeThreshold && imgIndex < companiesList.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= ChangeThreshold && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };
};
