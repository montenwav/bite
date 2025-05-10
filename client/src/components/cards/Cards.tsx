import { useContext, useEffect, useState } from "react";
import { useSize } from "../../hooks/useSize.js";
import { mainContext } from "../../Provider.js";
import { cardsArr } from "./cardsArr.tsx";
import { AdaptiveCards } from "./AdaptiveCards.js";
import { FullCards } from "./FullCards.js";
import { cardsObjType, cardsArrType } from "../../types.js";

export type addItemType = (card: cardsObjType) => void;
export type setCardsType = React.Dispatch<React.SetStateAction<cardsArrType>>;
export type CardArgsType = {
  addItem: addItemType;
  cards: cardsArrType;
  setCards: setCardsType;
};

export default function Cards() {
  const [cards, setCards] = useState<cardsArrType>(cardsArr);
  const { bag, dispatch, setIsBagOpen } = useContext(mainContext);
  const windowsize = useSize(); // Add dynamic width

  // Getting cards
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.FRONTEND_SERVER}/api/products`);
        const parsed = await response.json();
        setCards(parsed.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const addItem = (card: cardsObjType) => {
    setIsBagOpen(true);
    let isExist = bag.find((item) => item.id === card.id);
    // if exist add quantity, if not add new item
    if (isExist) {
      dispatch({ type: "if_exist", cardId: card.id });
    } else {
      dispatch({ type: "if_not_exist", card: card });
    }
  };

  return (
    <section className="cards_main">
      <h1>Shop Best Sellers</h1>
      <div className="cards_div">
        {windowsize < 1000 ? (
          <AdaptiveCards addItem={addItem} cards={cards} setCards={setCards} />
        ) : (
          <FullCards addItem={addItem} cards={cards} setCards={setCards} />
        )}
      </div>
    </section>
  );
}
