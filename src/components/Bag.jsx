import { useEffect, useContext, useState } from "react"
import { setIsBagOpenCtx } from '../hooks/Context.jsx'

export function Bag({ bagRef, isBagOpen }) {
    const [isEmpty, setIsEmpty] = useState(true)
    const setIsBagOpen = useContext(setIsBagOpenCtx)

    const freeShipping = 32;

    useEffect(() => {
        if (isBagOpen) {
            bagRef.current.style.right = '0%'
            document.body.style.overflow = 'hidden';
        } else {
            bagRef.current.style.right = '100%'
            document.body.style.overflow = 'visible';
        }
    })

    return (
        <div className="bag">
            <div
                onClick={() => setIsBagOpen(false)}
                className="bag_bg"></div>
            <BagContainer freeShipping={freeShipping} bagRef={bagRef} isEmpty={isEmpty} />
        </div>
    )
}

const BagContainer = ({ isEmpty, bagRef, freeShipping }) => {
    return (
        <div ref={bagRef}
            className="bag_container">
            <BagTop freeShipping={freeShipping} />
            <BagMiddle isEmpty={isEmpty} />
            <WhyNotToAdd />
        </div>
    )
}

const BagTop = ({freeShipping}) => {
    const setIsBagOpen = useContext(setIsBagOpenCtx)

    return (
        <div className="bag_top_bg">
            <div className="bag_top">
                <div className="bag_top_text">
                    <h4>YOUR BAG</h4>
                    {freeShipping <= 0 ? <h5>🎉 Congrats! You've Unlocked <b>FREE SHIPPING!</b></h5> : <h5>You Are ${freeShipping} Away From Free Shipping</h5>}
                </div>

                <div className="bag_top_exit"
                    onClick={() => setIsBagOpen(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        viewBox="0 0 34 34"
                        fill="none"
                    >
                        <rect x={1} y={1} width={32} height={32} fill="white" stroke="#131313" />{" "}
                        <mask
                            id="mask0_1986_1154"
                            maskUnits="userSpaceOnUse"
                            x={5}
                            y={5}
                            width={24}
                            height={24}
                            style={{ maskType: "alpha" }}
                        >
                            <rect x={5} y={5} width={24} height={24} fill="#D9D9D9" />
                        </mask>{" "}
                        <g mask="url(#mask0_1986_1154)">
                            <path
                                d="M11.6732 22.6923L11 22.0191L16.3268 16.6923L11 11.3654L11.6732 10.6923L17 16.0191L22.3268 10.6923L23 11.3654L17.6732 16.6923L23 22.0191L22.3268 22.6923L17 17.3654L11.6732 22.6923Z"
                                fill="#131313"
                            />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

const BagMiddle = ({ isEmpty }) => {
    return (
        <div className="bag_middle">
            {isEmpty ?
                <div className="empty_bag">
                    <div className="middle_bag_text">
                        <h5>OOPS. YOUR BAG IS EMPTY.</h5>
                        <p>Here's what's trending:</p>
                    </div>
                    <MiddleBagCard />
                </div>
                :
                <div className="not_empty_bag">

                </div>
            }
        </div>
    )
}

const MiddleBagCard = () => {
    return (
        <>
            {middleBagArr.map((card, idx) => (
                <div key={idx} className="middle_bag_card">
                    <div className="middle_bag_card_img">
                        <img
                            src={card.src}
                            alt={card.title} />
                    </div>

                    <div className="middle_bag_card_desc">
                        <h1>{card.title}</h1>
                        <h6>{card.description}</h6>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
            ))}
        </>
    )
}

const WhyNotToAdd = () => {
    return (
        <>
            <div className="why_not_to_add">

                <div className="hr"></div>

                <h4>WHY NOT ADD?</h4>
                <div className="why_not_to_add_flex">
                    <WhyNotToAddCard />
                </div>
                <button className="shop_all_prod">SHOP ALL PRODUCTS</button>
            </div>
        </>
    )
}

const WhyNotToAddCard = () => {
    return (
        <>
            {whyNotToAddArr.map((card, idx) => (
                <div
                    key={idx}
                    className="why_not_to_add_card"
                >
                    <div style={{ height: '70px' }}>
                        <img src={card.src} alt={card.title} />
                    </div>

                    <div style={{ height: '50px' }}>
                        <h2>{card.title}</h2>
                    </div>

                    <a href=""><button className="why_not_to_add_button">ADD</button></a>
                </div>
            ))}
        </>
    )
}

const middleBagArr = [
    {
        src: 'https://bite-bits.myshopify.com/cdn/shop/files/pdp-product-card-desktop-the-daily-habits-kit_400x400.jpg?v=1700091811',
        title: 'Daily Habits Kit',
        description: 'Everything you need to reset your routine and go plastic-free.'
    },
    {
        src: 'https://bite-bits.myshopify.com/cdn/shop/files/pdp-product-card-tpb-ff-4oz-mint_400x400.png?v=1700089456',
        title: 'Toothpaste Bits Fluoride-Free',
        description: 'Our toothpaste alternative, made without harsh chemicals, plastics or fluoride.'
    },
    {
        src: 'https://bite-bits.myshopify.com/cdn/shop/files/pdp-product-card-desktop-silver-case-open_400x400.png?v=1700091811',
        title: 'Deodorant',
        description: 'Forever refillable and clinically-proven to keep you smelling as good as it looks.'
    },
]

const whyNotToAddArr = [
    {
        title: 'Bamboo Toothbrush Subscription',
        src: 'https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-desktop-toothbrush_49ff32a7-1a50-4b23-98bf-58bdaca21188_400x400.jpg?v=1704393857',
    },
    {
        title: 'Fluoride-Free Toothpaste Subscriptio',
        src: 'https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-tpb-ff--4oz-mint_047543a9-2601-4cf1-a1c3-05686dd8f622_400x400.jpg?v=1702510991'
    },
    {
        title: 'Whitening Gel',
        src: 'https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-desktop-whitening-gel_400x400.jpg?v=1700142723',
    },
    {
        title: 'Fluoride Toothpaste Subscription',
        src: 'https://cdn.shopify.com/s/files/1/1864/2187/files/pdp-hero-carousel-tpb-wf-2oz-mint-fluoride_1cdc3501-5ff2-4aed-9d5b-514ed12dd018_400x400.jpg?v=1704318283',
    },
]