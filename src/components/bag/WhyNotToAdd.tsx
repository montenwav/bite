import { useContext } from "react";
import { mainContext } from "../../Provider";
import { whyNotToAddObjType } from "../../types";

export const WhyNotToAdd = () => {
  const { addedItems } = useContext(mainContext);

  return (
    <>
      <div className="why_not_to_add">
        {addedItems.length > 0 && <Checkout />}
        <div className="hr"></div>

        <h5 className="why_not_to_add_h5">WHY NOT ADD?</h5>
        <div className="why_not_to_add_flex">
          <WhyNotToAddCard />
        </div>
        <button className="shop_all_prod">SHOP ALL PRODUCTS</button>
      </div>
    </>
  );
};

const WhyNotToAddCard = () => {
  const { whyNotCards, setWhyNotCards, addedItems, dispatch } =
    useContext(mainContext);

  const addItem = (card: whyNotToAddObjType) => {
    let existingItem = addedItems.find((item) => item.id === card.id);

    if (typeof existingItem !== "undefined") {
      dispatch({ type: "if_exist", cardId: card.id });
    } else {
      dispatch({ type: "if_not_exist", card: card });
    }

    // Adding state to the button to prevent multipe clicks
    setWhyNotCards(
      whyNotCards.map((item) => {
        if (item.id === card.id) return { ...item, added: true };
        return item;
      })
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

const Checkout = () => {
  const { addedItems } = useContext(mainContext);

  let checkout = "CHECKOUT";

  let total: number[] | number | boolean = 0;
  total = addedItems.map((item) => item.count * item.price);
  total =
    addedItems.length > 0 && total.reduce((accum, items) => accum + items);

  return (
    <>
      <div className="hr" />
      <a href="checkout">
        <div
          onClick={() => (checkout = "CHECKING OUT...")}
          className="checkout_container"
        >
          <div className="checkout">
            <h5>{checkout}</h5>
            <h5 className="bag_total">{`$${total}.00`}</h5>
          </div>
        </div>
      </a>
    </>
  );
};
