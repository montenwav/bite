import { useContext } from "react";
import { mainContext } from "../../Provider";

export const BagTop = ({ handleExitBtn }: { handleExitBtn: () => void }) => {
  const { bag } = useContext(mainContext);
  let freeShipping = 32;

  // Update freeShipping
  if (bag.length > 0) {
    let allPrices = bag
      .map((item) => item.count * item.price)
      .reduce((accum, item) => accum + item, 0);
    freeShipping -= allPrices;
  }

  return (
    <>
      <div className="bag_top_bg">
        <div className="bag_top">
          <div className="bag_top_text">
            <h5>YOUR BAG</h5>
            {freeShipping <= 0 ? (
              // prettier-ignore
              <h5>🎉 Congrats! You've Unlocked <b>FREE SHIPPING!</b></h5>
            ) : (
              <h5>You Are ${freeShipping} Away From Free Shipping</h5>
            )}
          </div>

          <div className="bag_top_exit" onClick={handleExitBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
            >
              <rect x={1} y={1} width={32} height={32} fill="white" stroke="#131313" />{" "}
              <mask
                id="mask0_1986_1154"
                maskUnits="userSpaceOnUse"
                x={5}
                y={5}
                width={24}
                height={24}
                style={{ maskType: "alpha" }}
              >
                <rect x={5} y={5} width={24} height={24} fill="#D9D9D9" />
              </mask>{" "}
              <g mask="url(#mask0_1986_1154)">
                <path
                  d="M11.6732 22.6923L11 22.0191L16.3268 16.6923L11 11.3654L11.6732 10.6923L17 16.0191L22.3268 10.6923L23 11.3654L17.6732 16.6923L23 22.0191L22.3268 22.6923L17 17.3654L11.6732 22.6923Z"
                  fill="#131313"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="hr" />
    </>
  );
};
