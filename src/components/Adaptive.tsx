import { useRef, useContext, useEffect } from "react";
import { useSize } from "../hooks/useSize.jsx";
import { mainContext } from "../Provider";

type AdaptiveObjType = {
  element: {
    id: number;
    title_1: string;
    title_2: string;
    shop: string;
    src: string;
  };
};

export const Adaptive = () => {
  const { isAdaptive, setIsAdaptive } = useContext(mainContext);
  const adaptiveRef = useRef<HTMLDivElement>(null);
  const windowSize = useSize();

  useEffect(() => {
    if (windowSize > 1000 && adaptiveRef.current) {
      adaptiveRef.current.style.right = "-100%";
    }
    setIsAdaptive(false);
    document.body.style.overflow = "visible";
  }, [windowSize]);

  useEffect(() => {
    if (adaptiveRef.current) {
      if (isAdaptive) {
        adaptiveRef.current.style.right = "0%";
        document.body.style.overflow = "hidden";
      } else {
        adaptiveRef.current.style.right = "-100%";
        document.body.style.overflow = "visible";
      }
    }
  }, [isAdaptive]);

  return (
    <div ref={adaptiveRef} className="adaptive_content">
      <div className="adaptive_item">
        <a href="/">
          <h5>Shop All</h5>
        </a>
      </div>
      <div className="hr" />
      <div className="adaptive_open_item">
        <a href="/">
          <h5>OUR BEST SELLERS</h5>
        </a>

        {AdaptiveOpenEmenentsArr.map((element) => (
          <AdaptiveOpenElem key={element.id} element={element} />
        ))}
      </div>
      <div className="hr" />
      {AdaptiveItemsArr.map((title, index) => (
        <AdaptiveItem key={index} title={title} />
      ))}
    </div>
  );
};

const AdaptiveOpenElem = ({ element }: AdaptiveObjType) => {
  return (
    <>
      <div className="adaptive_flex_item">
        <AdaptiveFlexElements element={element} />
        <div style={{ border: "1px solid black" }} className="adaptive_flex_elem">
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={element.src}
            alt="a close-up of a measuring tape"
          />
        </div>
      </div>
      {element.id === 0 && <div className="hr" />}
    </>
  );
};

const AdaptiveFlexElements = ({ element }: AdaptiveObjType) => {
  return (
    <div className="adaptive_flex_elem">
      <span>
        <h1>{element.title_1}</h1>
        <h1>{element.title_2}</h1>
      </span>
      <span
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <p>Shop {element.shop}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={26}
          height={26}
          fill="none"
          viewBox="-1 -1 26 26"
          id="arrow"
          y={200}
        >
          <mask
            id="apa"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={24}
            height={24}
          >
            <path fill="#131313" d="M0 0h24v24H0z" />
          </mask>
          <g mask="url(#apa)">
            <path
              d="m13.692 17.308-.707-.72 4.088-4.088H5v-1h12.073l-4.088-4.088.707-.72L19 12l-5.308 5.308Z"
              fill="#131313"
            />
          </g>
        </svg>
      </span>
    </div>
  );
};

const AdaptiveItem = ({ title }: { title: string }) => {
  return (
    <>
      <div className="adaptive_item">
        <a href="">
          <h5>{title}</h5>
        </a>
      </div>
      <div className="hr" />
    </>
  );
};

const AdaptiveOpenEmenentsArr = [
  {
    id: 0,
    title_1: "Ditch the tube",
    title_2: "bite the Bit.",
    shop: "Toothpaste Bits",
    src: "//bitetoothpastebits.com/cdn/shop/files/mobile-nav-tout-bits.jpg?v=1699977629&width=550",
  },
  {
    id: 1,
    title_1: "Buy once,",
    title_2: "refill forever.",
    shop: "Deodroant",
    src: "//bitetoothpastebits.com/cdn/shop/files/mobile-nav-tout-deo.jpg?v=1699977629&width=550",
  },
];

const AdaptiveItemsArr = ["ORAL CARE", "BODY CARE", "SETS", "ABOUT US"];
