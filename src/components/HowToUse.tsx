export function HowToUse() {
  return (
    <div className="how-to-use">
      <a href="/">
        <h1>How To Use</h1>
      </a>
      <Cards />
      <button className="button">SHOP NOW</button>
    </div>
  );
}

const Cards = () => {
  return (
    <div className="how-to-cards">
      {HowToUseCardsArr.map((card) => (
        <div key={card.id} className="how-to-card">
          <div className="how-to-card-top">
            <img src={card.src} alt={card.title} />
          </div>
          <div className="how-to-card-bottom">
            <div className="how-to-card-bottom-left">
              <div className="how-to-card-step">{card.id}</div>
            </div>
            <div className="how-to-card-bottom-right">
              <h4>{card.title}</h4>
              <h5>{card.description}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HowToUseCardsArr = [
  {
    id: 1,
    title: "Grab a Toothpase Bits",
    description: "A single Bit is all you need each time.",
    src: "//bitetoothpastebits.com/cdn/shop/files/jpeg-optimizer_2024.07.01_homepage_howto_step1_desktop_2.jpg?v=1719862118&width=939",
  },
  {
    id: 2,
    title: "Chew your Bit",
    description: "A soft paste will form in your mouth.",
    src: "//bitetoothpastebits.com/cdn/shop/files/2024.07.01_homepage_howto_step2_desktop_1_-optimized.jpg?v=1719614397&amp;width=936",
  },
  {
    id: 3,
    title: "Brush with a wet toothbrush",
    description: `It'll foam up, just like regular toothpaste.`,
    src: "//bitetoothpastebits.com/cdn/shop/files/2024.07.01_homepage_howto_step3_desktop_1_-optimized.jpg?v=1719614439&width=936",
  },
];
