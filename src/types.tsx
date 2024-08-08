import { MotionValue } from "framer-motion";
import { SetStateAction } from "react";
import { paymentFormObj } from "./Provider";
import { whyNotToAddArr } from "./WhyNotToAddArr";
import { zipCodesType } from "./components/checkout/CheckoutForms";

export type filteredDiscountType = { id: number; title: string; discount: number }[];

export type PaymentFormType = typeof paymentFormObj;
export type whyNotCardsArrType = typeof whyNotToAddArr;

export interface MainContextType {
  currentStateZipCodes: zipCodesType[];
  setCurrentStateZipCodes: React.Dispatch<React.SetStateAction<zipCodesType[]>>;
  zipCodes: zipCodesType[];
  USStates: Record<string, string>;
  filteredDiscount: filteredDiscountType;
  setFilteredDiscount: React.Dispatch<SetStateAction<filteredDiscountType>>;
  paymentForm: PaymentFormType;
  setPaymentForm: React.Dispatch<SetStateAction<PaymentFormType>>;
  emptyArrState: string[];
  setEmptyArrState: React.Dispatch<SetStateAction<string[]>>;
  isPopUp: boolean;
  setIsPopUp: React.Dispatch<SetStateAction<boolean>>;
  isBagOpen: boolean;
  setIsBagOpen: React.Dispatch<SetStateAction<boolean>>;
  isAdaptive: boolean;
  setIsAdaptive: React.Dispatch<SetStateAction<boolean>>;
  whyNotCards: whyNotCardsArrType;
  setWhyNotCards: React.Dispatch<SetStateAction<whyNotCardsArrType>>;
  bag: bagType[];
  dispatch: React.Dispatch<reducerActionTypes>;
}

export type reducerActionTypes =
  | { type: "if_exist"; cardId: number }
  | { type: "if_not_exist"; card: whyNotToAddObjType | cardsObjType }
  | { type: "increment_button"; itemId: number }
  | { type: "decrement_button"; itemId: number }
  | { type: "remove_button"; itemId: number };

export type cardsObjType = {
  id: number;
  display_title: string;
  src: string;
  colors: { colorId: number; color: string; clicked: boolean }[];
  type: string;
  reviews: string;
  month_price: number;
  title: string;
  count: number;
  price: number;
  old_price: number;
  fluoride?: boolean;
  bgPrevirew?: string;
  description?: string;
};

export type bagType = cardsObjType | whyNotToAddObjType;

export type cardsArrType = cardsObjType[];

export type whyNotToAddObjType = {
  id: number;
  added: boolean;
  title: string;
  why_not_title?: string;
  src: string;
  description: string;
  count: number;
  price: number;
  old_price: number;
  fluoride?: boolean;
};

export type autoPlayHookType = (
  imgIndex: number,
  setImgIndex: React.Dispatch<React.SetStateAction<number>>,
  length: number,
  isDepenencies: boolean
) => void;

export type dragHookType = (
  imgIndex: number,
  setImgIndex: React.Dispatch<React.SetStateAction<number>>,
  length: number,
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
) => {
  onDragStart: () => void;
  onDragEnd: () => void;
  dragLenght: MotionValue<number>;
};
