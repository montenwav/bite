import { motion } from "framer-motion";
import { memo } from "react";
import { useAutoPlay } from "../hooks/useAutoPlay";
import { useDrugEffect } from "../hooks/useDrugEffect";

export function BottomCompanies() {
  const something = useDrugEffect()
  const imgIndex = useAutoPlay(52)

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
      {companiesList.map((company, index) => (
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

const companiesList = [];
for (let i = 0; i < 10; i++) {
  companiesList.push(
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
