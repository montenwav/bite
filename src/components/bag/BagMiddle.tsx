import { useContext } from "react";
import { mainContext } from "../../Provider";
import { EmptyBag } from "./EmptyBag.jsx";
import { cardsObjType, whyNotToAddObjType } from "../../types.js";

export const BagMiddle = () => {
  const { bag } = useContext(mainContext);

  return (
    <div
      // prettier-ignore
      style={{ height: !bag.length ? `calc(100% - 345px)` : `calc(100% - 415px)` }}
      className="bag_middle"
    >
      {bag.length ? <MiddleBagCard /> : <EmptyBag />}
    </div>
  );
};

const MiddleBagCard = () => {
  let { bag } = useContext(mainContext);

  return (
    <>
      {bag.map((item) => (
        <div key={item.id}>
          <div className="added_item_container">
            <div className="added_item">
              <div className="added_item_img">
                <img src={item.src} alt={item.title} />
              </div>
              <AddedItemDescription item={item} />
            </div>
          </div>
          <div className="hr" style={{ width: "95%" }} />
        </div>
      ))}
    </>
  );
};

const AddedItemDescription = ({ item }: { item: cardsObjType | whyNotToAddObjType }) => {
  return (
    <div className="added_item_description">
      <h1>{item.title}</h1>
      <h4>{item.description}</h4>
      <h5>{item.fluoride ? "with Flouride" : "Flouride-Free"}</h5>

      <div className="delivers_every_bag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 22 22"
          fill="none"
        >
          <mask
            id="mask0_1930_685"
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={22}
            height={22}
            style={{ maskType: "alpha" }}
          >
            <rect width={22} height={22} fill="#D9D9D9" />
          </mask>{" "}
          <g mask="url(#mask0_1930_685)">
            <path
              d="M5.2637 13.6831C5.07801 13.2894 4.92582 12.8675 4.80713 12.4174C4.68844 11.9673 4.62909 11.4949 4.62909 11.0001C4.62909 9.21613 5.25782 7.69688 6.51529 6.44235C7.77278 5.18781 9.31348 4.58346 11.1374 4.62929H11.6927L10.1573 3.09385L11.0087 2.24243L13.9914 5.2251L11.0087 8.20778L10.1573 7.35636L11.6927 5.82091H11.1374C9.63665 5.79036 8.37535 6.28601 7.35349 7.30786C6.33164 8.32972 5.82071 9.56046 5.82071 11.0001C5.82071 11.3186 5.84686 11.6291 5.89915 11.9318C5.95145 12.2344 6.02989 12.5279 6.13449 12.8123L5.2637 13.6831ZM10.9911 19.7578L8.00843 16.7751L10.9911 13.7924L11.8425 14.6439L10.3071 16.1793H10.8624C12.3632 16.2099 13.6245 15.7142 14.6463 14.6923C15.6682 13.6705 16.1791 12.4397 16.1791 11.0001C16.1791 10.6816 16.1529 10.3711 16.1006 10.0685C16.0484 9.76584 15.9699 9.47233 15.8653 9.18792L16.7361 8.31711C16.9218 8.71081 17.074 9.1327 17.1927 9.5828C17.3114 10.0329 17.3707 10.5053 17.3707 11.0001C17.3707 12.7688 16.742 14.2842 15.4845 15.5464C14.227 16.8086 12.6863 17.4167 10.8624 17.3709H10.3071L11.8425 18.9064L10.9911 19.7578Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>
        <h5>Delivers every 4 months</h5>
      </div>

      <div className="counter_and_total">
        <BagCounter item={item} />

        <div className="bag_total">
          <h5>${item.price}.00</h5>
          {/* if old price exist then add */}
          <s style={{ color: "gray" }}>
            {item.old_price != 0 && <h5>${item.old_price.toFixed(2)}</h5>}
          </s>
        </div>
      </div>
    </div>
  );
};

const BagCounter = ({ item }: { item: cardsObjType | whyNotToAddObjType }) => {
  const { dispatch } = useContext(mainContext);

  return (
    <div className="bag_counter">
      <div className="bag_counter_flex">
        <DispatchCounter type="decrement" item={item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
          >
            <mask
              id="mask0_1954_1480"
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={18}
              height={18}
              style={{ maskType: "alpha" }}
            >
              <rect width={18} height={18} fill="#D9D9D9" />
            </mask>{" "}
            <g mask="url(#mask0_1954_1480)">
              <path d="M6.57703 10.3V9.69995H14.2514V10.3H6.57703Z" fill="#131313" />
            </g>
          </svg>
        </DispatchCounter>

        <div className="bag_counter_item">
          <h5>{item.count}</h5>
        </div>

        <DispatchCounter type="increment" item={item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
          >
            <mask
              id="mask0_1954_1477"
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={18}
              height={18}
              style={{ maskType: "alpha" }}
            >
              <rect width={18} height={18} fill="#D9D9D9" />
            </mask>{" "}
            <g mask="url(#mask0_1954_1477)">
              <path
                d="M3.36775 13.875V9.375H-0.818298V8.625H3.36775V4.125H4.06542V8.625H8.25147V9.375H4.06542V13.875H3.36775Z"
                fill="#131313"
              />
            </g>
          </svg>
        </DispatchCounter>
      </div>

      <h5
        className="bag_remove_btn"
        onClick={() => dispatch({ type: "remove_button", itemId: item.id })}
      >
        Remove
      </h5>
    </div>
  );
};

const DispatchCounter = ({
  item,
  type,
  children,
}: {
  item: cardsObjType | whyNotToAddObjType;
  type: "increment" | "decrement";
  children: React.JSX.Element;
}) => {
  const { dispatch } = useContext(mainContext);

  return (
    <div
      onClick={() =>
        dispatch({
          type: `${type === "increment" ? "increment" : "decrement"}_button`,
          itemId: item.id,
        })
      }
      className="bag_counter_item"
    >
      {children}
    </div>
  );
};
