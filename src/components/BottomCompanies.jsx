import { motion } from "framer-motion";
import { memo, useState } from "react";
import { useAutoPlay } from "../hooks/useAutoPlay";
import { useDrugEffect } from "../hooks/useDrugEffect";
import { companiesList } from "./CompaniesList";

export function BottomCompanies() {
  const [imgIndex, setImgIndex] = useState(0);
  const [_, setIsDragging] = useState(false);

  const arrLength = companiesList.length - 1;

  useAutoPlay(imgIndex, setImgIndex, false, arrLength);
  const { onDragStart, onDragEnd, dragLenght } = useDrugEffect(
    imgIndex,
    setImgIndex,
    setIsDragging,
    arrLength
  );

  return (
    <section className="bottom_companies">
      <motion.div
        style={{
          transform: `translateX(-${imgIndex * 100}%)`,
          x: dragLenght,
        }}
        drag="x"
        dragConstraints={{ right: 0, left: 0 }}
        animate={{ translateX: `-${imgIndex * 100}%` }} // translate by img size
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className="bottom_comp_container"
      >
        <Companies />
      </motion.div>
    </section>
  );
}

const Companies = memo(() => {
  return (
    <>
      {BottomCompaniesList.map((company, index) => (
        <motion.div
          key={index}
          whileTap={{ cursor: "grabbing" }}
          className="bottom_comp_item"
        >
          <h2>{company.title}</h2>
          <div className="btm_companies_img">
            <img height="25px" src={company.src} />
          </div>
        </motion.div>
      ))}
    </>
  );
});

const BottomCompaniesList = [];
for (let i = 0; i < 10; i++) {
  BottomCompaniesList.push(
    {
      title: `“Just what your toiletry bag didn’t know it was missing.”`,
      src: "/companies/1.png",
    },
    {
      title: "“These have changed my life.”",
      src: "/companies/4.png",
    },
    {
      title: "“Give love to your pearly whites.”",
      src: "/companies/6.png",
    },
    {
      title: "“Best Whitening Toothpaste Tablets”",
      src: "/companies/7.png",
    }
  );
}
