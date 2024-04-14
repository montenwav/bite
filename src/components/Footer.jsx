import { useSize } from '../hooks/useSize.jsx'

export function Footer() {
    const windowsize = useSize()

    return (
        <section className="footer">
            {windowsize < 1000 ? <MoblieFooter /> : <FullFooter />}
        </section>
    )
}

const MoblieFooter = () => {
    return (
        <footer className='mobile_footer'>
            <Email />
            <ShopAll />
            <MoblieFooterLinks />
            <div className="bottom_footer">
                <FooterLogos />
                <FooterInitials />
            </div>
        </footer>
    )
}

const FullFooter = () => {
    return (
        <footer className="full_footer">
            <div className="full_footer_left">
                <Email />
                <FooterLogos />
            </div>
            <div style={{ background: 'white', height: '420px', width: '1px' }}></div>
            <div className="full_footer_right">
                <FullFooterLinks />
                <FooterInitials />
            </div>
        </footer>
    )
}

const ArrowUp = () => {
    return (
        <a href="#">
            <div className="footer_arrow_up">
                <svg
                    style={{ rotate: '-90deg' }}
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
        </a>
    )
}

const Email = () => {
    return (
        <div className='footer_email'>
            <h4>STAY IN THE KNOW</h4>
            <h1>Sign up for 10% off your first order.</h1>
            <div className="email_container">
                <input type="email" placeholder='Entar email address' />
                <div className="hr" style={{ background: 'white', width: '95%' }}></div>
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

const FooterHr = () => <div className="moblie_footer_hr"></div>

const FullFooterLinks = () => {
    return (
        <div className="footer_links full_links">
            <div className="footer_links_container">
                <div className="footer_links_header">
                    <h1>SHOP</h1>
                </div>
                <div className="footer_links_content">
                    <a href="#"><h4>All Products</h4></a>
                    <a href="#"><h4>Oral Care</h4></a>
                    <a href="#"><h4>Body</h4></a>
                    <a href="#"><h4>Sets</h4></a>
                </div>
            </div>
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
            <div className="footer_links_container">
                <div className="footer_links_header">
                    <h1>HELP</h1>
                </div>
                <div className="footer_links_content">
                    <a href="#">
                        <h4>Account</h4>
                        <FooterLinkIcon />
                    </a>
                    <a href="#">
                        <h4>Wholesale</h4>
                        <FooterLinkIcon />
                    </a>
                    <a href="#"><h4>FAQs</h4></a>
                    <a href="#"><h4>Sitemap</h4></a>
                </div>
            </div>
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

            <ArrowUp />
        </div>
    )
}

const MoblieFooterLinks = () => {
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

const FooterLogos = () => {
    return (
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
    )
}

const FooterInitials = () => {
    return (
        <div className="footer_initials">
            <div className="bottom_footer_head">
                <h5>© 2024 Bite. All Rights Reserved.</h5>
            </div>

            <div className="bottom_footer_flex">
                <a href="#"><h5>Privacy policy</h5></a>
                <a href="#"><h5>Terms of service</h5></a>
                <a href="#"><h5>Shipping policy</h5></a>
                <a href="#"><h5>hello@bitetoothpastebits.com</h5></a>
            </div>
        </div>
    )
}