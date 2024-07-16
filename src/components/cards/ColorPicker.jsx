export const ColorPicker = ({ cardID, card, cards, setCards }) => {
  const handleColors = (colorId) => {
    return card.colors.map((item) => {
      if (item.colorId === colorId) return { ...item, clicked: true };
      return { ...item, clicked: false };
    });
  };

  const handleColorPicker = (colorId) => {
    setCards(
      cards.map((card) => {
        if (card.id == 4 && card.id === colorId) {
          switch (colorId) {
            case 0:
              return {
                ...card,
                src: "/products/1/pc-tpb-ff-4oz-mint-no-bg.webp",
                type: "Mint",
                colors: handleColors(colorId),
              };
            case 1:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-mint-charcoal.webp",
                type: "Mint Charcoal",
                colors: handleColors(colorId),
              };
            case 2:
              return {
                ...card,
                src: "/products/1/pdp-product-card-tpb-ff-4oz-berry-twist-no-bg-012524.webp",
                type: "Berry Twist",
                colors: handleColors(colorId),
              };
          }
        } else if (card.id == 6 && card.id === colorId) {
          switch (colorId) {
            case 0:
              return {
                ...card,
                bgPrevirew: "transparent",
                type: "Fragrance-Free",
                colors: handleColors(colorId),
              };
            case 1:
              return {
                ...card,
                bgPrevirew: "#f27c2d",
                type: "Neroli",
                colors: handleColors(colorId),
              };
            case 2:
              return {
                ...card,
                bgPrevirew: "#e5497a",
                type: "Rose Vert",
                colors: handleColors(colorId),
              };
            case 3:
              return {
                ...card,
                bgPrevirew: "#51511a",
                type: "Santal",
                colors: handleColors(colorId),
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
