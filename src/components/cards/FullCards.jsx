import { memo } from "react";

export const FullCards = memo(({ cards, setCards, addItem }) => {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className="cards">
          <Preview cards={cards} card={card} setCards={setCards} />
          <button onClick={() => addItem(card)} className="button cardBtn">
            ADD TO BAG
          </button>
        </div>
      ))}
    </>
  );
});

const Preview = ({ cards, card, setCards }) => {
  return (
    <div className="preview">
      <div className="preview_title">
        <h4>{card.display_title}</h4>
        <p>
          {card.id == 0 ? `From $${card.price}/month` : `$${card.price}/month`}
        </p>
      </div>
      <img style={{ background: card.bgPrevirew }} src={card.src} />

      <FullCardsHover cards={cards} card={card} setCards={setCards} />
    </div>
  );
};

const FullCardsHover = ({ card, cards, setCards }) => {
  return (
    <div className="full_cards_hover">
      <div className="full_cards_container">
        <div className="cards_hover_colors">
          <ColorPicker
            cardID={card.id}
            card={card}
            setCards={setCards}
            cards={cards}
          />
          <p>{card.type}</p>
        </div>

        <div className="hr" />
        <DeliversEveny card={card} />
      </div>
    </div>
  );
};

const DeliversEveny = ({ card }) => {
  return (
    <div className="delivers_every">
      <div className="delivers_every_left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height={26}
          width={26}
          viewBox="-1 -1 26 26"
          id="radio-on"
          y={4605}
        >
          <mask
            id="dpa"
            height={24}
            maskUnits="userSpaceOnUse"
            width={24}
            x={0}
            y={0}
          >
            <path d="M0 0h24v24H0z" fill="#d9d9d9" />
          </mask>
          <g mask="url(#dpa)">
            <path
              d="M12 16c1.114 0 2.06-.388 2.836-1.164S16 13.114 16 12s-.388-2.06-1.164-2.836C14.059 8.388 13.114 8 12 8s-2.06.388-2.836 1.164C8.388 9.941 8 10.886 8 12s.388 2.06 1.164 2.836C9.941 15.612 10.886 16 12 16zm.003 5c-1.244 0-2.414-.236-3.51-.709s-2.049-1.113-2.859-1.923-1.452-1.761-1.925-2.856S3 13.248 3 12.003c0-1.244.236-2.414.708-3.51a9.094 9.094 0 0 1 1.924-2.859 9.085 9.085 0 0 1 2.856-1.925A8.753 8.753 0 0 1 11.997 3c1.244 0 2.414.236 3.51.708a9.094 9.094 0 0 1 2.859 1.924 9.083 9.083 0 0 1 1.925 2.856A8.753 8.753 0 0 1 21 11.997c0 1.244-.236 2.414-.709 3.51s-1.113 2.049-1.923 2.859a9.083 9.083 0 0 1-2.856 1.925 8.753 8.753 0 0 1-3.509.709zM12 20c2.233 0 4.125-.775 5.675-2.325S20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675S14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325S4 9.767 4 12c0 2.233.775 4.125 2.325 5.675S9.767 20 12 20z"
              fill="#1c1b1f"
            />
          </g>
        </svg>
        <h5>Delivers Every 4 Months</h5>
      </div>
      
      {card.id <= 1 && (
        <div className="delivers_every_save">
          <h5>Save 33%</h5>
        </div>
      )}
      <h5>{`$${card.price}/month`}</h5>
    </div>
  );
};
