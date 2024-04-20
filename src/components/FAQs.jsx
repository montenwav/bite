import { useState } from "react"

export function FAQs() {
    const [toggleId, setToggleId] = useState(null) // selected Item

    return (
        <section className="faqs">
            <h1>FAQs</h1>
            <div className="questions_container">
                <div className="hr"></div>
                <div className='question'>
                    <FirstTypeQuestion
                        setToggleId={setToggleId}
                        toggleId={toggleId}
                        id={0}
                        title='Are Toothpaste Bits good for sensitive teeth?'
                        p_1={`Yes, our Bits are safe for sensitive teeth. We use Nano-hydroxyapatite in our Fluoride-Free formula, a mineral that's been proven to strengthen and remineralize enamel and help fight sensitivity`}
                        p_2={`Read the nHAP Study here and read more information about it here.`}
                        p_3={`We also recommend talking to your dentist about Nano-hydroxyapatite or when making any changes to your oral care routine.`} />
                    <FirstTypeQuestion
                        setToggleId={setToggleId}
                        toggleId={toggleId}
                        id={1}
                        title={`How do subscriptions work?`}
                        p_1={`With subscriptions, we send you all 4 months of Toothpaste Bits at once in our refillable glass jar for $32. Shipments after that will be sent every 4 months for $32 after your initial purchase, so you don't have to worry about running out of Bits. Those orders will come in our compostable refill pouches that are meant to be transferred into your glass jar as soon as you receive them.`}
                        p_2={`Our refill pouch will disintegrate in home compost within 12-16 weeks. Or if you don't have a home compost, they can be dropped in the compost bin in a number of stores—Starbucks and Whole Foods are the most common.`}
                        p_3={`We will send you an email reminder before your order is processed so you can cancel, postpone or even change the flavor of your upcoming Bits before they ship. You can always update the frequency or flavor of your upcoming Bits by logging into your account and making changes there.`} />
                    <SecondTypeQuestion
                        setToggleId={setToggleId}
                        toggleId={toggleId}
                        id={2}
                        title={`Can I purchase just the refill pouches first?`}
                        p_1={`Unfortunately, we do not sell refill pouches on their own. However we do offer a 4 month subscription – it costs $32 which breaks down to only $8 per month.`}
                        p_2={`The Bits come in a 4oz glass jar in the first shipment and then in compostable refill pouches after that, as our tablets are sensitive to humidity and heat. We recommend transferring the refill to the jar as soon as it is delivered to keep the integrity of the Bits.`}
                        p_3={`Being as eco-friendly as possible is super important to us, but there are a few things that are equally important, such as the safety of our customers (and their pets!), which is why we send the first round of Bits in a glass jar with a label that has the full ingredient list, and a warning to keep away from pets. Xylitol is great for teeth, but not great for pups!`}
                        p_4={`We suggest using the 1oz small bottles that you already have for travel to keep extra Bits in your bag or for a guest bathroom.`} />
                    <ThirdTypeQuestion
                        setToggleId={setToggleId}
                        toggleId={toggleId}
                        id={3}
                        title={`What is the shelf life?`}
                        p_1={`With proper storage in a cool and dry place our nHap Bits have a shelf life of 2 years and our Fluoride Bits have a shelf life of 1 1/2 years from the manufacturing date (MFT).`} />
                    <ForthTypeQuestion
                        setToggleId={setToggleId}
                        toggleId={toggleId}
                        id={4}
                        title={`How do I use Toothpaste Bits?`}
                        p_1={`It’s easy:`}
                        li_1={`Put a perfectly portioned Bit into your mouth.`}
                        li_2={`Chew the Bit gently until it forms a soft powder.`}
                        li_3={`Brush with a wet toothbrush for 2 minutes, it will foam up - just like what you're used to.`}
                        li_4={`Spit, smile and repeat twice a day to make your dentist proud and our Earth happy.`} />
                </div>
            </div>
        </section>
    )
}

