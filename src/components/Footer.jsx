export default function Footer() {
    return (
        <footer>
            <Email />
            <ShopAll />
            <FooterLinks />
            <BottomFooter />
        </footer>
    )
}

const Email = () => {
    return (
        <div className='footer_email'>
            <h4>STAY IN THE KNOW</h4>
            <h1>Sign up for 10% off your first order.</h1>
            <div className="email_container">
                <input type="email" placeholder='Entar email address' />
                <div className="hr" style={{ background: 'white' }}></div>
            </div>
            <button>SUBCRIBE</button>
        </div>
    )
}

const ShopAll = () => {
    return (
        <>
            <FooterHr />
            <div className="shop_all">
                <a href="#"><h4>Shop All</h4></a>
            </div>
            <FooterHr />
        </>
    )
}

const FooterHr = () => {
    return (
        <div style={{ background: 'white', height: '3px', width: '100vw' }}></div>
    )
}

const FooterLinks = () => {
    return (
        <div className="footer_links">
            <div className="footer_links_container">
                <div className="footer_links_header">
                    <h1>LEARN</h1>
                </div>
                <div className="footer_links_content">
                    <a href="#"><h4>Ingredients</h4></a>
                    <a href="#"><h4>Our Story</h4></a>
                    <a href="#"><h4>Store Locator</h4></a>
                </div>
            </div>
            <FooterHr />
            <div className="footer_links_container">
                <div className="footer_links_header">
                    <h1>HELP</h1>
                </div>
                <div className="footer_links_content">
                    <a href="#"><h4>Account</h4></a>
                    <a href="#">
                        <h4>Wholesale</h4>
                        <FooterLinkIcon />
                    </a>
                    <a href="#"><h4>FAQs</h4></a>
                    <a href="#"><h4>Sitemap</h4></a>
                </div>
            </div>
            <FooterHr />
            <div className="footer_links_container">
                <div className="footer_links_header">
                    <h1>FOLLOW</h1>
                </div>
                <div className="footer_links_content">
                    <a href="#">
                        <h4>Instagram</h4>
                        <FooterLinkIcon />
                    </a>
                    <a href="#">
                        <h4>Twitter</h4>
                        <FooterLinkIcon />
                    </a>
                    <a href="#">
                        <h4>TikTok</h4>
                        <FooterLinkIcon />
                    </a>
                    <a href="#">
                        <h4>Facebook</h4>
                        <FooterLinkIcon />
                    </a>
                </div>
            </div>
            <FooterHr />
        </div>
    )
}

const FooterLinkIcon = () => {
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
    )
}

const BottomFooter = () => {
    return (
        <div className="bottom_footer">
            <div className="footer__logos">
                <div className="footer__logo">
                    <i className="icon icon--b-corp" role="presentation" />
                </div>
                <div className="footer__logo">
                    <i className="icon icon--cruelty-free-badge-footer" role="presentation" />
                </div>
                <div className="footer__logo">
                    <i className="icon icon--oa-badge" role="presentation" />
                </div>
                <div className="footer__logo">
                    <i className="icon icon--woman-owned-badge-footer" role="presentation" />
                </div>
            </div>


            <div className="bottom_footer_head">
                <h4>© 2024 Bite. All Rights Reserved.</h4>
            </div>

            <div className="bottom_footer_flex">
                <a href="#"><h4>Privacy policy</h4></a>
                <a href="#"><h4>Terms of service</h4></a>
                <a href="#"><h4>Shipping policy</h4></a>
                <a href="#"><h4>hello@bitetoothpastebits.com</h4></a>
            </div>
        </div>
    )
}