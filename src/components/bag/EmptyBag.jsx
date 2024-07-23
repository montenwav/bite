import { middleBagArr } from "./middleBagArr";

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
