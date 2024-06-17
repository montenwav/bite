import { createContext, useReducer, useState, useEffect } from "react";

export const isBagOpenCtx = createContext(null);
export const setIsBagOpenCtx = createContext(null);

export const isAdaptiveCtx = createContext(null);
export const setIsAdaptiveCtx = createContext(null);

export const whyNotCardsCtx = createContext(null);
export const setWhyNotCardsCtx = createContext(null);

export const addedItemsCtx = createContext(null);
export const dispatchCtx = createContext(null);

export const isEmptyCtx = createContext(null);
export const setIsEmptyCtx = createContext(null);

export function Provider({ children }) {
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isAdaptive, setIsAdaptive] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [whyNotCards, setWhyNotCards] = useState(whyNotToAddArr);

  //Add new item to bag
  const getBagSrotage = JSON.parse(localStorage.getItem("bag")) || [];
  const [addedItems, dispatch] = useReducer(BagReducerFunc, getBagSrotage);

  useEffect(() => {
    //Set storage
    localStorage.setItem("bag", JSON.stringify(addedItems));
    //IsEmpty Check
    setIsEmpty(addedItems.length === 0);
  }, [addedItems]);

  return (
        <isEmptyCtx.Provider value={isEmpty}>
          <setIsEmptyCtx.Provider value={setIsEmpty}>
            <isBagOpenCtx.Provider value={isBagOpen}>
              <setIsBagOpenCtx.Provider value={setIsBagOpen}>
                <whyNotCardsCtx.Provider value={whyNotCards}>
                  <setWhyNotCardsCtx.Provider value={setWhyNotCards}>
                    <addedItemsCtx.Provider value={addedItems}>
                      <dispatchCtx.Provider value={dispatch}>
                        <isAdaptiveCtx.Provider value={isAdaptive}>
                          <setIsAdaptiveCtx.Provider value={setIsAdaptive}>
                            {children}
                          </setIsAdaptiveCtx.Provider>
                        </isAdaptiveCtx.Provider>
                      </dispatchCtx.Provider>
                    </addedItemsCtx.Provider>
                  </setWhyNotCardsCtx.Provider>
                </whyNotCardsCtx.Provider>
              </setIsBagOpenCtx.Provider>
            </isBagOpenCtx.Provider>
          </setIsEmptyCtx.Provider>
        </isEmptyCtx.Provider>
  );
}

export const BagReducerFunc = (addedItems, action) => {
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
      return action.decrementArr;
    }
    case "remove_button": {
      return addedItems.filter((c) => c.id !== action.itemId);
    }
  }
  throw Error("Unknown action: " + action.type);
};

const whyNotToAddArr = [
  {
    id: 0,
    added: false,
    title: "Bamboo Toothbrush",
    why_not_title: "Bamboo Toothbrush Subscription",
    src: "https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-desktop-toothbrush_49ff32a7-1a50-4b23-98bf-58bdaca21188_400x400.jpg?v=1704393857",
    description: "Toothbrush",
    count: 1,
    price: 5,
    old_price: 6,
  },
  {
    id: 1,
    added: false,
    title: "Toothpaste Bits",
    why_not_title: "Fluoride-Free Toothpaste",
    src: "https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-tpb-ff--4oz-mint_047543a9-2601-4cf1-a1c3-05686dd8f622_400x400.jpg?v=1702510991",
    description: "Mint",
    fluoride: false,
    count: 1,
    price: 32,
    old_price: 48,
  },
  {
    id: 2,
    added: false,
    title: "Whitening Gel",
    src: "https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-desktop-whitening-gel_400x400.jpg?v=1700142723",
    description: "Whitening Gel Kit",
    count: 1,
    price: 20,
    old_price: 24,
  },
  {
    id: 3,
    added: false,
    title: "Toothpaste Bits",
    why_not_title: "Fluoride Toothpaste",
    src: "https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-tpb-wf-2oz-mint-fluoride_1cdc3501-5ff2-4aed-9d5b-514ed12dd018_400x400.jpg?v=1704318283",
    description: "Mint",
    fluoride: true,
    count: 1,
    price: 32,
    old_price: 48,
  },
];
