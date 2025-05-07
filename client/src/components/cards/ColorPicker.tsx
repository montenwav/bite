import { setCardsType } from "./Cards";
import { cardsArrType, cardsObjType } from "../../types";

export const ColorPicker = ({
  card,
  cards,
  setCards,
}: {
  card: cardsObjType;
  cards: cardsArrType;
  setCards: setCardsType;
}) => {
  // const cardID = card.id;

  const handleColor = (colID: number) => {
    // Returns edited array
    return card.colors.map((color) =>
      // Select color by passed ID
      color.colorId === colID ? { ...color, clicked: true } : { ...color, clicked: false }
    );
  };

  const handleColorPicker = (cardID: number, colID: number) => {
    setCards(
      // Set new cards array
      cards.map((card) => {
        // prettier-ignore
        {/* First Card */}
        if (card.id === 4 && card.id === cardID) {
          switch (colID) {
            case 0:
              return {
                ...card,
                src: "/products/1/pc-tpb-ff-4oz-mint-no-bg.webp",
                type: "Mint",
                colors: handleColor(colID),
              };
            case 1:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-mint-charcoal.webp",
                type: "Mint Charcoal",
                colors: handleColor(colID),
              };
            case 2:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-berry-twist-no-bg-012524.webp",
                type: "Berry Twist",
                colors: handleColor(colID),
              };
          }
        }
        // prettier-ignore
        {/* Third Card */}
        if (card.id === 6 && card.id === cardID) {
          switch (colID) {
            case 0:
              return {
                ...card,
                bgPrevirew: "transparent",
                type: "Fragrance-Free",
                colors: handleColor(colID),
              };
            case 1:
              return {
                ...card,
                bgPrevirew: "#f27c2d",
                type: "Neroli",
                colors: handleColor(colID),
              };
            case 2:
              return {
                ...card,
                bgPrevirew: "#e5497a",
                type: "Rose Vert",
                colors: handleColor(colID),
              };
            case 3:
              return {
                ...card,
                bgPrevirew: "#51511a",
                type: "Santal",
                colors: handleColor(colID),
              };
          }
        }
        return card;
      })
    );
  };

  return (
    <ul className="cardColorDiv">
      {card.colors.map((color) => (
        <li
          key={color.colorId}
          className="cardColor"
          onClick={() => handleColorPicker(card.id, color.colorId)}
          style={{
            background: color.color,
            border: color.clicked ? "1px solid black" : "",
            cursor: "pointer",
          }}
        ></li>
      ))}
    </ul>
  );
};
