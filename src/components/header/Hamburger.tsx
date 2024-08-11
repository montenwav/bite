import { useContext } from "react";
import { mainContext } from "../../Provider";

export const Hamburger = () => {
  const { isAdaptive, setIsAdaptive } = useContext(mainContext);

  return (
    <div className="hamburger" onClick={() => setIsAdaptive(!isAdaptive)}>
      {isAdaptive ? (
        <svg
          className="close"
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="none"
          viewBox="-1 -1 50 50"
          id="close-black"
          y={2339}
        >
          <mask
            id="bqa"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={48}
            height={48}
          >
            <path fill="#D9D9D9" d="M0 0h48v48H0z" />
          </mask>
          <g mask="url(#bqa)">
            <path
              d="m12.567 37.767-2.334-2.334L21.667 24 10.233 12.567l2.334-2.334L24 21.667l11.433-11.434 2.334 2.334L26.333 24l11.434 11.433-2.334 2.334L24 26.333 12.567 37.767Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
      ) : (
        <svg
          className="open"
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          fill="none"
          viewBox="-1 -1 32 32"
          id="hamburger-black"
          y={3582}
        >
          <mask
            id="cpa"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={30}
            height={30}
          >
            <path fill="#131313" d="M0 0h30v30H0z" />
          </mask>
          <g mask="url(#cpa)">
            <mask
              id="cpb"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={30}
              height={30}
            >
              <path fill="#131313" d="M0 0h30v30H0z" />
            </mask>
            <g mask="url(#cpb)">
              <path
                d="M4.375 22.043v-1.875h21.25v1.875H4.375Zm0-6.106v-1.875h21.25v1.875H4.375Zm0-6.105V7.957h21.25v1.875H4.375Z"
                fill="#131313"
              />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};
