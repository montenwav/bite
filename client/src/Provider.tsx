import { useReducer, useState, useEffect } from "react";
import { createContext } from "react";
import { whyNotToAddArr } from "./WhyNotToAddArr";
import { reducerActionTypes, bagType } from "./types";
import { MainContextType, PaymentFormType } from "./types";
import { useFetch } from "./hooks/useFetch";

export const paymentFormObj = {
  email: "",
  country: "USA",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  state: "AL",
  zip: "",
  phone: "",
  card_number: "",
  card_date: "",
  cvv: "",
  card_name: "",
};

export type zipCodesType = {
  city: string;
  county: string;
  latitude: number;
  longitude: number;
  state: string;
  zip_code: number;
};

export const mainContext = createContext<MainContextType>({
  currentCityObj: {},
  setCurrentCityObj: () => {},
  currentStateZipCodes: [],
  setCurrentStateZipCodes: () => {},
  zipCodes: [],
  USStates: {},
  filteredDiscount: [{ id: 0, title: "PFJ24", discount: 24 }],
  setFilteredDiscount: () => {},
  paymentForm: paymentFormObj,
  setPaymentForm: () => {},
  emptyArrState: [],
  setEmptyArrState: () => {},
  isPopUp: true,
  setIsPopUp: () => {},
  isBagOpen: false,
  setIsBagOpen: () => {},
  isAdaptive: false,
  setIsAdaptive: () => {},
  whyNotCards: [],
  setWhyNotCards: () => {},
  bag: [],
  dispatch: () => {},
});

export function Provider({ children }: { children: React.ReactNode }) {
  const zipCodes = useFetch(
    "https://raw.githubusercontent.com/millbj92/US-Zip-Codes-JSON/master/USCities.json"
  ) as zipCodesType[]; // Base of ZIP codes of every US city.
  const USStates = useFetch(
    "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json"
  ) as Record<string, string>;

  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isAdaptive, setIsAdaptive] = useState(false);
  const [whyNotCards, setWhyNotCards] = useState(whyNotToAddArr);
  const [isPopUp, setIsPopUp] = useState(true);
  //prettier-ignore
  const [paymentForm, setPaymentForm] = useState<PaymentFormType>(JSON.parse(localStorage.getItem("user_data")!) || paymentFormObj);
  const [emptyArrState, setEmptyArrState] = useState<string[]>([]);
  //prettier-ignore
  const [filteredDiscount, setFilteredDiscount] = useState([{ id: 0, title: "PFJ24", discount: 24 }]);
  const [bag, dispatch] = useReducer(
    BagReducerFunc,
    JSON.parse(localStorage.getItem("bag")!) || []
  );
  //prettier-ignore
  const [currentStateZipCodes, setCurrentStateZipCodes] = useState<zipCodesType[]>([]); // Getting ZIP code objects by US state
  const [currentCityObj, setCurrentCityObj] = useState<zipCodesType | object>({}); // Current object with city and ZIP code

  useEffect(() => {
    setCurrentStateZipCodes(zipCodes.filter((obj) => obj.state === paymentForm.state));
  }, [zipCodes]);

  // Add new items to storage on every bag change
  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  return (
    <mainContext.Provider
      value={{
        currentCityObj,
        setCurrentCityObj,
        currentStateZipCodes,
        setCurrentStateZipCodes,
        zipCodes,
        USStates,
        filteredDiscount,
        setFilteredDiscount,
        paymentForm,
        setPaymentForm,
        emptyArrState,
        setEmptyArrState,
        isPopUp,
        setIsPopUp,
        isBagOpen,
        setIsBagOpen,
        whyNotCards,
        setWhyNotCards,
        bag,
        dispatch,
        isAdaptive,
        setIsAdaptive,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}

export const BagReducerFunc = (state: bagType[], action: reducerActionTypes) => {
  switch (action.type) {
    case "if_exist": {
      return state.map((item) =>
        item.id === action.cardId ? { ...item, count: item.count + 1 } : item
      );
    }
    case "if_not_exist": {
      return [...state, { ...action.card }];
    }
    case "increment_button": {
      return state.map((card) =>
        card.id === action.itemId ? { ...card, count: card.count + 1 } : card
      );
    }
    case "decrement_button": {
      const decrementItem = state.map((card) =>
        card.id === action.itemId ? { ...card, count: card.count - 1 } : card
      );
      const filteredItems = decrementItem.filter((card) => card.count > 0);
      return filteredItems;
    }
    case "remove_button": {
      return state.filter((card) => card.id !== action.itemId);
    }
  }
};
