export const EmptyBag = () => {
  return (
    <>
      <div className="middle_bag_text">
        <h5>OOPS. YOUR BAG IS EMPTY.</h5>
        <h4 style={{ fontFamily: "serif" }}>Here's what's trending:</h4>
      </div>
      <EmptyMiddleBagCard />
    </>
  );
};

const EmptyMiddleBagCard = () => {
  return (
    <>
      {middleBagArr.map((card) => (
        <div key={card.id} className="middle_bag_card">
          <div className="middle_bag_card_img">
            <img src={card.src} alt={card.title} />
          </div>

          <div className="middle_bag_card_desc">
            <h5>{card.title}</h5>
            <h6>{card.description}</h6>
            <a href="#">Shop Now</a>
          </div>
        </div>
      ))}
    </>
  );
};

const middleBagArr = [
  {
    id: 0,
    src: "https://bite-bits.myshopify.com/cdn/shop/files/pdp-product-card-desktop-the-daily-habits-kit_400x400.jpg?v=1700091811",
    title: "Daily Habits Kit",
    description: "Everything you need to reset your routine and go plastic-free.",
  },
  {
    id: 1,
    src: "https://bite-bits.myshopify.com/cdn/shop/files/pdp-product-card-tpb-ff-4oz-mint_400x400.png?v=1700089456",
    title: "Toothpaste Bits Fluoride-Free",
    description: "Our toothpaste alternative, made without harsh chemicals, plastics or fluoride.",
  },
  {
    id: 2,
    src: "https://bite-bits.myshopify.com/cdn/shop/files/pdp-product-card-desktop-silver-case-open_400x400.png?v=1700091811",
    title: "Deodorant",
    description:
      "Forever refillable and clinically-proven to keep you smelling as good as it looks.",
  },
];
