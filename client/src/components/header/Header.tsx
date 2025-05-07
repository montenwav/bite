import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { mainContext } from "../../Provider.js";
import { Bag } from "../bag/Bag.js";
import { Adaptive } from "../Adaptive.js";
import { HeaderMain } from "./HeaderMain.js";
import { Promocode } from "./Promocode.js";

export function Header() {
  const { isAdaptive, isBagOpen } = useContext(mainContext);

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
    if ((scrollY as any).current >= 100 || isAdaptive) {
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
      {isBagOpen && <Bag />}
    </>
  );
}
