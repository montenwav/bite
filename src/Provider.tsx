import { useReducer, useState, useEffect } from "react";
import { createContext } from "react";
import { whyNotToAddArr } from "./WhyNotToAddArr";
import { reducerActionTypes, bagType } from "./types";
import { SetStateAction } from "react";

type whyNotCardsArrType = typeof whyNotToAddArr;

interface MainContextType {
  isPopUp: boolean;
  setIsPopUp: React.Dispatch<SetStateAction<boolean>>;
  isBagOpen: boolean;
  setIsBagOpen: React.Dispatch<SetStateAction<boolean>>;
  isAdaptive: boolean;
  setIsAdaptive: React.Dispatch<SetStateAction<boolean>>;
  whyNotCards: whyNotCardsArrType;
  setWhyNotCards: React.Dispatch<SetStateAction<whyNotCardsArrType>>;
  addedItems: bagType[];
  dispatch: React.Dispatch<reducerActionTypes>;
}

export const mainContext = createContext<MainContextType>({
  isPopUp: true,
  setIsPopUp: () => {},
  isBagOpen: false,
  setIsBagOpen: () => {},
  isAdaptive: false,
  setIsAdaptive: () => {},
  whyNotCards: [],
  setWhyNotCards: () => {},
  addedItems: [],
  dispatch: () => {},
});

export function Provider({ children }: { children: React.ReactNode }) {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isAdaptive, setIsAdaptive] = useState(false);
  const [whyNotCards, setWhyNotCards] = useState(whyNotToAddArr);
  const [isPopUp, setIsPopUp] = useState(true);

  //Add new item to bag
  const initialState: bagType[] =
    JSON.parse(localStorage.getItem("bag")!) || [];
  const [addedItems, dispatch] = useReducer(BagReducerFunc, initialState);

  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(addedItems));
  }, [addedItems]);

  return (
    <mainContext.Provider
      value={{
        isPopUp,
        setIsPopUp,
        isBagOpen,
        setIsBagOpen,
        whyNotCards,
        setWhyNotCards,
        addedItems,
        dispatch,
        isAdaptive,
        setIsAdaptive,
      }}
    >
      {children}
    </mainContext.Provider>
  );
}

export const BagReducerFunc = (
  addedItems: bagType[],
  action: reducerActionTypes
) => {
  switch (action.type) {
    case "if_exist": {
      return addedItems.map((item) =>
        item.id === action.cardId ? { ...item, count: item.count + 1 } : item
      );
    }
    case "if_not_exist": {
      return [{ ...action.card }, ...addedItems];
    }
    case "increment_button": {
      return addedItems.map((card) => {
        if (card.id === action.itemId)
          return { ...card, count: card.count + 1 };
        return card;
      });
    }
    case "decrement_button": {
      const decrementItem = addedItems.map((card) => {
        if (card.id === action.itemId)
          return { ...card, count: card.count - 1 };
        return card;
      });
      const filteredItems = decrementItem.filter((card) => card.count > 0);
      return filteredItems;
    }
    case "remove_button": {
      return addedItems.filter((c) => c.id !== action.itemId);
    }
  }
};
