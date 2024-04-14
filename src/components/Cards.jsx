import { useContext, useState } from "react"
import { useSize } from '../hooks/useSize.jsx'
import { dispacthCtx } from "../hooks/Provider.jsx"

export function Cards() {
    const [cards, setCards] = useState(cardsArr)
    const windowsize = useSize() // Add dynamic width

<<<<<<< HEAD
    const dispatch = useContext(dispatchCtx)
    const addedItems = useContext(addedItemsCtx)
    const setIsBagOpen = useContext(setIsBagOpenCtx)
    
    const addItem = (card) => {
        setIsBagOpen(true)

        // Add item
        let existingItem = addedItems.find(item => item.id === card.id);
        if (existingItem) {
            dispatch({ type: 'if_exist', cardId: card.id })
        } else {
            dispatch({ type: 'if_not_exist', card: card })
        }
    }

=======
>>>>>>> parent of 1d3fd16 (bag without scroll and storage)
    return (
        <>
            <section className='cards_main'>
                <h1>Shop Best Sellers</h1>
                <div className='cards-div'>
                    {windowsize < 1000 ?
                        <AdaptiveCards cards={cards} setCards={setCards} />
                        :
                        <FullCards cards={cards} setCards={setCards} />}
                </div>
            </section>
        </>
    )
}

const FullCards = ({ cards, setCards }) => {
    const dispatch = useContext(dispacthCtx)
    return (
        <>
            {cards.map(card =>
                <div
                    key={card.id}
                    className='cards'>
                    <div className='preview' >
                        <div className="preview_title">
                            <h4>{card.display_title}</h4>
                            <p>{card.id == 0 ? `From $${card.price}/month` : `$${card.price}/month`}</p>
                        </div>
                        <img style={{ background: card.bgPrevirew }} src={card.src} />

                        <div className="full_cards_hover">
                            <div className="full_cards_container">
                                <div className="cards_hover_colors">
                                    <ColorPicker
                                        cardID={card.id}
                                        card={card}
                                        setCards={setCards}
                                        cards={cards} />
                                    <p>{card.type}</p>
                                </div>

                                <div style={{ background: 'black', height: '1px' }}></div>

                                <div className="delivers_every">
                                    <div className="delivers_every_left">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            height={26}
                                            width={26}
                                            viewBox="-1 -1 26 26"
                                            id="radio-on"
                                            y={4605}
                                        >
                                            <mask id="dpa" height={24} maskUnits="userSpaceOnUse" width={24} x={0} y={0}>
                                                <path d="M0 0h24v24H0z" fill="#d9d9d9" />
                                            </mask>
                                            <g mask="url(#dpa)">
                                                <path
                                                    d="M12 16c1.114 0 2.06-.388 2.836-1.164S16 13.114 16 12s-.388-2.06-1.164-2.836C14.059 8.388 13.114 8 12 8s-2.06.388-2.836 1.164C8.388 9.941 8 10.886 8 12s.388 2.06 1.164 2.836C9.941 15.612 10.886 16 12 16zm.003 5c-1.244 0-2.414-.236-3.51-.709s-2.049-1.113-2.859-1.923-1.452-1.761-1.925-2.856S3 13.248 3 12.003c0-1.244.236-2.414.708-3.51a9.094 9.094 0 0 1 1.924-2.859 9.085 9.085 0 0 1 2.856-1.925A8.753 8.753 0 0 1 11.997 3c1.244 0 2.414.236 3.51.708a9.094 9.094 0 0 1 2.859 1.924 9.083 9.083 0 0 1 1.925 2.856A8.753 8.753 0 0 1 21 11.997c0 1.244-.236 2.414-.709 3.51s-1.113 2.049-1.923 2.859a9.083 9.083 0 0 1-2.856 1.925 8.753 8.753 0 0 1-3.509.709zM12 20c2.233 0 4.125-.775 5.675-2.325S20 14.233 20 12c0-2.233-.775-4.125-2.325-5.675S14.233 4 12 4c-2.233 0-4.125.775-5.675 2.325S4 9.767 4 12c0 2.233.775 4.125 2.325 5.675S9.767 20 12 20z"
                                                    fill="#1c1b1f"
                                                />
                                            </g>
                                        </svg>
                                        <p>Delivers Every 4 Months</p>
                                    </div>

                                    {card.id <= 1 ?
                                        <div className="delivers_every_save">
                                            <p>Save 33%</p>
                                        </div> : ''}

                                    <p>{`$${card.price}/month`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => dispatch({ type: 'add_item', card: card })}
                        className="button cardBtn">ADD TO BAG</button>
                </div>
            )}
        </>
    )
}

const AdaptiveCards = ({ cards, setCards }) => {
    return (
        <>
            {cards.map(card =>
                <div key={card.id} className='cards'>
                    <div className='preview'>
                        <img style={{ background: card.bgPrevirew }} src={card.src} />
                    </div>
                    <h4>{card.display_title}</h4>
                    <p>{card.type}</p>
                    <ColorPicker cardID={card.id} card={card} setCards={setCards} cards={cards} />
                    <p>{card.id == 0 ? `From $${card.price}/month` : `$${card.price}/month`}</p>
                    <Stars style={{ width: '10px' }} card={card} />
                    <button className="button cardBtn">ADD TO BAG</button>
                </div>
            )}
        </>
    )
}

