import { useState } from "react";
import { cardsObjType, whyNotToAddObjType, bagType } from "../../types";

type filteredDiscountType = { id: number; title: string; discount: number }[];

export const CheckoutBag = () => {
  const [filteredDiscount, setFilteredDiscount] = useState([
    { id: 0, title: "PFJ24", discount: 24 },
  ]);
  const addedItems: bagType[] = JSON.parse(localStorage.getItem("bag")!) || [];

  const allDiscounts = filteredDiscount.reduce(
    (acc, promo) => acc + promo.discount,
    0
  );

  return (
    <div className="checkout_form_bag_container">
      <div className="checkout_form_bag">
        {addedItems.map((card) => (
          <CheckoutBagItem
            allDiscounts={allDiscounts}
            filteredDiscount={filteredDiscount}
            key={card.id}
            card={card}
          />
        ))}
        <CheckoutBagPromocode
          filteredDiscount={filteredDiscount}
          setFilteredDiscount={setFilteredDiscount}
        />
        <CheckoutBagTotal addedItems={addedItems} allDiscounts={allDiscounts} />
      </div>
    </div>
  );
};

const CheckoutBagTotal = ({
  addedItems,
  allDiscounts,
}: {
  addedItems: bagType[];
  allDiscounts: number;
}) => {
  const withoutDiscounts: number = Number(
    addedItems
      .map((obj) => obj.price * obj.count)
      .reduce((acc, obj) => acc + obj)
  );
  const total = (withoutDiscounts / 100) * (100 - allDiscounts);
  const savings = (withoutDiscounts / 100) * allDiscounts;
  console.log(allDiscounts);

  return (
    <>
      <div className="checkout_bag_total">
        <span className="checkout_bag_total_left">
          <h4>Total</h4>
        </span>
        <span className="checkout_bag_total_right">
          <h5 style={{ marginRight: "10px", color: "gray" }}>USD</h5>
          <h4>${total.toFixed(2)}</h4>
        </span>
      </div>
      <div className="total_savings">
        <img
          style={{ height: "16px", width: "16px", marginRight: "5px" }}
          src="./tag-discount-svgrepo-com.svg"
        />
        <h5>TOTAL SAVINGS</h5>
        <h5>${savings}</h5>
      </div>
    </>
  );
};

const CheckoutBagItem = ({
  filteredDiscount,
  allDiscounts,
  card,
}: {
  filteredDiscount: filteredDiscountType;
  allDiscounts: number;
  card: bagType;
}) => {
  return (
    <div key={card.id} className="checkout_bag_item">
      <div className="checkout_bag_img">
        <img src={card.src} alt={card.title} />
        <div className="checkout_bag_count">{card.count}</div>
      </div>
      <div className="checkout_bag_description">
        <h5>{card.title}</h5>
        <h6>
          {(card as cardsObjType).type ||
            (card as whyNotToAddObjType).description}
        </h6>
        {filteredDiscount.length > 0 && (
          <div className="checkout_bag_discount">
            {filteredDiscount.map((promo) => (
              <div key={promo.id} className="checkout_bag_discount_item">
                <img
                  style={{ height: "16px", width: "16px", marginRight: "5px" }}
                  src="./tag-discount-svgrepo-com.svg"
                />
                <h6>{`${promo.title} (-${(
                  ((card.price * card.count) / 100) *
                  promo.discount
                ).toFixed(2)}$)`}</h6>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="checkout_bag_price">
        {filteredDiscount.length > 0 && (
          <s>
            <h5 style={{ color: "gray" }}>{card.price * card.count}$</h5>
          </s>
        )}
        <h5>
          {(((card.price * card.count) / 100) * (100 - allDiscounts)).toFixed(
            2
          )}
          $
        </h5>
      </div>
    </div>
  );
};

const CheckoutBagPromocode = ({
  filteredDiscount,
  setFilteredDiscount,
}: {
  filteredDiscount: filteredDiscountType;
  setFilteredDiscount: React.Dispatch<
    React.SetStateAction<filteredDiscountType>
  >;
}) => {
  const [promocode, setPromocode] = useState("");
  const [notFoundPromo, setNotFoundPromo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const promlen = promocode.length > 0;

  const handleDelete = (promocode: string) => {
    setFilteredDiscount(
      filteredDiscount.filter((promo) => promo.title !== promocode)
    );
  };

  const handleFind = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsLoading(true);
    const isFind = promocodesArr.find((promo) => promo.title === promocode);

    setTimeout(() => {
      if (typeof isFind !== "undefined") {
        // Убираем одинаковые объекты
        const dryArr = [...filteredDiscount, isFind];
        const filteredArrOfStrings = Array.from(
          new Set(dryArr.map((obj) => JSON.stringify(obj)))
        );
        const filteredArr = filteredArrOfStrings.map((obj) => JSON.parse(obj));
        console.log(filteredArr);

        setFilteredDiscount(filteredArr);
        setNotFoundPromo(false);
        setPromocode("");
      } else {
        setNotFoundPromo(true);
        setPromocode("");
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="checkout_bag_promocode">
      <form>
        <input
          type="text"
          style={{
            border: `2px solid ${notFoundPromo ? "#dd1d1d" : "black"}`,
          }}
          value={promocode}
          onChange={(e) => setPromocode(e.target.value)}
          placeholder="Discount code or gift card"
        />
        <button
          style={{
            color: promlen ? "white" : "gray",
            background: promlen ? "black" : "#ededed",
            border: promlen ? "none" : "1px solid var(--hr-color)",
          }}
          onClick={(e) => handleFind(e)}
          disabled={!promlen}
        >
          {isLoading ? (
            <img
              className="dr_livesey"
              src="./dfcjda2-74a21565-2f97-4b33-abf9-a55e45f6918b.gif"
            />
          ) : (
            "Apply"
          )}
        </button>
      </form>
      {notFoundPromo && (
        <h5 style={{ color: "#dd1d1d", marginTop: "5px" }}>
          Enter a valid discount code or gift card
        </h5>
      )}
      <EnteredPromos
        handleDelete={handleDelete}
        filteredDiscount={filteredDiscount}
      />
    </div>
  );
};

const EnteredPromos = ({
  handleDelete,
  filteredDiscount,
}: {
  handleDelete: (promocode: string) => void;
  filteredDiscount: filteredDiscountType;
}) => {
  return (
    <div className="chechout_bag_entered_promos">
      {filteredDiscount.map((promo) => (
        <span key={promo.id} className="entered_promos_item">
          <img
            style={{ height: "16px", width: "16px", marginRight: "5px" }}
            src="./tag-discount-svgrepo-com.svg"
          />
          <h5>{promo.title}</h5>
          <svg
            onClick={() => handleDelete(promo.title)}
            className="close_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </span>
      ))}
    </div>
  );
};

const promocodesArr = [
  { id: 0, title: "PFJ24", discount: 24 },
  { id: 1, title: "aboba", discount: 100 },
];
