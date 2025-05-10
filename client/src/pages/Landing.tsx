import { lazy, Suspense } from "react";
const TopCompanies = lazy(() => import("../components/TopCompanies.js"));
import { Reviews } from "../components/Reviews.js";
const ShopByCategory = lazy(() => import("../components/ShopByCategory.js"));
const BitsAreBetter = lazy(() => import("../components/BitsAreBetter.js"));
const BottomCompanies = lazy(() => import("../components/BottomCompanies.js"));
const HowToUse = lazy(() => import("../components/HowToUse.js"));
const Cards = lazy(() => import("../components/cards/Cards.js"));
import { TwoUp } from "../components/TwoUp.js";
import { FAQs } from "../components/FAQs.js";
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
      <Suspense fallback={<p>Loading...</p>}>
        <TopCompanies />
      </Suspense>
      <HowToUse />
      <Reviews />
      <Suspense fallback={<p>Loading...</p>}>
        <ShopByCategory />
        <BitsAreBetter />
        <TwoUp />
        <Cards />
        <BottomCompanies />
      </Suspense>
      <FAQs />
    </>
  );
};
