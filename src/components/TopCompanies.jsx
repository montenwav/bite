import { memo, useEffect, useRef, useState } from "react";
import { useAutoPlay } from "../hooks/useAutoPlay.jsx";
import { companiesList } from "./CompaniesList.jsx";

export const TopCompanies = memo(() => {
  const [imgIndex, setImgIndex] = useState(0);
  useAutoPlay(imgIndex, setImgIndex, true, companiesList.length - 5);

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
  const ref = useRef(null);
  const [companyItemWidth, setCompanyItemWidth] = useState(0)
  let ITEM_WIDTH;

  if(companyItemWidth) {
    ITEM_WIDTH = companyItemWidth * imgIndex;
  }

  useEffect(() => {
    if (ref.current) {
      setCompanyItemWidth(ref.current.offsetWidth+40); //width + gap
    }
  }, [imgIndex]);

  return (
    <div className="companies_container">
      <div
        className="companies_inner_container"
        style={{ transform: `translateX(-${ITEM_WIDTH ? ITEM_WIDTH : 0}px)` }}
      >
        {companiesList.map((company) => (
          <div ref={ref} key={company.id} className="top_copm_item">
            <img src={company.src} />
          </div>
        ))}
      </div>
    </div>
  );
};
