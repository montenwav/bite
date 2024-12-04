import { useContext, useEffect, useRef, useState } from "react";
import { mainContext } from "../../Provider";
import { BagTop } from "./BagTop";
import { BagMiddle } from "./BagMiddle";
import { WhyNotToAdd } from "./WhyNotToAdd";

export function Bag() {
  const { setIsBagOpen, bag } = useContext(mainContext);
  const bagRef = useRef<HTMLDivElement>(null);

  let TOTAL = 0;
  if (bag.length > 0) {
    TOTAL = bag.map((item) => item.count * item.price).reduce((accum, items) => accum + items, 0);
  }

  const handleExitBtn = () => {
    setIsBagOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <div className="bag">
      <div onClick={handleExitBtn} className="bag_bg" />
      <div ref={bagRef} className="bag_container">
        <BagTop handleExitBtn={handleExitBtn} TOTAL={TOTAL} />
        <BagMiddle />
        <WhyNotToAdd TOTAL={TOTAL} />
      </div>
    </div>
  );
}
