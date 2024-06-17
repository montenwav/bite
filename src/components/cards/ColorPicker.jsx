export const ColorPicker = ({ cardID, card, cards, setCards }) => {
  const handleColors = (colID) => {
    return card.colors.map((item) => {
      if (item.colorId == colID) return { ...item, clicked: true };
      return { ...item, clicked: false };
    });
  };

  const handleColorPicker = (colID) => {
    setCards(
      cards.map((card) => {
        if (card.id == 4 && card.id == cardID) {
          switch (colID) {
            case 0:
              return {
                ...card,
                src: "/products/1/pc-tpb-ff-4oz-mint-no-bg.webp",
                type: "Mint",
                colors: handleColors(colID),
              };
            case 1:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-mint-charcoal.webp",
                type: "Mint Charcoal",
                colors: handleColors(colID),
              };
            case 2:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-berry-twist-no-bg-012524.webp",
                type: "Berry Twist",
                colors: handleColors(colID),
              };
          }
        } else if (card.id == 6 && card.id == cardID) {
          switch (colID) {
            case 0:
              return {
                ...card,
                bgPrevirew: "transparent",
                type: "Fragrance-Free",
                colors: handleColors(colID),
              };
            case 1:
              return {
                ...card,
                bgPrevirew: "#f27c2d",
                type: "Neroli",
                colors: handleColors(colID),
              };
            case 2:
              return {
                ...card,
                bgPrevirew: "#e5497a",
                type: "Rose Vert",
                colors: handleColors(colID),
              };
            case 3:
              return {
                ...card,
                bgPrevirew: "#51511a",
                type: "Santal",
                colors: handleColors(colID),
              };
          }
        }
        return card;
      })
    );
  };

  return (
    <ul className="cardColorDiv">
      {card.colors.map((item) => (
        <li
          key={item.colorId}
          className="cardColor"
          onClick={() => handleColorPicker(item.colorId)}
          style={{
            background: item.color,
            border: item.clicked && "1px solid black",
            cursor: "pointer",
          }}
        />
      ))}
    </ul>
  );
};