const FirstTypeQuestion = ({toggleId, setToggleId, title, p_1, p_2, p_3, id }) => {
    return (
        <div className="first_type">
            <div
                onClick={() => setToggleId(id)}
                className="header_container">
                <h4>{title}</h4>
                <svg className="cervon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={42}
                    height={42}
                    fill="none"
                    viewBox="-1 -1 42 42"
                    id="expand-more-black"
                    y={3377}
                >
                    <mask
                        id="cja"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={40}
                    >
                        <path fill="#D9D9D9" d="M0 0h40v40H0z" />
                    </mask>
                    <g mask="url(#cja)">
                        <path
                            d="m20 22.283-8.846-8.79 1.18-1.172L20 19.94l7.667-7.618 1.18 1.172L20 22.283Z"
                            fill="#1C1B1F"
                        />
                    </g>
                </svg>
            </div>

            <div
                className={`content_container ${toggleId == id ? 'active' : ''}`}>
                <p>{p_1}</p>
                <p>{p_2}</p>
                <p>{p_3}</p>
            </div>
            <div className="hr"></div>
        </div>
    )
}

const SecondTypeQuestion = ({toggleId, setToggleId, title, p_1, p_2, p_3, p_4, id }) => {
    return (
        <div className="first_type">
            <div
                onClick={() => setToggleId(id)}
                className="header_container">
                <h4>{title}</h4>
                <svg className="cervon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={42}
                    height={42}
                    fill="none"
                    viewBox="-1 -1 42 42"
                    id="expand-more-black"
                    y={3377}
                >
                    <mask
                        id="cja"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={40}
                    >
                        <path fill="#D9D9D9" d="M0 0h40v40H0z" />
                    </mask>
                    <g mask="url(#cja)">
                        <path
                            d="m20 22.283-8.846-8.79 1.18-1.172L20 19.94l7.667-7.618 1.18 1.172L20 22.283Z"
                            fill="#1C1B1F"
                        />
                    </g>
                </svg>
            </div>

            <div
                className={`content_container ${toggleId == id ? 'active' : ''}`}>
                <p>{p_1}</p>
                <p>{p_2}</p>
                <p>{p_3}</p>
                <p>{p_4}</p>
            </div>
            <div className="hr"></div>
        </div>
    )
}

const ThirdTypeQuestion = ({toggleId, setToggleId, title, p_1, id }) => {
    return (
        <div className="first_type">
            <div
                onClick={() => setToggleId(id)}
                className="header_container">
                <h4>{title}</h4>
                <svg className="cervon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={42}
                    height={42}
                    fill="none"
                    viewBox="-1 -1 42 42"
                    id="expand-more-black"
                    y={3377}
                >
                    <mask
                        id="cja"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={40}
                    >
                        <path fill="#D9D9D9" d="M0 0h40v40H0z" />
                    </mask>
                    <g mask="url(#cja)">
                        <path
                            d="m20 22.283-8.846-8.79 1.18-1.172L20 19.94l7.667-7.618 1.18 1.172L20 22.283Z"
                            fill="#1C1B1F"
                        />
                    </g>
                </svg>
            </div>

            <div
                className={`content_container ${toggleId == id ? 'active' : ''}`}>
                <p>{p_1}</p>
            </div>
            <div className="hr"></div>
        </div>
    )
}

const ForthTypeQuestion = ({toggleId, setToggleId, title, p_1, li_1, li_2, li_3, id }) => {
    return (
        <div className="first_type">
            <div
                onClick={() => setToggleId(id)}
                className="header_container">
                <h4>{title}</h4>
                <svg className="cervon"
                    xmlns="http://www.w3.org/2000/svg"
                    width={42}
                    height={42}
                    fill="none"
                    viewBox="-1 -1 42 42"
                    id="expand-more-black"
                    y={3377}
                >
                    <mask
                        id="cja"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={40}
                        height={40}
                    >
                        <path fill="#D9D9D9" d="M0 0h40v40H0z" />
                    </mask>
                    <g mask="url(#cja)">
                        <path
                            d="m20 22.283-8.846-8.79 1.18-1.172L20 19.94l7.667-7.618 1.18 1.172L20 22.283Z"
                            fill="#1C1B1F"
                        />
                    </g>
                </svg>
            </div>

            <div
                className={`content_container ${toggleId == id ? 'active' : ''}`}>
                <p>{p_1}</p>
                <ol>
                    <li><p className="ol_p">{li_1}</p></li>
                    <li><p className="ol_p">{li_2}</p></li>
                    <li><p className="ol_p">{li_3}</p></li>
                </ol>
            </div>
            <div className="hr"></div>
        </div>
    )
}