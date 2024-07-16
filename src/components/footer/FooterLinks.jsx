import { FooterLinkIcon } from "./Footer";

export const FooterLinks = ({ isMoblie }) => {
  return (
    <>
      <div className={`footer_links ${isMoblie ? "" : "full_links"}`}>
        {FooterLinksArr.map((item) => (
          <div key={item.id} className="footer_links_container">
            <h4>{item.title}</h4>
            <FooterLinksContent item={item} />
            {isMoblie && <div className="moblie_footer_hr" />}
          </div>
        ))}
        <ArrowUp />
      </div>
    </>
  );
};

const FooterLinksContent = ({ item }) => {
  return (
    <>
      <div className="footer_links_content">
        <a href="/">
          <h4>{item.first}</h4>
          {item.title === "HELP" ||
            (item.title === "FOLLOW" && <FooterLinkIcon />)}
        </a>
        <a href="/">
          <h4>{item.second}</h4>
          {item.title === "HELP" ||
            (item.title === "FOLLOW" && <FooterLinkIcon />)}
        </a>
        <a href="/">
          <h4>{item.third}</h4>
          {item.title === "FOLLOW" && <FooterLinkIcon />}
        </a>
        <a href="/">
          <h4>{item.forth}</h4>
          {item.title === "FOLLOW" && <FooterLinkIcon />}
        </a>
      </div>
    </>
  );
};

const ArrowUp = () => {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
      className="footer_arrow_up"
    >
      <svg
        style={{ rotate: "-90deg" }}
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={29}
        fill="none"
        viewBox="-1 -1 27 29"
        id="arrow-forward"
        y={452}
      >
        <path
          d="m12.236 26.846-.875-1.022L21.819 14.12H.194v-1.394H21.82L11.361 1.022 12.236 0l12.042 13.423-12.042 13.423Z"
          fill="#1C1B1F"
        />
      </svg>
    </div>
  );
};

const FooterLinksArr = [
  {
    id: 0,
    title: "SHOP",
    first: "All Products",
    second: "Oral Care",
    third: "Body",
    forth: "Sets",
  },
  {
    id: 1,
    title: "LEARN",
    first: "Ingredients",
    second: "Our Story",
    third: "Store Locator",
  },
  {
    id: 2,
    title: "HELP",
    first: "Account",
    second: "Wholesale",
    third: "FAQs",
    forth: "Sitemap",
  },
  {
    id: 3,
    title: "FOLLOW",
    first: "Instagram",
    second: "Twitter",
    third: "TikTok",
    forth: "Facebook",
  },
];
