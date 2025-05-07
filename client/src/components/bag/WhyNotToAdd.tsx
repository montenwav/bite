import { useContext, useState } from "react";
import { mainContext } from "../../Provider";
import { whyNotToAddObjType } from "../../types";

export const WhyNotToAdd = ({ TOTAL }: { TOTAL: number }) => {
  const { bag } = useContext(mainContext);

  return (
    <div className="why_not_to_add">
      {bag.length > 0 && <Checkout TOTAL={TOTAL} />}
      <div className="hr" />
      <h5 className="why_not_to_add_h5">WHY NOT ADD?</h5>
      <div className="why_not_to_add_flex">
        <WhyNotToAddCard />
      </div>
      <button className="shop_all_prod">SHOP ALL PRODUCTS</button>
    </div>
  );
};

const WhyNotToAddCard = () => {
  const { whyNotCards, setWhyNotCards, bag, dispatch } = useContext(mainContext);

  const addItem = (card: whyNotToAddObjType) => {
    let existingItem = bag.find((item) => item.id === card.id);

    if (typeof existingItem !== "undefined") {
      dispatch({ type: "if_exist", cardId: card.id });
    } else {
      dispatch({ type: "if_not_exist", card: card });
    }

    // Adding delay to the button to prevent multipe clicks
    setWhyNotCards(
      whyNotCards.map((item) => (item.id === card.id ? { ...item, added: true } : item))
    );
    setTimeout(() => {
      setWhyNotCards(
        whyNotCards.map((item) => {
          return { ...item, added: false };
        })
      );
    }, 1000);
  };

  return (
    <>
      {whyNotCards.map((card) => (
        <div key={card.id} className="why_not_to_add_card">
          <div style={{ height: "90px" }}>
            <img src={card.src} alt={card.title} />
          </div>

          <div style={{ height: "50px" }}>
            <h6>{card.title || card.why_not_title}</h6>
          </div>

          <button
            onClick={() => addItem(card)}
            disabled={card.added}
            style={{ background: card.added ? "gray" : "", color: "white" }}
            className="why_not_to_add_button"
          >
            {card.added ? "ADDING.." : "ADD"}
          </button>
        </div>
      ))}
    </>
  );
};

const Checkout = ({ TOTAL }: { TOTAL: number }) => {
  const [checkout, setCheckout] = useState("CHECKOUT");

  return (
    <>
      <div className="hr" />
      <a href="checkout">
        <div onClick={() => setCheckout("CHECKING OUT...")} className="checkout_container">
          <div className="checkout">
            <h5>{checkout}</h5>
            <h5 className="bag_total">${TOTAL.toFixed(2)}</h5>
          </div>
        </div>
      </a>
    </>
  );
};
