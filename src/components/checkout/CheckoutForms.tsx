import { useContext, useEffect, useState } from "react";
import { mainContext } from "../../Provider";
import { PaymentFormType } from "../../types";
import "../../css/style.css";
import PhoneInput from "react-phone-number-input";

export type zipCodesType = {
  city: string;
  county: string;
  latitude: number;
  longitude: number;
  state: string;
  zip_code: number;
};

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
    currentStateZipCodes,
    setCurrentStateZipCodes,
  } = useContext(mainContext);
  const [currentZipCity, setCurrentZipCity] = useState<string | undefined>(undefined); // Current city based on ZIP code

  useEffect(() => {
    localStorage.setItem("credentials", JSON.stringify(paymentForm));
  }, [paymentForm]);

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
        <div className="checkout_input_item">
          <FormInput
            placeholder="Apartemnt, suite, etc. (optional)"
            name="apartment"
            type="text"
            required={false}
          />
        </div>
        <div className="delivery_forms_city">
          <FormInput
            placeholder="City"
            name="city"
            type="text"
            required={true}
            currnetZipCity={currentZipCity && currentZipCity}
          />
          <select value={paymentForm.state} onChange={handleState}>
            {Object.values(USStates).map((state, index) => (
              <option key={index} value={Object.keys(USStates)[index]}>
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
            zipCodes={zipCodes}
            currentStateZipCodes={currentStateZipCodes}
            setCurrentZipCity={setCurrentZipCity}
          />
        </div>
        <div className="phone_input_container">
          <PhoneInput
            placeholder="Phone"
            value={paymentForm.phone}
            defaultCountry="US"
            onChange={(value) => setPaymentForm({ ...paymentForm, phone: value })}
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
  zipCodes,
  currnetZipCity,
  setCurrentZipCity,
  currentStateZipCodes,
}: {
  placeholder: string;
  name: keyof PaymentFormType;
  type: string;
  required: boolean;
  max?: number;
  empty?: string;
  zipCodes?: zipCodesType[];
  currnetZipCity?: string;
  setCurrentZipCity?: React.Dispatch<React.SetStateAction<string | undefined>>;
  currentStateZipCodes?: zipCodesType[];
}) => {
  const { paymentForm, setPaymentForm, emptyArrState } = useContext(mainContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (max && value.length < max + 1) {
      if (name === "zip" && currentStateZipCodes && setCurrentZipCity && zipCodes) {
        const currnetZipObj: zipCodesType | undefined = currentStateZipCodes.find(
          (obj) => obj.zip_code.toString() === value.slice(0, String(obj.zip_code).length)
        );
        if (currnetZipObj) {
          setCurrentZipCity(currnetZipObj.city);
        }
      }

      if (name === "card_number") {
        //prettier-ignore
        setPaymentForm({ ...paymentForm, card_number: value });
      }

      setPaymentForm({
        ...paymentForm,
        [event.target.name]: value,
      });
    }

    setPaymentForm({
      ...paymentForm,
      [event.target.name]: value,
    });
  };

  return (
    <div className="checkout_input_item">
      <div className="checkout_input_phone">
        <input
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          name={name}
          value={paymentForm[name]}
          style={{
            border:
              name !== "apartment" && emptyArrState.includes(name)
                ? "2px solid red"
                : "1px solid var(--hr-color)",
          }}
          required={required}
        />
      </div>
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
        currnetZipCity &&
        currnetZipCity !== paymentForm.city && (
          <h5 style={{ marginTop: "5px" }}>
            Did you mean{" "}
            <b
              style={{ color: "gray", cursor: "pointer" }}
              onClick={() => setPaymentForm({ ...paymentForm, city: currnetZipCity })}
            >
              {currnetZipCity}
            </b>
            ?
          </h5>
        )}
    </div>
  );
};
