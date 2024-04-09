import { useEffect, useRef, useState } from 'react';

export default function TopCompanies() {
    const [imgId, setImgId] = useState(0)
    // const [isAdaptive, setIsAdaptive] = useState(false)

    // Add dynamic width
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener("resize", windowSizeHandler);

        return () => {
            window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);

    const updateIndex = (newIndex) => {
        if (newIndex >= companiesList.length - 3) {
            newIndex = 0;
        }
        setImgId(newIndex);
    };

    useEffect(() => {
        if (windowSize < 1000) {
            // setIsAdaptive(true)

            // for (let j = 0; j < 5; j++) { //Push duplicates
            //     for (let i = 1; i < 9; i++) {
            //         companiesList.push({ src: `/src/images/companies/${i}.png` });
            //     }
            // }

            const interval = setInterval(() => {
                updateIndex(imgId + 1);
            }, 1000);


            return () => {
                if (interval) {
                    clearInterval(interval);
                }
            };
        }

        if (windowSize > 1000) {
            setImgId(0)
            // for (let j = 0; j < 5; j++) { // Remove duplicates
            //     for (let i = 1; i < 9; i++) {
            //         companiesList.pop();
            //     }
            // }
            // setIsAdaptive(false)
        }
    })

    return (
        <>
            <Hr />
            <div className='companies_list'>
                <div className='as_seen_in'>
                    <h4>AS SEEN IN</h4>
                </div>

                <div
                    style={{ transform: `translateX(-${imgId * 188}px)` }}
                    className='companies_container'>
                    <>
                        {companiesList.map((company, idx) => (
                            <div
                                key={idx}
                                className='top_copm_item'>
                                <img
                                    src={company.src}
                                />
                            </div>
                        ))}
                    </>
                </div>
            </div>
            <Hr />
        </>
    )
}

const Hr = () => <div style={{ width: '100%', height: '1px', background: 'black' }}></div>

const companiesList = [];
for (let i = 1; i < 9; i++) {
    companiesList.push({ src: `/src/images/companies/${i}.png` });
}