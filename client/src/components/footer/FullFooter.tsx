import { Email, FooterLogos, FooterInitials } from "./Footer";
import { FooterLinks } from "./FooterLinks";

export const FullFooter = () => {
  return (
    <footer className="full_footer">
      <div className="full_footer_left">
        <Email />
        <FooterLogos />
      </div>
      <div style={{ background: "white", height: "420px", width: "1px" }}></div>
      <div className="full_footer_right">
        <FooterLinks isMoblie={false} />
        <FooterInitials />
      </div>
    </footer>
  );
};
