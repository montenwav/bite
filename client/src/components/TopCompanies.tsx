import { memo, useEffect, useRef, useState } from "react";
import { useAutoPlay } from "../hooks/useAutoPlay.js";
import { companiesList } from "./CompaniesList.js";

const TopCompanies = memo(function TopCompanies() {
  const [imgIndex, setImgIndex] = useState(0);
  useAutoPlay(imgIndex, setImgIndex, companiesList.length - 5, true);

  return (
    <>
      <div className="hr" />
      <section className="companies_list">
        <div className="as_seen_in">
          <h5>AS SEEN IN</h5>
        </div>
        <CompaniesContainer imgIndex={imgIndex} />
      </section>
      <div className="hr" />
    </>
  );
});

const CompaniesContainer = ({ imgIndex }: { imgIndex: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [companyItemWidth, setCompanyItemWidth] = useState(0);
  let ITEM_WIDTH = companyItemWidth * imgIndex;

  useEffect(() => {
    if (ref.current) {
      setCompanyItemWidth(ref.current.offsetWidth + 40); // width + gap
    }
  }, [imgIndex]);

  return (
    <div className="companies_container">
      <div
        className="companies_inner_container"
        style={{ transform: `translateX(-${ITEM_WIDTH}px)` }}
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

export default TopCompanies;