const Stars = ({ style, card }) => {
    return (
        <div className="cardStarsDiv">
            <div className='cardStars'>
                <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
                <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#000000" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
            </div>
            {`${card.reviews} Reviews`}
        </div>
    )
}

{/*Display card colors*/ }

const ColorPicker = ({ cardID, card, cards, setCards }) => {

    const handleColorPicker = (colID) => {

        {/*Change cards*/ }

        setCards(cards.map(card => {
            {/*First Card*/ }
            if (card.id == 0 && card.id == cardID) {
                switch (colID) {
                    case 0: return {
                        ...card, src: '/src/images/products/1/pc-tpb-ff-4oz-mint-no-bg.webp', type: 'Mint', colors: card.colors.map(item => {
                            if (item.colorId == colID) {
                                return { ...item, clicked: true }
                            }
                            return { ...item, clicked: false }
                        })
                    }
                    case 1: return {
                        ...card, src: '/src/images/products/1/pdp-product-card-tpb-ff-4oz-mint-charcoal.webp', type: 'Mint Charcoal', colors: card.colors.map(item => {
                            if (item.colorId == colID) {
                                return { ...item, clicked: true }
                            }
                            return { ...item, clicked: false }
                        })
                    }
                    case 2: return {
                        ...card, src: '/src/images/products/1/pdp-product-card-tpb-ff-4oz-berry-twist-no-bg-012524.webp', type: 'Berry Twist', colors: card.colors.map(item => {
                            if (item.colorId == colID) {
                                return { ...item, clicked: true }
                            }
                            return { ...item, clicked: false }
                        })
                    }
                }
            }

            {/*Third Card*/ }
            if (card.id == 2 && card.id == cardID) {
                switch (colID) {
                    case 0: return {
                        ...card, bgPrevirew: 'transparent', type: 'Fragrance-Free', colors: card.colors.map(item => {
                            if (item.colorId == colID) {
                                return { ...item, clicked: true }
                            }
                            return { ...item, clicked: false }
                        })
                    }
                    case 1: return {
                        ...card, bgPrevirew: '#f27c2d', type: 'Neroli', colors: card.colors.map(item => {
                            if (item.colorId == colID) {
                                return { ...item, clicked: true }
                            }
                            return { ...item, clicked: false }
                        })
                    }
                    case 2: return {
                        ...card, bgPrevirew: '#e5497a', type: 'Rose Vert', colors: card.colors.map(item => {
                            if (item.colorId == colID) {
                                return { ...item, clicked: true }
                            }
                            return { ...item, clicked: false }
                        })
                    }
                    case 3: return {
                        ...card, bgPrevirew: '#51511a', type: 'Santal', colors: card.colors.map(item => {
                            if (item.colorId == colID) {
                                return { ...item, clicked: true }
                            }
                            return { ...item, clicked: false }
                        })
                    }
                }
            }
            return card
        }))
    }

    return (
        <ul className='cardColorDiv'>
            {card.colors.map(item =>
                <li key={item.colorId}
                    className='cardColor'
                    onClick={() => handleColorPicker(item.colorId)}
                    style={{
                        background: item.color,
                        border: item.clicked && '1px solid black',
                        cursor: 'pointer'
                    }}
                >
                </li>
            )}
        </ul>
    )
}

const cardsArr = [
    {
        id: 0,
        display_title: 'TOOTHPASTE BITS FLUORIDE-FREE',
        src: '/src/images/products/1/pc-tpb-ff-4oz-mint-no-bg.webp',
        colors: [
            { colorId: 0, color: '#c7f6e6', clicked: true },
            { colorId: 1, color: '#4d4c4c', clicked: false },
            { colorId: 2, color: '#ffbdb9', clicked: false }
        ],
        type: 'Mint',
        reviews: '21,266',
        month_price: 8,

        title: 'Toothpaste Bits',
        fluoride: false,
        count: 1,
        price: 32,
        old_price: 48,
    },
    {
        id: 1,
        display_title: 'TOOTHPASTE BITS WITH FLUORIDE',
        src: '/src/images/products/2/pc-tpb-wf-2oz-mint-fluoride-no-bg.webp',
        colors: [{ colorId: 0, color: '#c7f6e6', clicked: true }],
        type: 'Mint',
        reviews: '21,266',
        month_price: 8,

        title: 'Toothpaste Bits',
        fluoride: true,
        count: 1,
        price: 32,
        old_price: 48,
    },
    {
        id: 2,
        display_title: 'DEODORANT SET',
        src: '/src/images/products/3/pdp-product-card-desktop-silver-case-open-no-bg.webp',
        colors: [
            { colorId: 0, color: '#f0f0f0', clicked: true },
            { colorId: 1, color: '#f27c2d', clicked: false },
            { colorId: 2, color: '#e5497a', clicked: false },
            { colorId: 3, color: '#51511a', clicked: false }
        ],
        type: 'Fragrance-Free',
        reviews: '644',
        month_price: 8,

        title: 'Deodorant set',
        count: 1,
        price: 32,
    },
    {
        id: 3,
        display_title: 'MOUTHWASH BITS',
        src: '/src/images/products/4/pc-mouthwash-no-bg.webp',
        colors: [{ colorId: 0, color: '#c7f6e6', clicked: true }],
        type: 'Mint',
        reviews: '834',
        month_price: 5,

        title: 'Mouthwash Bits',
        description: 'Mouthwash',
        count: 1,
        price: 20,
    },
]
