import { motion } from "framer-motion";
import { useAutoPlay } from "../hooks/useAutoPlay.jsx";
import { useDrugEffect } from "../hooks/useDrugEffect.jsx";
import { useSize } from "../hooks/useSize.jsx";
import { useState } from "react";

export function ShopByCategory() {
  const [imgIndex, setImgIndex] = useState(0);
  const [_, setIsDragging] = useState(false);
  const windowsize = useSize();

  const arrLength = imgs.length - 1;

  useAutoPlay(imgIndex, setImgIndex, arrLength, true);
  const { onDragStart, onDragEnd, dragLenght } = useDrugEffect(
    imgIndex,
    setImgIndex,
    arrLength,
    setIsDragging
  );

  return (
    <section className="shop_by_category">
      <h1>Shop By Category</h1>
      {windowsize < 1000 ? (
        <motion.div
          style={{
            transform: `translateX(calc(-${imgIndex * 85}vw - ${imgIndex} * 16px))`, //card width + padding
            x: dragLenght,
          }}
          drag="x"
          dragConstraints={{ right: 0, left: 0 }}
          animate={{
            translateX: `calc(-${imgIndex * 85}vw - ${imgIndex} * 16px)`,
          }} // translate by img size
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          className="carousel"
        >
          <Images />
        </motion.div>
      ) : (
        <div className="carousel">
          <Images />
        </div>
      )}
    </section>
  );
}

const Images = () => {
  const windowsize = useSize();

  return (
    <>
      {imgs.map((img, idx) => (
        <motion.div
          key={idx}
          whileTap={{ cursor: windowsize < 1000 ? "grabbing" : "" }}
          className="inner_carousel"
        >
          <motion.div className="card_image">
            <h4>{img.name}</h4>
            <img src={img.src} alt={img.name} />
            <button className="shop_by_btn">SHOP NOW</button>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

const imgs = [
  {
    name: "ORAL CARE",
    src: "/shopby/hp-shop-by-category-oral-care.webp",
  },
  { name: "SETS", src: "/shopby/hp-shop-by-category-sets.png" },
  {
    name: "BODY CARE",
    src: "/shopby/hp-shop-by-category-body-care.webp",
  },
];
