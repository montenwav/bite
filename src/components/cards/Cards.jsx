import { useCallback, useContext, memo, useState, useMemo } from "react";
import { useSize } from "../../hooks/useSize.jsx";
import {
  addedItemsCtx,
  setIsBagOpenCtx,
  dispatchCtx,
} from "../../hooks/Provider.jsx";
import { cardsArr } from "./CardsArr.jsx";
import { AdaptiveCards } from "./AdaptiveCards.jsx";
import { FullCards } from "./FullCards.jsx";

export function Cards() {
  const [cards, setCards] = useState(cardsArr);
  const windowsize = useSize(); // Add dynamic width

  const dispatch = useContext(dispatchCtx);
  const addedItems = useContext(addedItemsCtx);
  const setIsBagOpen = useContext(setIsBagOpenCtx);

  const addItem = (card) => {
    setIsBagOpen(true);

    // Add item
    let existingItem = addedItems.find((item) => item.id === card.id);
    if (existingItem) {
      dispatch({ type: "if_exist", cardId: card.id });
    } else {
      dispatch({ type: "if_not_exist", card: card });
    }
  };

  return (
    <>
      <section className="cards_main">
        <h1>Shop Best Sellers</h1>
        <div className="cards_div">
          {windowsize < 1000 ? (
            <AdaptiveCards
              addItem={addItem}
              cards={cards}
              setCards={setCards}
            />
          ) : (
            <FullCards addItem={addItem} cards={cards} setCards={setCards} />
          )}
        </div>
      </section>
    </>
  );
}
