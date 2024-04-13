import { useRef, useContext, useEffect} from 'react'
import { useSize } from '../hooks/useSize.jsx'
import { isAdaptiveCtx, setIsAdaptiveCtx } from '../hooks/Provider.jsx'

export const Adaptive = () => {
    const isAdaptive = useContext(isAdaptiveCtx)
    const setIsAdaptive = useContext(setIsAdaptiveCtx)

    const adaptiveRef = useRef(null)
    const windowsize = useSize()

    useEffect(() => {
        if (isAdaptive) {
            adaptiveRef.current.style.right = '0%';
            document.body.style.overflow = 'hidden';
        } else {
            adaptiveRef.current.style.right = '-100%';
            document.body.style.overflow = 'visible';
        }

        if (windowsize >= 1000) {
            setIsAdaptive(false)
            adaptiveRef.current.style.right = '-100%';
            document.body.style.overflow = 'visible';
        }
    })

    return (
        <div
            ref={adaptiveRef}
            className='adaptive_content'>
            <div className='adaptive_item'>
                <a href=""><h5>Shop All</h5></a>
            </div>
            <div style={{ background: 'black', height: '1px' }}></div>
            <div className='adaptive_open_item'>
                <a href=""><h5>OUR BEST SELLERS</h5></a>
                <div>
                    <AdaptiveOpenElem
                        title_1='Ditch the tube;'
                        title_2='bite the Bit.'
                        shop='Toothpaste Bits'
                        src='//bitetoothpastebits.com/cdn/shop/files/mobile-nav-tout-bits.jpg?v=1699977629&width=550' />
                    <div style={{ background: 'black', height: '1px' }}></div>
                    <AdaptiveOpenElem
                        title_1='Buy once,'
                        title_2='refill forever.'
                        shop='Deodroant'
                        src='//bitetoothpastebits.com/cdn/shop/files/mobile-nav-tout-deo.jpg?v=1699977629&width=550' />
                </div>
            </div>
            <div style={{ background: 'black', height: '1px' }}></div>

            <AdaptiveItem title='ORAL CARE' />
            <AdaptiveItem title='BODY CARE' />
            <AdaptiveItem title='SETS' />
            <AdaptiveItem title='ABOUT US' />
        </div>
    )
}

const AdaptiveItem = ({ title }) => {
    return (
        <>
            <div className='adaptive_item'>
                <a href=""><h5>{title}</h5></a>
            </div>
            <div style={{ background: 'black', height: '1px' }}></div>
        </>
    )
}

const AdaptiveOpenElem = ({ src, title_1, title_2, shop }) => {
    return (
        <>
            <div className='adaptive_flex_item'>
                <div className='adaptive_flex_elem'>
                    <span>
                        <h1>{title_1}</h1>
                        <h1>{title_2}</h1>
                    </span>
                    <span style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <p>Shop {shop}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={26}
                            height={26}
                            fill="none"
                            viewBox="-1 -1 26 26"
                            id="arrow"
                            y={200}
                        >
                            <mask
                                id="apa"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={24}
                                height={24}
                            >
                                <path fill="#131313" d="M0 0h24v24H0z" />
                            </mask>
                            <g mask="url(#apa)">
                                <path
                                    d="m13.692 17.308-.707-.72 4.088-4.088H5v-1h12.073l-4.088-4.088.707-.72L19 12l-5.308 5.308Z"
                                    fill="#131313"
                                />
                            </g>
                        </svg>
                    </span>
                </div>

                <div
                    style={{ border: '1px solid black' }}
                    className='adaptive_flex_elem'>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={src}
                        alt="a close-up of a measuring tape"
                    />
                </div>
            </div>
        </>
    )
}
