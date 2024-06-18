import { Email } from "./Footer";
import { FooterLogos } from "./Footer";
import { FooterInitials } from "./Footer";
import { FooterLinks } from "./FooterLinks";

export const MoblieFooter = () => {
  return (
    <footer className="mobile_footer">
      <Email />
      <ShopAll />
      <FooterLinks isMoblie={true} />
      <div className="bottom_footer">
        <FooterLogos />
        <FooterInitials />
      </div>
    </footer>
  );
};

const ShopAll = () => {
  return (
    <>
      <div className="moblie_footer_hr" />
      <div className="shop_all">
        <a href="/">
          <h4>Shop All</h4>
        </a>
      </div>
      <div className="moblie_footer_hr" />
    </>
  );
};
