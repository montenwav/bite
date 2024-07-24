import { MotionValue } from "framer-motion";

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
  fluoride?: boolean;
  count: number;
  price: number;
  old_price: number;
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

export type authoPlayHookType = (
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
