import { useState, useContext, useRef } from "react";
import { bagType, PaymentFormType } from "../../types";
import { whyNotToAddArr } from "../../WhyNotToAddArr";
import { CheckoutForms, FormInput } from "./CheckoutForms";
import { mainContext } from "../../Provider";
import { CheckoutFormBag } from "./CheckoutBag";
import { useSize } from "../../hooks/useSize";

export const CheckoutReg = () => {
  const { bag } = useContext(mainContext);
  const [isDisabled, setIsDisabled] = useState(false);

  // Uniq recommendations
  const recArray = whyNotToAddArr.filter((card) => card.id <= 2);
  const combinedArrays = bag
    .map((card) => card.title)
    .concat(...recArray.map((card) => card.title));
  // Counting how much same values we have
  const valueCounts = combinedArrays.reduce((acc: any, value: string) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  // Get valueCounts keys, then only return keys if its value equal 1
  const uniqValues = Object.keys(valueCounts).filter((key) => valueCounts[key] === 1);
  const uniqRecommenarions = recArray.filter((item) => uniqValues.includes(item.title)); // get recArrays objects by uniqValues title
  const [recommendationsArr, setRecommendationsArr] = useState(uniqRecommenarions);

  return (
    <div className="checkout_form_reg">
      <div className="checkout_form_reg_content">
        <div className="checkout_form_reg_recommendations">
          {recommendationsArr.length > 0 &&
            recommendationsArr.map((card) => {
              return (
                <RecommendationsItem
                  isDisabled={isDisabled}
                  setIsDisabled={setIsDisabled}
                  key={card.id}
                  card={card}
                  recommendationsArr={recommendationsArr}
                  setRecommendationsArr={setRecommendationsArr}
                />
              );
            })}
        </div>
        {recommendationsArr.length > 0 && <div className="hr" />}
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
  const { paymentForm, emptyArrState, setEmptyArrState, currentStateZipCodes } =
    useContext(mainContext);
  const [isSecced, setIsSucced] = useState(false);
  const windowSize = useSize();
  const formRef = useRef<HTMLFormElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // Is empty array
    let key: keyof PaymentFormType;
    const emptyArr: string[] = [];

    for (key in paymentForm) {
      if (key !== "apartment" && key !== "card_name") {
        // empty string check
        if (paymentForm[key] === "") emptyArr.push(key);
      }
    }

    // Is succed
    if (paymentForm.card_number.length < 19) {
      emptyArr.push("card_number");
    } else if (paymentForm.cvv.length < 3) {
      emptyArr.push("cvv");
    } else if (paymentForm.card_date.length < 5) {
      emptyArr.push("card_date");
    } else if (paymentForm.address.length < 3) {
      emptyArr.push("address");
    } else if (paymentForm.phone.length < 3) {
      emptyArr.push("phone");
    } else if (!currentStateZipCodes.some((obj) => obj.zip_code.toString() === paymentForm.zip)) {
      emptyArr.push("zip");
    } else if (!currentStateZipCodes.some((obj) => obj.city.toString() === paymentForm.city)) {
      emptyArr.push("city");
    }

    if (emptyArr.length !== 0) {
      setEmptyArrState(emptyArr);
    }

    if (
      //prettier-ignore
      currentStateZipCodes.some((obj) => obj.zip_code.toString() === paymentForm.zip) && 
      currentStateZipCodes.some((obj) => obj.city.toString() === paymentForm.city) && emptyArr.length === 0 &&
      paymentForm.card_number.length === 20 && paymentForm.cvv.length >= 3 && paymentForm.card_date.length === 6 &&
      paymentForm.address.length >= 3 && paymentForm.phone.length >= 3
    ) {
      setEmptyArrState([]); // clear array
      setIsSucced(true);
      fetch("", {
        method: "POST",
        body: JSON.stringify(paymentForm),
      });
    } // send form if all tests passed
  };

  return (
    <form ref={formRef} method="post">
      <CheckoutForms />
      <ShippingMethod />
      <Payment />
      <RememberMe />
      {windowSize < 1000 && <CheckoutFormBag isFull={false} />}
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
  const { paymentForm } = useContext(mainContext);

  return (
    <div className="remember_me">
      <h4>Remember me</h4>
      <div>
        <label onClick={() => localStorage.setItem("user_data", JSON.stringify(paymentForm))}>
          <input type="checkbox" />
          Save my information for a faster checkout
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
            type="text"
            placeholder="Card number"
            empty="a card number"
            name="card_number"
            max={19}
            required={true}
          />
          <div className="payment_card_bottom_name">
            <FormInput
              type="text"
              placeholder="Expiration Date (MM / YY)"
              empty="a valid expiration date"
              name="card_date"
              max={5}
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
  isDisabled,
  setIsDisabled,
  card,
  recommendationsArr,
  setRecommendationsArr,
}: {
  isDisabled: boolean;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  card: bagType;
  recommendationsArr: typeof whyNotToAddArr;
  setRecommendationsArr: React.Dispatch<React.SetStateAction<typeof whyNotToAddArr>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { bag, dispatch } = useContext(mainContext);

  const nextId = () => {
    return Math.max(...bag.map((card) => card.id)) + 1;
  };

  const handleClick = (cardId: number) => {
    setIsLoading(true);
    setIsDisabled(true);

    setTimeout(() => {
      // Add card
      localStorage.setItem("bag", JSON.stringify([...bag, card]));
      dispatch({ type: "if_not_exist", card: { ...card, id: nextId() } });
      // Delete card
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
