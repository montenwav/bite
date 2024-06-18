import { useContext } from "react";
import { setIsBagOpenCtx } from "../../hooks/Provider.jsx";
import { BagTop } from "./BagTop.jsx";
import { BagMiddle } from "./BagMiddle.jsx";
import { WhyNotToAdd } from "./WhyNotToAdd.jsx";

export function Bag({ bagRef }) {
  const setIsBagOpen = useContext(setIsBagOpenCtx);

  const handleExitBtn = () => {
    setIsBagOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
      <div className="bag">
        <div onClick={handleExitBtn} className="bag_bg"/>
          <div ref={bagRef} className="bag_container">
            <BagTop bagRef={bagRef} handleExitBtn={handleExitBtn} />
            <BagMiddle />
            <WhyNotToAdd />
          </div>
        </div>
  );
}
