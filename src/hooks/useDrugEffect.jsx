import { useMotionValue } from "framer-motion";

export const useDrugEffect = (imgIndex, setImgIndex, setIsDragging, length) => {
  const ChangeThreshold = 20; // How much you should drag to change an image
  const dragLenght = useMotionValue(0); // displays how much you dragged

  const onDragStart = () => setIsDragging(true);

  const onDragEnd = () => {
    setIsDragging(false);
    const x = dragLenght.get();

    if (x <= -ChangeThreshold && imgIndex < length) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= ChangeThreshold && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };
  return {onDragStart, onDragEnd, dragLenght}
};
