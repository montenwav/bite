import { useContext, useRef } from "react";
import { mainContext } from "../../Provider";
import { BagTop } from "./BagTop";
import { BagMiddle } from "./BagMiddle";
import { WhyNotToAdd } from "./WhyNotToAdd";

export function Bag() {
  const { setIsBagOpen } = useContext(mainContext);
  const bagRef = useRef<HTMLDivElement>(null);

  const handleExitBtn = () => {
    setIsBagOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <div className="bag">
      <div onClick={handleExitBtn} className="bag_bg" />
      <div ref={bagRef} className="bag_container">
        <BagTop handleExitBtn={handleExitBtn} />
        <BagMiddle />
        <WhyNotToAdd />
      </div>
    </div>
  );
}
