import { useContext } from "react"
import { isBagOpenCtx, isEmptyCtx, dispatchCtx, addedItemsCtx, whyNotCardsCtx, setWhyNotCardsCtx, setIsBagOpenCtx } from '../hooks/Provider.jsx'

export function Bag({ bagRef }) {
    const setIsBagOpen = useContext(setIsBagOpenCtx)
    // const isBagOpen = useContext(isBagOpenCtx)

    const handleExitBtn = () => {
        setIsBagOpen(false)
        bagRef.current.style.right = '100%'
        document.body.style.overflow = 'visible';
    }

    return (
        <>
            <div className="bag">
                <div
                    onClick={handleExitBtn}
                    className="bag_bg"></div>
                <BagContainer
                    bagRef={bagRef}
                    handleExitBtn={handleExitBtn}
                />
            </div>
        </>
    )
}

const BagContainer = ({ bagRef, handleExitBtn }) => {
    return (
        <div
            ref={bagRef}
            className="bag_container">
            <BagTop bagRef={bagRef} handleExitBtn={handleExitBtn} />
            <BagMiddle />
            <WhyNotToAdd />
        </div>
    )
}

const BagTop = ({ handleExitBtn }) => {
    // const setIsBagOpen = useContext(setIsBagOpenCtx)
    const addedItems = useContext(addedItemsCtx)

    let freeShipping = 32;

    // Update freeShipping 
    if (addedItems.length > 0) {
        let allPrices = addedItems.map(item => item.count * item.price)
            .reduce((accum, item) => accum + item, 0);
        freeShipping -= allPrices;
    }

    return (
        <>
            <div className="bag_top_bg">
                <div className="bag_top">
                    <div className="bag_top_text">
                        <h5>YOUR BAG</h5>
                        {freeShipping <= 0 ? <h5>🎉 Congrats! You've Unlocked <b>FREE SHIPPING!</b></h5> : <h5>You Are ${freeShipping} Away From Free Shipping</h5>}
                    </div>

                    <div className="bag_top_exit"
                        onClick={handleExitBtn}
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
            <div className="hr" />
        </>
    )
}

const BagMiddle = () => {
    const isEmpty = useContext(isEmptyCtx)
    return (
        <div
            style={{ height: isEmpty ? `calc(100% - 345px)` : `calc(100% - 415px)` }}
            className="bag_middle">
            {isEmpty ?
                <EmptyBag />
                :
                <MiddleBagCard />
            }
        </div>
    )
}

const EmptyBag = () => {
    return (
        <>
            <div className="middle_bag_text">
                <h5>OOPS. YOUR BAG IS EMPTY.</h5>
                <p>Here's what's trending:</p>
            </div>
            <EmptyMiddleBagCard />
        </>
    )
}

const EmptyMiddleBagCard = () => {
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
                        <h5>{card.title}</h5>
                        <h6>{card.description}</h6>
                        <a href="#">Shop Now</a>
                    </div>
                </div>
            ))}
        </>
    )
}

const MiddleBagCard = () => {
    let addedItems = useContext(addedItemsCtx)

    return (
        <>
            {addedItems.map(item => (
                <div key={item.id}>
                    <div
                        className="added_item_container">
                        <div className="added_item">
                            <div className="added_item_img">
                                <img src={item.src} alt={item.title} />
                            </div>

                            <div className="added_item_description">
                                <h1>{item.title}</h1>
                                <h4>{item.description}</h4>
                                <h5>{item.fluoride ? 'with Flouride' : 'Flouride-Free'}</h5>

                                <div className="delivers_every_bag">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={22}
                                        height={22}
                                        viewBox="0 0 22 22"
                                        fill="none"
                                    >
                                        <mask
                                            id="mask0_1930_685"
                                            maskUnits="userSpaceOnUse"
                                            x={0}
                                            y={0}
                                            width={22}
                                            height={22}
                                            style={{ maskType: "alpha" }}
                                        >
                                            <rect width={22} height={22} fill="#D9D9D9" />
                                        </mask>{" "}
                                        <g mask="url(#mask0_1930_685)">
                                            <path
                                                d="M5.2637 13.6831C5.07801 13.2894 4.92582 12.8675 4.80713 12.4174C4.68844 11.9673 4.62909 11.4949 4.62909 11.0001C4.62909 9.21613 5.25782 7.69688 6.51529 6.44235C7.77278 5.18781 9.31348 4.58346 11.1374 4.62929H11.6927L10.1573 3.09385L11.0087 2.24243L13.9914 5.2251L11.0087 8.20778L10.1573 7.35636L11.6927 5.82091H11.1374C9.63665 5.79036 8.37535 6.28601 7.35349 7.30786C6.33164 8.32972 5.82071 9.56046 5.82071 11.0001C5.82071 11.3186 5.84686 11.6291 5.89915 11.9318C5.95145 12.2344 6.02989 12.5279 6.13449 12.8123L5.2637 13.6831ZM10.9911 19.7578L8.00843 16.7751L10.9911 13.7924L11.8425 14.6439L10.3071 16.1793H10.8624C12.3632 16.2099 13.6245 15.7142 14.6463 14.6923C15.6682 13.6705 16.1791 12.4397 16.1791 11.0001C16.1791 10.6816 16.1529 10.3711 16.1006 10.0685C16.0484 9.76584 15.9699 9.47233 15.8653 9.18792L16.7361 8.31711C16.9218 8.71081 17.074 9.1327 17.1927 9.5828C17.3114 10.0329 17.3707 10.5053 17.3707 11.0001C17.3707 12.7688 16.742 14.2842 15.4845 15.5464C14.227 16.8086 12.6863 17.4167 10.8624 17.3709H10.3071L11.8425 18.9064L10.9911 19.7578Z"
                                                fill="#1C1B1F"
                                            />
                                        </g>
                                    </svg>
                                    <h5>Delivers every 4 months</h5>
                                </div>

                                <div className="counter_and_total">
                                    <BagCounter item={item} />

                                    <div className="bag_total">
                                        <h5>${item.price}.00</h5>
                                        <s style={{ color: 'gray' }}>
                                            {item.old_price != 0 && <h5>${item.old_price}.00</h5>}
                                        </s>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hr" style={{ width: '95%' }}></div>
                </div>
            ))}
        </>
    )
}

