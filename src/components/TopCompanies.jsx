import { memo, useEffect, useState } from "react";
import { useAutoPlay } from "../hooks/useAutoPlay.jsx";
import { companiesList } from "./CompaniesList.jsx";

export const TopCompanies = memo(() => {
  const [imgIndex, setImgIndex] = useState(0);
  useAutoPlay(
    imgIndex,
    setImgIndex,
    true,
    companiesList.length - 5
  );

  return (
    <section className="companies_list">
      <div className="as_seen_in">
        <h4>AS SEEN IN</h4>
      </div>
      <CompaniesContainer imgIndex={imgIndex} />
    </section>
  );
});

const CompaniesContainer = ({ imgIndex }) => {
  return (
    <div
      style={{ transform: `translateX(-${imgIndex * 188.5}px)` }}
      className="companies_container"
    >
      <>
        {companiesList.map((company) => (
          <div key={company.id} className="top_copm_item">
            <img src={company.src} />
          </div>
        ))}
      </>
    </div>
  );
};