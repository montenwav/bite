import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { isBagOpenCtx, isAdaptiveCtx } from "../../Contexts.jsx";
import { Bag } from "../bag/Bag.jsx";
import { Adaptive } from "../Adaptive.jsx";
import { HeaderMain } from "./HeaderMain.jsx";
import { Promocode } from "./Promocode.jsx";

export function Header() {
  const bagRef = useRef(null);

  const isAdaptive = useContext(isAdaptiveCtx);
  const isBagOpen = useContext(isBagOpenCtx);

  // Header scroll animation
  const controls = useAnimation();
  const { scrollY } = useScroll();

  // Changes depends on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= 100) {
      controls.start("visible");
    } else if (latest <= 100) {
      controls.start("hidden");
    }
  });

  useEffect(() => {
    if (scrollY.current >= 100 || isAdaptive) {
      controls.start("visible");
    }
  }, [scrollY, isAdaptive, controls]);

  return (
    <>
      <Promocode />
      <header>
        <motion.div
          variants={{
            hidden: { background: "transparent" },
            visible: { background: "white" },
          }}
          initial="hidden"
          animate={controls}
          className="headerBg"
        >
          <HeaderMain />
        </motion.div>
      </header>

      <Adaptive />
      {isBagOpen && <Bag bagRef={bagRef} />}
    </>
  );
}
