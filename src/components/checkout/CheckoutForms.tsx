import { useContext } from "react";
import { mainContext, zipCodesType } from "../../Provider";
import { PaymentFormType } from "../../types";
import "../../css/style.css";
import PhoneInput from "react-phone-number-input";

export const CheckoutForms = () => {
  return (
    <div className="checkout_forms_container">
      <div className="checkout_forms_contact">
        <h4 className="boldH4 bold">Contact</h4>
        <a href="login">
          <u>Log in</u>
        </a>
      </div>
      <FormInput placeholder="Email" name="email" type="email" required={true} />
      <label style={{ marginTop: "15px" }} className="checkout_forms_label">
        <input type="checkbox" name="email" />
        Email me with news and offers
      </label>
      <DeliveryForm />
    </div>
  );
};

const DeliveryForm = () => {
  const {
    paymentForm,
    setPaymentForm,
    zipCodes,
    USStates,
    emptyArrState,
    setCurrentStateZipCodes,
  } = useContext(mainContext);

  const handleState = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setPaymentForm({ ...paymentForm, state: value });
    setCurrentStateZipCodes(zipCodes.filter((obj) => obj.state === value));
  };

  return (
    <>
      <div className="delivery_forms_content">
        <h4 style={{ marginBottom: "15px" }} className="bold">
          Delivery
        </h4>
      </div>
      <div className="delivery_form">
        <select
          value={paymentForm.country}
          onChange={(e) => setPaymentForm({ ...paymentForm, country: e.target.value })}
        >
          <option value="USA">USA</option>
        </select>
        <div className="delivery_forms_name">
          <FormInput
            placeholder="First name"
            name="firstName"
            type="text"
            required={true}
            empty="a first name"
          />
          <FormInput
            placeholder="Last name"
            name="lastName"
            type="text"
            required={true}
            empty="a last name"
          />
        </div>
        <FormInput placeholder="Address" name="address" type="text" required={true} />
        <FormInput
          placeholder="Apartemnt, suite, etc. (optional)"
          name="apartment"
          type="text"
          required={false}
        />
        <div className="delivery_forms_city">
          <FormInput placeholder="City" name="city" type="text" required={true} />
          <select className="american_states" value={paymentForm.state} onChange={handleState}>
            {Object.values(USStates).map((state, index) => (
              <option key={index} value={index}>
                {state}
              </option>
            ))}
          </select>
          <FormInput
            placeholder="ZIP code"
            name="zip"
            type="number"
            required={true}
            max={5}
            empty="a ZIP code"
          />
        </div>
        <div className="phone_input_container">
          <PhoneInput
            placeholder="Phone"
            // style={{
            //   border: emptyArrState.includes("phone")
            //     ? "2px solid red"
            //     : "1px solid var(--hr-color)",
            // }}
            value={paymentForm.phone}
            defaultCountry="US"
            onChange={(value: any) => setPaymentForm({ ...paymentForm, phone: value })}
          />
          <div className="phone_stuff">
            <span className="checkout_bag_question_content_img">
              <img
                style={{ marginRight: "15px" }}
                className="icon_16px"
                src="question-25.png"
                alt="questions mark in circle"
              />
              <div className="checkout_bag_question_content">
                <h6>In case we need to contact you about your order</h6>
              </div>
            </span>
          </div>
          {emptyArrState.includes("phone") && (
            <h5 style={{ color: "#dd1d1d", marginTop: "5px" }}>Enter a phone number</h5>
          )}
        </div>
      </div>
    </>
  );
};