const BagCounter = ({ item }) => {
    const addedItems = useContext(addedItemsCtx)
    const dispatch = useContext(dispatchCtx)

    const handleDecrement = (itemId) => {
        let decrementArr = addedItems.map(card => {
            if (card.id === itemId) return { ...card, count: card.count - 1 }
            return card
        })
        decrementArr = decrementArr.filter(c => c.count > 0)

        dispatch({ type: 'decrement_button', decrementArr: decrementArr })
    }

    return (
        <div className="bag_counter">
            <div className="bag_counter_flex">
                <div
                    onClick={() => handleDecrement(item.id)}
                    className="bag_counter_item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <mask
                            id="mask0_1954_1480"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={18}
                            height={18}
                            style={{ maskType: "alpha" }}
                        >
                            <rect width={18} height={18} fill="#D9D9D9" />
                        </mask>{" "}
                        <g mask="url(#mask0_1954_1480)">
                            <path d="M6.57703 10.3V9.69995H14.2514V10.3H6.57703Z" fill="#131313" />
                        </g>
                    </svg>
                </div>
                <div
                    className="bag_counter_item">
                    <h5>{item.count}</h5>
                </div>
                <div
                    onClick={() => dispatch({ type: 'increment_button', itemId: item.id })}
                    className="bag_counter_item">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <mask
                            id="mask0_1954_1477"
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={0}
                            width={18}
                            height={18}
                            style={{ maskType: "alpha" }}
                        >
                            <rect width={18} height={18} fill="#D9D9D9" />
                        </mask>{" "}
                        <g mask="url(#mask0_1954_1477)">
                            <path
                                d="M3.36775 13.875V9.375H-0.818298V8.625H3.36775V4.125H4.06542V8.625H8.25147V9.375H4.06542V13.875H3.36775Z"
                                fill="#131313"
                            />
                        </g>
                    </svg>
                </div>
            </div>

            <h5
                className="bag_remove_btn"
                onClick={() => dispatch({ type: 'remove_button', itemId: item.id })}
            >Remove</h5>
        </div>
    )
}

const WhyNotToAdd = () => {
    const isEmpty = useContext(isEmptyCtx)
    return (
        <>
            <div className="why_not_to_add">
                {!isEmpty && <Checkout />}
                <div className="hr"></div>

                <h5 className="why_not_to_add_h5">WHY NOT ADD?</h5>
                <div className="why_not_to_add_flex">
                    <WhyNotToAddCard />
                </div>
                <button className="shop_all_prod">SHOP ALL PRODUCTS</button>
            </div>
        </>
    )
}

const Checkout = () => {
    const addedItems = useContext(addedItemsCtx)

    let total = 0;

    total = addedItems.map(item =>
        item.count * item.price
    )
    total = addedItems.length > 0 && total.reduce((accum, items) => accum + items)

    async function handleChechout() {
        const response = await fetch('https://example.com', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedItems)
        })

        if(!response.ok) {
           throw Error('Request Error') 
        }
    }

    return (
        <>
            <div className="hr"></div>
            <div onClick={handleChechout} className="checkout_container">
                <div className="checkout">
                    <h5>CHECKOUT</h5>
                    <h5 className="bag_total">{`$${total}.00`}</h5>
                </div>
            </div>
        </>
    )
}

const WhyNotToAddCard = () => {
    const whyNotCards = useContext(whyNotCardsCtx)
    const setWhyNotCards = useContext(setWhyNotCardsCtx)

    const addedItems = useContext(addedItemsCtx)
    const dispatch = useContext(dispatchCtx)

    const addingItem = (card) => {

        let existingItem = addedItems.find(item => item.id === card.id);
        if (existingItem) {
            dispatch({ type: 'if_exist', cardId: card.id })
        } else {
            dispatch({ type: 'if_not_exist', card: card })
        }

        // Adding state to the button to prevent multipe clicks
        setWhyNotCards(whyNotCards.map(item => {
            if (item.id === card.id) return { ...item, added: true }
            return item
        }))

        setTimeout(() => {
            setWhyNotCards(whyNotCards.map(item => {
                return { ...item, added: false }
            }))
        }, 1000)
    }

    return (
        <>
            {whyNotCards.map(card => (
                <div
                    key={card.id}
                    className="why_not_to_add_card"
                >
                    <div style={{ height: '90px' }}>
                        <img src={card.src} alt={card.title} />
                    </div>

                    <div style={{ height: '50px' }}>
                        <h6>{card.title || card.why_not_title}</h6>
                    </div>

                    <button
                        onClick={() => addingItem(card)}
                        disabled={card.added}
                        style={{ background: card.added && 'gray' }}
                        className="why_not_to_add_button"
                    >{card.added ? 'ADDING...' : 'ADD'}</button>
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