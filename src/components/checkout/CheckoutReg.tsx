import { useState, useContext } from "react";
import { bagType } from "../../types";
import { whyNotToAddArr } from "../../WhyNotToAddArr";
import { CheckoutForms } from "./CheckoutForms";
import { FormInput } from "./CheckoutForms";
import { mainContext } from "../../Provider";
import { PaymentFormType } from "../../types";

export const CheckoutReg = () => {
  const { bag } = useContext(mainContext);

  // Уникальные рекомендации
  const recArray = whyNotToAddArr.filter((card) => card.id <= 2);
  const combinedArrays = bag
    .map((card) => card.title)
    .concat(...recArray.map((card) => card.title));

  // Используем объект для подсчета количества каждого значения
  const valueCounts = combinedArrays.reduce((acc: any, value: string) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  // Возвращаем значения, которые встречаются только один раз
  const uniqueValues = Object.keys(valueCounts).filter((key) => valueCounts[key] === 1);
  const uniqRecommenarions = uniqueValues.map((title) =>
    whyNotToAddArr.filter((card) => card.title === title)
  );
  const [recommendationsArr, setRecommendationsArr] = useState(uniqRecommenarions.flat());

  return (
    <div className="checkout_form_reg">
      <div className="checkout_form_reg_content">
        <div className="checkout_form_reg_recommendations">
          {recommendationsArr.length > 0 &&
            recommendationsArr.map((card) => {
              return (
                <RecommendationsItem
                  card={card}
                  recommendationsArr={recommendationsArr}
                  setRecommendationsArr={setRecommendationsArr}
                />
              );
            })}
        </div>
        <TextOffers />
        <div className="hr" />
        <PaymentForm />
        <div className="hr" />
        <div className="checkoutreg_footer">
          <a href="/checkout">Refund policy</a>
          <a href="/checkout">Shipping policy</a>
          <a href="/checkout">Privacy policy</a>
          <a href="/checkout">Terms of service</a>
          <a href="/checkout">Subscription policy</a>
        </div>
      </div>
    </div>
  );
};

const PaymentForm = () => {
  const { paymentForm, setEmptyArrState, currentStateZipCodes } = useContext(mainContext);
  const [isSecced, setIsSucced] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    // Is empty array
    let key: keyof PaymentFormType;
    const emptyArr: string[] = [];

    for (key in paymentForm) {
      if (key !== "apartment" && key !== "card_name") {
        if (paymentForm[key] === "") emptyArr.push(key);
      }
    }
    if (setEmptyArrState) {
      setEmptyArrState(emptyArr);
    }

    // Is succed
    if (
      //prettier-ignore
      currentStateZipCodes.some((obj) => obj.zip_code.toString() === paymentForm.zip) && emptyArr.length === 0 &&
      paymentForm.card_number.length === 16 && paymentForm.cvv.length >= 3 && paymentForm.card_date.length === 4 
      && paymentForm.address.length >=3
    ) {
      setIsSucced(true);
      fetch("", {
        method: "POST",
        body: JSON.stringify(paymentForm),
      });
    }
  };

  return (
    <form method="post">
      <CheckoutForms />
      <ShippingMethod />
      <Payment />
      <RememberMe />
      <h5 className="one_or_more_items">
        One or more items in your cart is a deferred or recurring purchase. By continuing with your
        payment, you agree that your payment method will automatically be charged at the price and
        frequency listed on this page until it ends or you cancel. All cancellations are subject to
        the <u style={{ fontSize: "1em" }}>cancellation policy</u>.
      </h5>
      <button
        onClick={handleClick}
        style={{
          background: isSecced ? "lightgreen" : "black",
          fontSize: "1.5em",
          color: isSecced ? "black" : "white",
        }}
        className="pay_now_btn"
        disabled={isSecced}
      >
        {isSecced ? "Succed" : "Pay Now"}
      </button>
    </form>
  );
};

