export const TwoUp = () => {
  return (
    <div className="two_up_main">
      <TwoUpCards />
    </div>
  );
};

const TwoUpCards = () => {
  return (
    <>
      {TwoUpArr.map((card) => (
        <div
          key={card.id}
          style={{ backgroundImage: `url(${card.src})` }}
          className="two_up_card"
        >
          <div className="top_up_card_content">
            <h4>{card.title}</h4>
            <h5>{card.description}</h5>
            <button className="button">SHOP NOW</button>
          </div>
        </div>
      ))}
    </>
  );
};

const TwoUpArr = [
  {
    id: 0,
    title: "THE SUMMER GLOW KIT",
    description:
      "Save $26 with our 3-step system — together for a limited time.",
    src: "//bitetoothpastebits.com/cdn/shop/files/2up-summer-glow-desktop-v2.jpg?v=1718843452&width=1920",
  },
  {
    id: 1,
    title: "DEODORANT",
    description: "Stay smelling fresh even in the hottest summer temps.",
    src: "//bitetoothpastebits.com/cdn/shop/files/V2jpeg-optimizer_sgk-2up-module-desktop_1.jpg?v=1719862249&width=1920",
  },
];
