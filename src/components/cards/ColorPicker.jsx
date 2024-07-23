export const ColorPicker = ({ card, cards, setCards }) => {
  const cardID = card.id;

  const handleColor = (card, colID) => {
    return card.colors.map((color) => {
      if (color.colorId == colID) return { ...color, clicked: true };
      return { ...color, clicked: false };
    });
  };

  const handleColorPicker = (colID) => {
    setCards(
      cards.map((card) => {
        {
          /*First Card*/
        }
        if (card.id == 4 && card.id == cardID) {
          switch (colID) {
            case 0:
              return {
                ...card,
                src: "/products/1/pc-tpb-ff-4oz-mint-no-bg.webp",
                type: "Mint",
                colors: handleColor(card, colID),
              };
            case 1:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-mint-charcoal.webp",
                type: "Mint Charcoal",
                colors: handleColor(card, colID),
              };
            case 2:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-berry-twist-no-bg-012524.webp",
                type: "Berry Twist",
                colors: handleColor(card, colID),
              };
          }
        }
        {
          /*Third Card*/
        }
        if (card.id == 6 && card.id == cardID) {
          switch (colID) {
            case 0:
              return {
                ...card,
                bgPrevirew: "transparent",
                type: "Fragrance-Free",
                colors: handleColor(card, colID),
              };
            case 1:
              return {
                ...card,
                bgPrevirew: "#f27c2d",
                type: "Neroli",
                colors: handleColor(card, colID),
              };
            case 2:
              return {
                ...card,
                bgPrevirew: "#e5497a",
                type: "Rose Vert",
                colors: handleColor(card, colID),
              };
            case 3:
              return {
                ...card,
                bgPrevirew: "#51511a",
                type: "Santal",
                colors: handleColor(card, colID),
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
          onClick={() => handleColorPicker(color.colorId)}
          style={{
            background: color.color,
            border: color.clicked && "1px solid black",
            cursor: "pointer",
          }}
        ></li>
      ))}
    </ul>
  );
};