const RememberMe = () => {
  return (
    <div className="remember_me">
      <h4>Remember me</h4>
      <div>
        <label>
          <input type="checkbox" /> Save my information for a faster checkout
        </label>
      </div>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="payment_section">
      <div className="payment_header">
        <h3 style={{ fontWeight: "bold" }}>Payment</h3>
        <h5 style={{ color: "gray" }}>All transactions are secure and encrypted.</h5>
      </div>
      <div className="payment_card">
        <div className="payment_card_top">
          <h4>Credit card</h4>
          <span className="payment_cards">
            <img
              alt="VISA"
              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/0169695890db3db16bfe.svg"
            />
            <img
              alt="MASTERCARD"
              src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/ae9ceec48b1dc489596c.svg"
            />
          </span>
        </div>
        <div className="payment_card_bottom">
          <FormInput
            type="number"
            placeholder="Card number"
            empty="a card number"
            name="card_number"
            max={16}
            required={true}
          />
          <div className="payment_card_bottom_name">
            <FormInput
              type="number"
              placeholder="Expiration Date (MM / YY)"
              empty="a valid expiration date"
              name="card_date"
              max={4}
              required={true}
            />
            <FormInput
              type="number"
              placeholder="Security code"
              empty="the CVV or security code on your card"
              name="cvv"
              max={4}
              required={true}
            />
          </div>
          <FormInput
            type="text"
            placeholder="Name on card"
            empty="your name exactly as it’s written on your card"
            name="card_name"
            required={true}
          />
        </div>
      </div>
    </div>
  );
};

const ShippingMethod = () => {
  return (
    <div className="shipping_method">
      <h4>Shipping method</h4>

      <h5>First shipment</h5>
      <div className="shipping_method_box first_shipment">
        <h5>First shipment</h5>
        <b>Free</b>
      </div>
      <h5 style={{ marginTop: "20px" }}>Recurring Shipments</h5>
      <div className="shipping_method_box">
        <h5>Free Shipping · Free</h5>
      </div>
    </div>
  );
};

const RecommendationsItem = ({
  card,
  recommendationsArr,
  setRecommendationsArr,
}: {
  card: bagType;
  recommendationsArr: typeof whyNotToAddArr;
  setRecommendationsArr: React.Dispatch<React.SetStateAction<typeof whyNotToAddArr>>;
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { bag, dispatch } = useContext(mainContext);

  const nextId = () => {
    return Math.max(...bag.map((card) => card.id)) + 1;
  };

  const handleClick = (cardId: number) => {
    setIsDisabled(true);
    setIsLoading(true);

    setTimeout(() => {
      //Добавляем элемент
      localStorage.setItem("bag", JSON.stringify([...bag, card]));
      dispatch({ type: "if_not_exist", card: { ...card, id: nextId() } });
      //Удаляем карточку
      setRecommendationsArr(recommendationsArr.filter((card) => card.id !== cardId));

      setIsDisabled(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="checkout_recommendations_item">
      <div className="checkout_recommendations_item_left">
        <div className="checkout_bag_img recommendations_bag">
          <img src={card.src} alt={card.title} />
        </div>
        <div className="checkout_bag_description">
          <h5>{card.title}</h5>
          <div className="checkout_bag_description_price">
            <h5 style={{ marginRight: "5px" }}>${card.price}</h5>
            {card.old_price && (
              <s>
                <h5 style={{ color: "gray" }}>${card.old_price}</h5>
              </s>
            )}
          </div>
        </div>
      </div>
      <div className="checkout_recommendations_item_right">
        <button disabled={isDisabled} onClick={() => handleClick(card.id)}>
          {isLoading ? (
            <img className="dr_livesey" src="./dfcjda2-74a21565-2f97-4b33-abf9-a55e45f6918b.gif" />
          ) : (
            "Add"
          )}
        </button>
      </div>
    </div>
  );
};

const TextOffers = () => {
  const [subscribe, setSubscribe] = useState("");

  return (
    <div className="text_offers">
      <h5 style={{ fontWeight: "bold", fontSize: "1.3em" }}>Text offers</h5>
      <h5>Get the latest discounts and offers sent directly to your phone ✨</h5>
      <form>
        <input
          type="number"
          value={subscribe}
          onChange={(event) => setSubscribe(event.target.value)}
          placeholder="Moblie phone (optional)"
        />
        <button onClick={(event) => event.preventDefault()}>Subscribe</button>
      </form>
      <h6>
        *By providing your phone number, you agree to receive recurring automated marketing text
        messages (e.g. cart reminders) from this shop and third parties acting on its behalf.
        Consent is not a condition to obtain goods or services. Msg & data rates may apply. Msg
        frequency varies. Reply HELP for help and STOP to cancel. You also agree to the{" "}
        <u>Terms of Service</u> and <u>Privacy Policy</u>.
      </h6>
    </div>
  );
};
