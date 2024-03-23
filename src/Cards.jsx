import { useImmer } from "use-immer"
import { useState } from "react"

export default function Cards() {
    const [cards, setCards] = useImmer(cardsArr)

    return (
        <div className='cardsMain'>
            <h1>Shop Best Sellers</h1>

            <ul className='cardsDiv'>
                {cards.map(card =>
                    <li key={card.id} className={`cards card-${card.id}`}>
                        <div className='preview'>
                            <img style={{ width: '100%' }} src={card.imgURL} />
                        </div>
                        <h1>{card.title}</h1>
                        <p>{card.type}</p>
                        <ColorPicker card={card} setCards={setCards} cards={cards}/>
                        <p>{card.id == 0 ? `From $${card.price}/month` : `$${card.price}/month`}</p>
                        <Stars style={{ width: '10px' }} card={card} />
                        <button className="button cardBtn">ADD TO BAG</button>
                    </li>
                )}
            </ul>
        </div>
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

const ColorPicker = ({ card, cards, setCards }) => {
    // const [click, setClick] = useState(false) // handle Click

    const handleColorPicker = (cID) => {
        setCards(draft => {
            const colors = draft.find(c => c.colorId === cID)
            colors.clicked = true
        })

    }

    return (
        <ul className='cardColorDiv'>
            {card.colors.map(item =>
                <li key={item.colorId}
                    className='cardColor'
                    onClick={() => handleColorPicker(item.colorId)}
                    style={{
                        background: item.color,
                        border: item.clicked && '3px solid black',
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
        title: 'TOOTHPASTE BITS FLUORIDE-FREE',
        imgURL: '/src/images/products/1/pc-tpb-ff-4oz-mint-no-bg.webp',
        colors: [
            { colorId: 0, color: 'lightcyan', clicked: true },
            { colorId: 1, color: 'gray', clicked: false },
            { colorId: 2, color: 'pink', clicked: false }
        ],
        type: 'Mint',
        reviews: '21,266',
        price: 8
    },
    {
        id: 1,
        title: 'TOOTHPASTE BITS WITH FLUORIDE',
        imgURL: '/src/images/products/2/pc-tpb-wf-2oz-mint-fluoride-no-bg.webp',
        colors: [{ colorId: 3, color: 'lightcyan', clicked: true }],
        type: 'Mint',
        reviews: '21,266',
        price: 8
    },
    {
        id: 2,
        title: 'DEODORANT SET',
        imgURL: '/src/images/products/3/pdp-product-card-desktop-silver-case-open-no-bg.webp',
        colors: [
            { colorId: 4, color: 'white', clicked: true },
            { colorId: 5, color: 'orange', clicked: false },
            { colorId: 6, color: 'pink', clicked: false },
            { colorId: 7, color: 'green', clicked: false }
        ],
        type: 'Fragrance-Free',
        reviews: '644',
        price: 8
    },
    {
        id: 3,
        title: 'MOUTHWASH BITS',
        imgURL: '/src/images/products/4/pc-mouthwash-no-bg.webp',
        colors: [{ colorId: 8, color: 'lightcyan', clicked: true }],
        type: 'Mint',
        reviews: '834',
        price: 5
    },
]