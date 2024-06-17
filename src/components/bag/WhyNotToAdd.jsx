import { useContext } from "react";
import {
  isEmptyCtx,
  dispatchCtx,
  addedItemsCtx,
  whyNotCardsCtx,
  setWhyNotCardsCtx,
} from "../../hooks/Provider.jsx";

export const WhyNotToAdd = () => {
  const isEmpty = useContext(isEmptyCtx);
  return (
    <>
      <div className="why_not_to_add">
        {!isEmpty && <Checkout />}
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
  const whyNotCards = useContext(whyNotCardsCtx);
  const setWhyNotCards = useContext(setWhyNotCardsCtx);
  const addedItems = useContext(addedItemsCtx);
  const dispatch = useContext(dispatchCtx);

  const addingItem = (card) => {
    let existingItem = addedItems.find((item) => item.id === card.id);
    if (existingItem) {
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
            onClick={() => addingItem(card)}
            disabled={card.added}
            style={{ background: card.added && "gray" }}
            className="why_not_to_add_button"
          >
            {card.added ? "ADDING..." : "ADD"}
          </button>
        </div>
      ))}
    </>
  );
};

const Checkout = () => {
  const addedItems = useContext(addedItemsCtx);

  let total = 0;
  total = addedItems.map((item) => item.count * item.price);
  total =
    addedItems.length > 0 && total.reduce((accum, items) => accum + items);

  async function handleChechout() {
    const response = await fetch("https://example.com", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedItems),
    });

    if (!response.ok) {
      throw Error("Request Error");
    }
  }

  return (
    <>
      <div className="hr"></div>
      <div onClick={handleChechout} className="checkout_container">
        <div className="checkout">
          <h5>CHECKOUT</h5>
          <h5 className="bag_total">{`$${total}.00`}</h5>
        </div>
      </div>
    </>
  );
};
