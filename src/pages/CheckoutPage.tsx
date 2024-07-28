import { CheckoutBag } from "../components/checkout/CheckoutBag";
import { CheckoutReg } from "../components/checkout/CheckoutReg";

export const CheckoutPage = () => {
  return (
    <div className="checkoutpage_main">
      <CheckoutHeader />
      <CheckoutForm />
    </div>
  );
};

const CheckoutHeader = () => {
  return (
    <div className="checkout_header_container">
      <div className="checkout_header">
        <div className="checkout_header_left">
          <a href="/">
            <img
              src="https://cdn.shopify.com/s/files/1/1864/2187/files/Bite-Logo-Checkout_x320.png?v=1707844834"
              alt="bite logo"
            />
          </a>
        </div>
        <div className="checkout_header_right">
          <a href="/">
            <svg
              className="close_svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const CheckoutForm = () => {
  return (
    <div className="checkout_form">
      <CheckoutReg />
      <CheckoutBag />
    </div>
  );
};
