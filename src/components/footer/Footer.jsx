import { useSize } from "../../hooks/useSize.jsx";
import { MoblieFooter } from "./MobileFooter.jsx";
import { FullFooter } from "./FullFooter.jsx";

export function Footer() {
  const windowsize = useSize();

  return (
    <section className="footer">
      {windowsize < 1000 ? <MoblieFooter /> : <FullFooter />}
    </section>
  );
}

export const Email = () => {
  return (
    <div className="footer_email">
      <h4>STAY IN THE KNOW</h4>
      <h3>Sign up for 10% off your first order.</h3>
      <div className="email_container">
        <input type="email" placeholder="Entar email address" />
        <div className="hr" style={{ background: "white", width: "95%" }}></div>
      </div>
      <button>SUBCRIBE</button>
    </div>
  );
};

export const FooterLogos = () => {
  return (
    <div className="footer__logos">
      {FooterIconsArr.map((iconName, index) => (
        <div key={index} 
          className="footer__logo">
          <i className={`icon ${iconName}`} role="presentation" />
        </div>
      ))}
    </div>
  );
};

export const FooterInitials = () => {
  return (
    <div className="footer_initials">
      <div className="bottom_footer_head">
        <h5>© 2024 Bite. All Rights Reserved.</h5>
      </div>
      <div className="bottom_footer_flex">
        <BottomFooterFlex />
      </div>
    </div>
  );
};

const BottomFooterFlex = () => {
  return (
    <>
      {BottomFooterFlexArr.map((item, index) => {
        <a key={index} href="/">
          <h5>{item}</h5>
        </a>;
      })}
    </>
  );
};

export const FooterLinkIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="-1 -1 20 20"
      id="arrow-outward-black"
      y={510}
    >
      <mask
        id="ala"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={18}
      >
        <path fill="#131313" d="M.073 0h17.454v17.454H.073z" />
      </mask>
      <g mask="url(#ala)">
        <path
          d="m4.727 12.573-.5-.5 7.331-7.346H4.8V4h8v8h-.727V5.242l-7.346 7.331Z"
          fill="#131313"
        />
      </g>
    </svg>
  );
};

const FooterIconsArr = [
  "icon--b-corp",
  "icon--cruelty-free-badge-footer",
  "icon--oa-badge",
  "icon--woman-owned-badge-footer",
];

const BottomFooterFlexArr = [
  "Privacy policy",
  "Terms of service",
  "Shipping policy",
  "hello@bitetoothpastebits.com",
];
