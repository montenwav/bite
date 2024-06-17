import { useEffect, useState, memo } from "react";
import { useSize } from "../hooks/useSize.jsx";

export const TopCompanies = memo(() => {
  // const [imgId, setImgId] = useState(0);
  // const windowsize = useSize(); // Add dynamic width

  // const updateIndex = (newIndex) => {
  //   if (newIndex >= companiesList.length - 3) {
  //     newIndex = 0;
  //   }
  //   setImgId(newIndex);
  // };

  // useEffect(() => {
  //   if (windowsize < 1000) {
  //     const interval = setInterval(() => {
  //       updateIndex(imgId + 1);
  //     }, 3000);

  //     return () => clearInterval(interval);
  //   } else {
  //     setImgId(0);
  //   }
  // }, [windowsize]);

  return (
    <section className="companies_list">
      <Hr />
      <div className="as_seen_in">
        <h4>AS SEEN IN</h4>
      </div>
      <CompaniesContainer imgId={imgId} />
      <Hr />
    </section>
  );
});

const CompaniesContainer = ({ imgId }) => {
  return (
    <div
      style={{ transform: `translateX(-${imgId * 188.5}px)` }}
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

const Hr = () => (
  <div style={{ width: "100%", height: "1px", background: "black" }}></div>
);

const companiesList = [];
for (let i = 1; i < 9; i++) {
  companiesList.push({ id: i, src: `/src/images/companies/${i}.png` });
}
