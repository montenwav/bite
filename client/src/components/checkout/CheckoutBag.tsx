import { useContext, useRef, useState } from "react";
import { cardsObjType, whyNotToAddObjType, bagType } from "../../types";
import { mainContext } from "../../Provider";
import { availablePromocodes } from "../../availablePromocodes";

export const CheckoutFormBag = ({ isFull }: { isFull: boolean }) => {
  const { bag, filteredDiscount } = useContext(mainContext);

  let allDiscounts: number = filteredDiscount.reduce((acc, promo) => acc + promo.discount, 0); // all discounts in percent
  if (allDiscounts > 100) allDiscounts = 100;

  return (
    <div className={`checkout_form_bag_container ${isFull ? "full_bag" : ""}`}>
      <div className="checkout_form_bag">
        {bag &&
          bag.map((card) => (
            <CheckoutBagItem allDiscounts={allDiscounts} key={card.id} card={card} />
          ))}
        <CheckoutBagPromocode />
        <CheckoutBagTotal allDiscounts={allDiscounts} />
      </div>
    </div>
  );
};

const CheckoutBagTotal = ({ allDiscounts }: { allDiscounts: number }) => {
  const { bag } = useContext(mainContext);

  const withoutDiscounts = Number(
    bag.map((obj) => obj.price * obj.count).reduce((acc, val) => acc + val)
  );
  const subtotal = (withoutDiscounts / 100) * (100 - allDiscounts); // all items with discounts
  const savings = (withoutDiscounts / 100) * allDiscounts;
  const taxes = (subtotal / 100) * 7.5; // 7.5% taxes

  return (
    <>
      <div className="checkout_bag_total">
        <div className="checkout_bag_total_item">
          <h5>Subtotal</h5>
          <h5>${subtotal.toFixed(2)}</h5>
        </div>
        <Shipping />
        <Taxes taxes={taxes} />
        <div className="checkout_bag_total_item">
          <h4>Total</h4>
          <span className="checkout_bag_total_right">
            <h5 style={{ marginRight: "10px", color: "gray" }}>USD</h5>
            <h4>${(subtotal + taxes).toFixed(2)}</h4>
          </span>
        </div>
      </div>
      <div className="total_savings">
        <img
          style={{ marginRight: "5px" }}
          className="icon_16px"
          src="./tag-discount-svgrepo-com.svg"
        />
        <h5>TOTAL SAVINGS</h5>
        <h5>${savings.toFixed(2)}</h5>
      </div>
    </>
  );
};