export const FormInput = ({
  placeholder,
  name,
  type,
  required,
  max,
  empty,
}: {
  placeholder: string;
  name: keyof PaymentFormType;
  type: string;
  required: boolean;
  max?: number;
  empty?: string;
}) => {
  const {
    paymentForm,
    setPaymentForm,
    emptyArrState,
    currentCityObj,
    setCurrentCityObj,
    currentStateZipCodes,
  } = useContext(mainContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    // Setting current object by ZIP code
    if (name === "zip" && currentStateZipCodes.length > 0) {
      const currnetZipObj: zipCodesType | undefined = currentStateZipCodes.find(
        (obj) => obj.zip_code.toString() === value.slice(0, String(obj.zip_code).length) // paymentForm.zip
      );
      if (currnetZipObj) {
        setCurrentCityObj(currnetZipObj);
      }
    }

    // Setting current object by city
    if (name === "city" && currentStateZipCodes.length > 0) {
      const currnetZipObj: zipCodesType | undefined = currentStateZipCodes.find(
        (obj) => obj.city === value // paymentForm.city
      );
      if (currnetZipObj) {
        setCurrentCityObj(currnetZipObj);
      }
    }

    setPaymentForm({
      ...paymentForm,
      [event.target.name]: value,
    });
  };

  const inputValues = () => {
    if (name === "card_number") {
      return paymentForm.card_number
        .replace(/\s+/g, "")
        .replace(/[^0-9]/gi, "")
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .slice(0, max);
    }

    if (name === "card_date") {
      return paymentForm.card_date
        .replace(/^([1-9]\/|[2-9])$/g, "0$1/") // To handle 3/ > 03/
        .replace(
          /^(0[1-9]{1}|1[0-2]{1})$/g,
          "$1/" // 11 > 11/
        )
        .replace(
          /^([0-1]{1})([3-9]{1})$/g,
          "0$1/$2" // 13 > 01/3
        )
        .replace(
          /^(\d)\/(\d\d)$/g,
          "0$1/$2" // To handle 1/11 > 01/11
        )
        .replace(
          /^(0?[1-9]{1}|1[0-2]{1})([0-9]{2})$/g,
          "$1/$2" // 141 > 01/41
        )
        .replace(
          /^([0]{1,})\/|[0]{1,}$/g,
          "0" // To handle 0/ > 0 and 00 > 0
        )
        .replace(
          /[^\d\/]|^[\/]{0,}$/g,
          "" // To allow only numbers and /
        )
        .replace(
          /\/\//g,
          "/" // Prevent entering more than 1 /
        )
        .slice(0, max);
    }
    return paymentForm[name].slice(0, max);
  };

  return (
    <div className="checkout_input_phone">
      <input
        className={name === "card_date" ? "card_date_input" : ""}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        name={name}
        value={inputValues()}
        style={{
          border:
            name !== "apartment" && emptyArrState.includes(name)
              ? "2px solid red"
              : "1px solid var(--hr-color)",
        }}
        required={required}
      />
      {name === "card_number" && <img src="/lock.svg" className="lock_icon" alt="lock" />}
      {name === "cvv" && (
        <div className="cvv_question">
          <span className="checkout_bag_question_content_img">
            <img
              style={{ marginRight: "2px" }}
              className="icon_16px"
              src="question-25.png"
              alt="questions mark in circle"
            />
            <div className="checkout_bag_question_content">
              <h6>
                3-digit security code usually found on the back of your card. American Express cards
                have a 4-digit code located on the front.
              </h6>
            </div>
          </span>
        </div>
      )}
      {emptyArrState.includes(name) && name !== "apartment" && name !== "card_name" && (
        <h5 style={{ color: "#dd1d1d", marginTop: "5px" }}>{`Enter ${
          empty
            ? `${empty}`
            : name.charAt(0) === "a" || name.charAt(0) === "e"
            ? `an ${name}`
            : `a ${name}`
        }`}</h5>
      )}
      {name === "city" &&
        paymentForm.zip.length > 2 &&
        (currentCityObj as zipCodesType).city &&
        (currentCityObj as zipCodesType).city !== paymentForm.city && (
          <h5 style={{ marginTop: "5px" }}>
            Did you mean{" "}
            <b
              style={{ color: "gray", cursor: "pointer" }}
              onClick={() =>
                setPaymentForm({ ...paymentForm, city: (currentCityObj as zipCodesType).city })
              }
            >
              {(currentCityObj as zipCodesType).city}
            </b>
            ?
          </h5>
        )}
    </div>
  );
};
