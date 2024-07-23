export function BitsAreBetter() {
  return (
    <section className="BitsAreBetter">
      <h1>Why Bits are Better</h1>
      <div className="FirstSecBg">
        <FirstSecBg />
      </div>
    </section>
  );
}

const FirstSecBg = () => {
  return (
    <div className="FirstSecMain">
      <div className="FirstSecColumn">
        <FirstSecElement arr={firstColumnArr} />
      </div>
      <div className="FirstSecColumn">
        <FirstSecElement arr={secondColumnArr} />
      </div>
    </div>
  );
};

const FirstSecElement = ({ arr }) => {
  return (
    <>
      {arr.map((element) => (
        <div key={element.id} className="FirstSecElement">
          <i className={`icon ${element.icon}`} role="presentation" />
          <h4>{element.title}</h4>
          <h5 className="bits_are_better_content">{element.description}</h5>
        </div>
      ))}
    </>
  );
};

const firstColumnArr = [
  {
    id: 0,
    title: "PERFECTLY PORTIONED",
    description: "Stop wasting money by using more toothpaste than you need.",
    icon: "icon--bit-in-hand",
  },
  {
    id: 1,
    title: "BETTER-FOR-YOU FORMULATIONS",
    description:
      "A dry tablet means we can use less-harmful ingredients and still protect your teeth.",
    icon: "icon--hotel-class",
  },
  {
    id: 2,
    title: "SINK-FRIENDLY",
    description:
      "Our tablets leave less mess in your sink because no glycerine – what makes most toothpaste, paste – means no sticky goop..",
    icon: "icon--counter-top",
  },
];

const secondColumnArr = [
  {
    id: 3,
    title: "BETTER-FOR-YOU FORMULATIONS",
    description:
      "No more toothpaste explosions in your bag. Just throw a few Bits in your pack and you’re good to go.",
    icon: "icon--hotel-class",
  },
  {
    id: 4,
    title: "EARTH-FRIENDLY",
    description:
      "Infinitely refillable with no plastic toothpaste tubes, our Bits are better for our earth and oceans.",
    icon: "icon--earth",
  },
  {
    id: 5,
    title: "STOPS THE SPREAD OF BACTERIA",
    description:
      "The top of a toothpaste tube can transfer bacteria from your partners brush to your mouth. Our Bits can stop the spread..",
    icon: "icon--anti-bacterial",
  },
];
