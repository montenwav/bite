import { Cards } from "../components/cards/Cards.js";
import { TopCompanies } from "../components/TopCompanies.js";
import { BitsAreBetter } from "../components/BitsAreBetter.js";
import { Reviews } from "../components/Reviews.js";
import { ShopByCategory } from "../components/ShopByCategory.js";
import { BottomCompanies } from "../components/BottomCompanies.js";
import { FAQs } from "../components/FAQs.js";
import { HowToUse } from "../components/HowToUse.js";
import { TwoUp } from "../components/TwoUp.js";
import { PopUp } from "../components/PopUp.js";
import { mainContext } from "../Provider.js";
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