const Shipping = () => {
  const [isShipping, setIsShipping] = useState(false);

  const handleOpen = () => {
    document.body.style.overflow = "hidden";
    setIsShipping(true);
  };

  const handleExit = () => {
    document.body.style.overflow = "auto";
    setIsShipping(false);
  };

  return (
    <div className="checkout_bag_total_item">
      <span>
        <h5>Shipping</h5>
        <img
          onClick={handleOpen}
          style={{ marginLeft: "5px" }}
          className="icon_16px"
          src="question-25.png"
          alt="questions mark in circle"
        />
      </span>
      {isShipping && (
        <>
          <div onClick={handleExit} className="shipping_content_bg" />
          <div className="shipping_content_inner">
            <div className="shipping_policy">
              <span>
                <h4>
                  <b>Shipping policy</b>
                </h4>
                <svg
                  style={{ cursor: "pointer" }}
                  width="25px"
                  height="25px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </span>
              <p>
                Bite Toothpaste Bits ("we" and "us") is the operator of (bitetoothpastebits.com)
                ("Website"). By placing an order through this Website you will be agreeing to the
                terms below. These are provided to ensure both parties are aware of and agree upon
                this arrangement to mutually protect and set expectations on our service.
              </p>
              <span className="shipping_policy_bold">1. General</span>
              <p>
                Subject to stock availability. We try to maintain accurate stock counts on our
                website but from time-to-time there may be a stock discrepancy and we will not be
                able to fulfill all your items at time of purchase. In this instance, we will
                fulfill the available products to you, and contact you about whether you would
                prefer to await restocking of the backordered item or if you would prefer for us to
                process a refund.
              </p>
              <span className="shipping_policy_bold">2. Shipping Costs</span>
              <p>
                Shipping costs are calculated during checkout based on weight, dimensions and
                destination of the items in the order. Payment for shipping will be collected with
                the purchase. This price will be the final price for shipping cost to the customer.
              </p>
              <span className="shipping_policy_bold">3. Returns</span>
              <span className="shipping_policy_bold">3.1 Return Due To Dissatisfaction</span>
              <p>
                For first-time purchases, Bite Toothpaste Bits will happily accept returns due to
                dissatisfaction as long as a request to return is received by us within 30 days of
                receipt of item and are returned to us in original packaging, unused and in
                resellable condition. Return shipping will be paid at the customers expense and will
                be required to arrange their own shipping. Once returns are received and accepted,
                refunds will be processed to store credit for a future purchase. We will notify you
                once this has been completed through email. (Bite Toothpaste Bits) will refund the
                value of the goods returned but will NOT refund the value of any shipping paid.
              </p>
              <span className="shipping_policy_bold">3.2 Warranty Returns Bite</span>
              <p>
                Toothpaste Bits will happily honor any valid warranty claims, provided a claim is
                submitted within 30 days of receipt of items. Customers will be required to pre-pay
                the return shipping, however we will reimburse you upon successful warranty claim.
                Upon return receipt of items for warranty claim, you can expect Bite Toothpaste Bits
                to process your warranty claim within 7 days. Once warranty claim is confirmed, you
                will receive the choice of: (a) refund to your payment method (b) a refund in store
                credit (c) a replacement item sent to you (if stock is available)
              </p>
              <span className="shipping_policy_bold">4. Delivery Terms</span>
              <span className="shipping_policy_bold">4.1 Transit Time Domestically</span>
              <p>In general, domestic shipments are in transit for 4 - 11 days</p>
              <span className="shipping_policy_bold">4.2 Transit time Internationally</span>
              <p>
                Generally, orders shipped internationally are in transit for 4 - 28 days. This
                varies greatly depending on the courier you have selected. We are able to offer a
                more specific estimate when you are choosing your courier at checkout.
              </p>
              <span className="shipping_policy_bold">4.3 Dispatch Time</span>
              <p>
                Orders are usually dispatched within 2-3 business days of payment of order Our
                warehouse operates on Monday - Friday during standard business hours, except on
                national holidays at which time the warehouse will be closed. In these instances, we
                take steps to ensure shipment delays will be kept to a minimum.
              </p>
              <span className="shipping_policy_bold">4.4 Change Of Delivery</span>
              <p>
                Address For change of delivery address requests, we are able to change the address
                at any time before the order has been dispatched.
              </p>
              <span className="shipping_policy_bold">4.5 P.O. Box Shipping Bite Toothpaste</span>
              <p>
                Bits will ship to P.O. box addresses using postal services only. We are unable to
                offer couriers services to these locations.
              </p>
              <span className="shipping_policy_bold">4.6 Military Address Shipping</span>
              <p>
                We are able to ship to military addresses using USPS. We are unable to offer this
                service using courier services.
              </p>
              <span className="shipping_policy_bold">4.7 Items Out Of Stock</span>
              <p>
                If an item is out of stock, we will wait for the item to be available before
                dispatching your order. Existing items in the order will be reserved while we await
                this item.
              </p>
              <span className="shipping_policy_bold">4.8 Delivery Time Exceeded</span>
              <p>
                If delivery time has exceeded the forecasted time, please contact us so that we can
                conduct an investigation.
              </p>
              <span className="shipping_policy_bold">5. Tracking Notifications</span>
              <p>
                Upon dispatch, customers will receive a tracking link from which they will be able
                to follow the progress of their shipment based on the latest updates made available
                by the shipping provider.
              </p>
              <span className="shipping_policy_bold">6. Parcels Damaged In Transit</span>
              <p>
                If you find a parcel is damaged in-transit, if possible, please reject the parcel
                from the courier and get in touch with our customer service. If the parcel has been
                delivered without you being present, please contact customer service with next
                steps.
              </p>
              <span className="shipping_policy_bold">7. Duties & Taxes</span>
              <span className="shipping_policy_bold">7.1 Sales Tax</span>
              <p>
                Sales tax has already been applied to the price of the goods as displayed on the
                website
              </p>
              <span className="shipping_policy_bold">7.2 Import Duties & Taxes</span>
              <p>
                Import duties and taxes for international shipments may be liable to be paid upon
                arrival in destination country. This varies by country, and email encourage you to
                be aware of these potential costs before placing an order with us. If you refuse to
                to pay duties and taxes upon arrival at your destination country, the goods will be
                returned to email at the customers expense, and the customer will receive a refund
                for the value of goods paid, minus the cost of the return shipping. The cost of the
                initial shipping will not be refunded.
              </p>
              <span className="shipping_policy_bold">8. Cancellations</span>
              <p>
                If you change your mind before you have received your order, we are able to accept
                cancellations at any time before the order has been dispatched. If an order has
                already been dispatched, please refer to our refund policy.
              </p>
              <span className="shipping_policy_bold">9. Insurance</span>
              <p>
                Parcels are insured for loss and damage up to the value as stated by the courier.
              </p>
              <span className="shipping_policy_bold">
                9.1 Process for parcel damaged in-transit
              </span>
              <p>
                We will process a refund or replacement as soon as the courier has completed their
                investigation into the claim.
              </p>
              <span className="shipping_policy_bold">9.2 Process for parcel lost in-transit</span>
              <p>
                We will process a refund or replacement as soon as the courier has conducted an
                investigation and deemed the parcel lost.
              </p>
              <span className="shipping_policy_bold">10. Customer service</span>
              <p style={{ paddingBottom: "20px" }}>
                For all customer service enquiries, please email us at hello@bitetoothpastebits.com
              </p>
            </div>
          </div>
        </>
      )}
      <h5>FREE</h5>
    </div>
  );
};

