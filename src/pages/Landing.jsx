import { Cards } from "../components/cards/Cards.jsx";
import { TopCompanies } from "../components/TopCompanies.jsx";
import { BitsAreBetter } from "../components/BitsAreBetter.jsx";
import { Reviews } from "../components/Reviews.jsx";
import { ShopByCategory } from "../components/ShopByCategory.jsx";
import { BottomCompanies } from "../components/BottomCompanies.jsx";
import { FAQs } from "../components/FAQs.jsx";
import { HowToUse } from "../components/HowToUse.jsx";
import { TwoUp } from "../components/ TwoUp.jsx";
import { PopUp } from "../components/PopUp.jsx";
import { isPopUpCtx } from "../Contexts.jsx";
import { useContext } from "react";
import { Wallpaper } from "../components/Wallpaper.jsx";

export const Landing = () => {
  const isPopUp = useContext(isPopUpCtx);

  return (
    <>
      {isPopUp && <PopUp />}
      <Wallpaper />
      <TopCompanies />
      <HowToUse />
      <Reviews />
      <ShopByCategory />
      <BitsAreBetter />
      <TwoUp />
      <Cards />
      <BottomCompanies />
      <FAQs />
    </>
  );
};
