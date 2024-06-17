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
          <p>{card.type}</p>

          <ColorPicker
            cardID={card.id}
            card={card}
            setCards={setCards}
            cards={cards}
          />
          <p>
            {card.id == 0
              ? `From $${card.price}/month`
              : `$${card.price}/month`}
          </p>
          <Stars style={{ width: "10px" }} card={card} />
          <button onClick={() => addItem(card)} className="button cardBtn">
            ADD TO BAG
          </button>
        </div>
      ))}
    </>
  );
};