const Taxes = ({ taxes }: { taxes: number }) => {
  return (
    <div className="checkout_bag_total_item">
      <span>
        <h5>Estimated taxes</h5>
        <span className="checkout_bag_question_content_img">
          <img className="icon_16px" src="question-25.png" alt="questions mark in circle" />
          <div className="checkout_bag_question_content">
            <h6>
              The final tax and total will be confirmed by email or text after you place your order.
            </h6>
          </div>
        </span>
      </span>
      <h5>${taxes.toFixed(2)}</h5>
    </div>
  );
};

const CheckoutBagItem = ({ allDiscounts, card }: { allDiscounts: number; card: bagType }) => {
  const { filteredDiscount } = useContext(mainContext);

  return (
    <div className="checkout_bag_item">
      <div className="checkout_bag_img">
        <img src={card.src} alt={card.title} />
        <div className="checkout_bag_count">{card.count}</div>
      </div>
      <div className="checkout_bag_description">
        <h5>{card.title}</h5>
        <h6>{(card as cardsObjType).type || (card as whyNotToAddObjType).description}</h6>
        {/* If discounts selected */}
        <div className="checkout_bag_discount">
          {filteredDiscount.length > 0 &&
            filteredDiscount.map((promo) => (
              <div key={promo.id} className="checkout_bag_discount_item">
                <img
                  style={{ height: "16px", width: "16px", marginRight: "5px" }}
                  src="./tag-discount-svgrepo-com.svg"
                />
                <h6>{`${promo.title} (-${(
                  ((card.price * card.count) / 100) *
                  promo.discount
                ).toFixed(2)}$)`}</h6>
              </div>
            ))}
        </div>
      </div>
      <div className="checkout_bag_price">
        {filteredDiscount.length > 0 && ( //prettier-ignore // Usual price
          <s>
            <h5 style={{ color: "gray" }}>{card.price * card.count}$</h5>
          </s>
        )}
        {/* Price with discount */}
        <h5>{(((card.price * card.count) / 100) * (100 - allDiscounts)).toFixed(2)}$</h5>
      </div>
    </div>
  );
};

const CheckoutBagPromocode = () => {
  const { filteredDiscount, setFilteredDiscount } = useContext(mainContext); // Selected discounts
  const [promocode, setPromocode] = useState(""); // Discount input
  const [notFoundPromo, setNotFoundPromo] = useState(false); // Empty line handle
  const [isLoading, setIsLoading] = useState(false);
  const labelRef = useRef<HTMLFormElement>(null);

  const promlen = promocode.length > 0;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setIsLoading(true);
    // Returns discount object if found
    const ifFind = availablePromocodes.find((promo) => promo.title === promocode);

    setTimeout(() => {
      if (typeof ifFind !== "undefined") {
        const stringifiedDiscountArr: string[] = [...filteredDiscount, ifFind].map((obj) =>
          JSON.stringify(obj)
        );
        const filteredDiscountArr: { id: number; title: string; discount: number }[] = Array.from(
          new Set(stringifiedDiscountArr)
        ).map((obj) => JSON.parse(obj)); // Add discount if exist and exclude copies

        setFilteredDiscount(filteredDiscountArr);
        setNotFoundPromo(false);
      } else {
        setNotFoundPromo(true);
      }
      setPromocode("");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="checkout_bag_promocode">
      <form ref={labelRef} className="promocode_label">
        <input
          type="text"
          style={{
            border: `${notFoundPromo ? "2px" : "1px"} solid ${
              notFoundPromo ? "#dd1d1d" : "var(--hr-color)"
            }`,
          }}
          value={promocode}
          onChange={(e) => setPromocode(e.target.value)}
          placeholder="Discount code or gift card"
        />
        <button
          className="rounded_btn apply_btn"
          style={{
            color: promlen ? "white" : "gray",
            background: promlen ? "black" : "#ededed",
            border: promlen ? "none" : "1px solid var(--hr-color)",
          }}
          onClick={handleClick}
          disabled={!promlen}
        >
          {isLoading ? (
            <img className="dr_livesey" src="./dfcjda2-74a21565-2f97-4b33-abf9-a55e45f6918b.gif" />
          ) : (
            "Apply"
          )}
        </button>
      </form>
      {notFoundPromo && (
        <h5 style={{ color: "#dd1d1d", marginTop: "5px" }}>
          Enter a valid discount code or gift card
        </h5>
      )}
      <EnteredPromos />
    </div>
  );
};

const EnteredPromos = () => {
  const { filteredDiscount, setFilteredDiscount } = useContext(mainContext);

  const handleDelete = (promocode: string) => {
    // Delete from list of existing promocodes
    setFilteredDiscount(filteredDiscount.filter((promo) => promo.title !== promocode));
  };

  return (
    <div className="chechout_bag_entered_promos">
      {filteredDiscount.map((promo) => (
        <span key={promo.id} className="entered_promos_item">
          <img
            style={{ height: "16px", width: "16px", marginRight: "5px" }}
            src="./tag-discount-svgrepo-com.svg"
          />
          <h5>{promo.title}</h5>
          <svg
            onClick={() => handleDelete(promo.title)}
            className="close_svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </span>
      ))}
    </div>
  );
};
