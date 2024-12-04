import { useState } from "react";

interface FaqsObj {
  id: number;
  title: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
  p5?: string;
  isOpen: boolean;
}

export const FAQs = () => {
  return (
    <section className="faqs">
      <h1>FAQs</h1>
      <div className="questions_container">
        <div className="hr" />
        <FAQsContaniner />
      </div>
    </section>
  );
};

const FAQsContaniner = () => {
  const [FaqArr, setFaqArr] = useState(FAQsArr);

  const handleToggle = (itemId: number) => {
    setFaqArr(
      FaqArr.map((item) => {
        // open selected tab, other close
        if (item.id !== itemId) return { ...item, isOpen: false };
        return { ...item, isOpen: !item.isOpen };
      })
    );
  };

  return (
    <div className="question">
      {FaqArr.map((item) => (
        <div key={item.id} className="toggle_item">
          <div onClick={() => handleToggle(item.id)} className="header_container">
            <h4>{item.title}</h4>
            <svg
              className="cervon"
              xmlns="http://www.w3.org/2000/svg"
              width={42}
              height={42}
              fill="none"
              viewBox="-1 -1 42 42"
              id="expand-more-black"
              y={3377}
            >
              <mask
                id="cja"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={40}
                height={40}
              >
                <path fill="#D9D9D9" d="M0 0h40v40H0z" />
              </mask>
              <g mask="url(#cja)">
                <path
                  d="m20 22.283-8.846-8.79 1.18-1.172L20 19.94l7.667-7.618 1.18 1.172L20 22.283Z"
                  fill="#1C1B1F"
                />
              </g>
            </svg>
          </div>

          <ContentContainer item={item} />
          <div className="hr" />
        </div>
      ))}
    </div>
  );
};

const ContentContainer = ({ item }: { item: FaqsObj }) => {
  return (
    <div className={`content_container ${item.isOpen && "active"}`}>
      <p>{item.p1}</p>
      {/* all tabs except 2 */}
      {item.id !== 2 ? (
        <>
          {item.p2 && <p>{item.p2}</p>}
          {item.p3 && <p>{item.p3}</p>}
          {item.p4 && <p>{item.p4}</p>}
          {item.p5 && <p>{item.p5}</p>}
        </>
      ) : (
        <ol>
          <li>
            <p className="ol_p">{item.p2}</p>
          </li>
          <li>
            <p className="ol_p">{item.p3}</p>
          </li>
          <li>
            <p className="ol_p">{item.p3}</p>
          </li>
        </ol>
      )}
    </div>
  );
};

const FAQsArr = [
  {
    id: 0,
    title: "Are Toothpaste Bits good for sensitive teeth?",
    p1: `Yes, our Bits are safe for sensitive teeth. We use Nano-hydroxyapatite in our Fluoride-Free formula, a mineral that's been proven to strengthen and remineralize enamel and help fight sensitivity`,
    p2: "Read the nHAP Study here and read more information about it here.",
    p3: "We also recommend talking to your dentist about Nano-hydroxyapatite or when making any changes to your oral care routine.",
    isOpen: false,
  },
  {
    id: 1,
    title: "How do subscriptions work?",
    p1: "With subscriptions, we send you all 4 months of Toothpaste Bits at once in our refillable glass jar for $32. Shipments after that will be sent every 4 months for $32 after your initial purchase, so you don't have to worry about running out of Bits. Those orders will come in our compostable refill pouches that are meant to be transferred into your glass jar as soon as you receive them.",
    p2: "Our refill pouch will disintegrate in home compost within 12-16 weeks. Or if you don't have a home compost, they can be dropped in the compost bin in a number of stores—Starbucks and Whole Foods are the most common.",
    p3: "We will send you an email reminder before your order is processed so you can cancel, postpone or even change the flavor of your upcoming Bits before they ship. You can always update the frequency or flavor of your upcoming Bits by logging into your account and making changes there.",
    isOpen: false,
  },
  {
    id: 2,
    title: "Can I purchase just the refill pouches first?",
    p1: "Unfortunately, we do not sell refill pouches on their own. However we do offer a 4 month subscription – it costs $32 which breaks down to only $8 per month.",
    p2: "The Bits come in a 4oz glass jar in the first shipment and then in compostable refill pouches after that, as our tablets are sensitive to humidity and heat. We recommend transferring the refill to the jar as soon as it is delivered to keep the integrity of the Bits.",
    p3: "Being as eco-friendly as possible is super important to us, but there are a few things that are equally important, such as the safety of our customers (and their pets!), which is why we send the first round of Bits in a glass jar with a label that has the full ingredient list, and a warning to keep away from pets. Xylitol is great for teeth, but not great for pups!",
    p4: "We suggest using the 1oz small bottles that you already have for travel to keep extra Bits in your bag or for a guest bathroom.",
    isOpen: false,
  },
  {
    id: 3,
    title: "What is the shelf life?",
    p1: "With proper storage in a cool and dry place our nHap Bits have a shelf life of 2 years and our Fluoride Bits have a shelf life of 1 1/2 years from the manufacturing date (MFT).",
    isOpen: false,
  },
  {
    id: 4,
    title: "How do I use Toothpaste Bits?",
    p1: "It’s easy:",
    p2: "Put a perfectly portioned Bit into your mouth.",
    p3: "Chew the Bit gently until it forms a soft powder.",
    p4: `Brush with a wet toothbrush for 2 minutes, it will foam up - just like what you're used to.`,
    p5: "Spit, smile and repeat twice a day to make your dentist proud and our Earth happy.",
    isOpen: false,
  },
];
