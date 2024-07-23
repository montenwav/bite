import { ColorPicker } from "./ColorPicker";
import { Stars } from "../Stars";

export const AdaptiveCards = ({ cards, setCards, addItem }) => {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className="cards">
          <div className="preview">
            <img style={{ background: card.bgPrevirew }} src={card.src} />
          </div>

          <h4>{card.display_title}</h4>
          <h5>{card.type}</h5>

          <ColorPicker card={card} setCards={setCards} cards={cards} />

          <div className="adaptive_cards_stars">
            <Stars color="000" />
            <h5>{`${card.reviews} Reviews`}</h5>
          </div>

          <button onClick={() => addItem(card)} className="button cardBtn">
            ADD TO BAG
          </button>
        </div>
      ))}
    </>
  );
};
