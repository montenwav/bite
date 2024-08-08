import { Cards } from "../components/cards/Cards.jsx";
import { TopCompanies } from "../components/TopCompanies.js";
import { BitsAreBetter } from "../components/BitsAreBetter.jsx";
import { Reviews } from "../components/Reviews.jsx";
import { ShopByCategory } from "../components/ShopByCategory.jsx";
import { BottomCompanies } from "../components/BottomCompanies.jsx";
import { FAQs } from "../components/FAQs.jsx";
import { HowToUse } from "../components/HowToUse.jsx";
import { TwoUp } from "../components/TwoUp.js";
import { PopUp } from "../components/PopUp.jsx";
import { mainContext } from "../Provider";
import { useContext } from "react";
import { Wallpaper } from "../components/Wallpaper.js";

export const Landing = () => {
  const { isPopUp } = useContext(mainContext);

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
