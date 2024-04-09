import { useEffect, useRef, useState } from 'react';

export default function TopCompanies() {
    const [imgId, setImgId] = useState(0)

    // useEffect(() => {
    //     const resizeHandler = () => {
    //         setSize(innerWidth);
    //     };
    
    //     window.addEventListener("resize", resizeHandler);
    //     resizeHandler();

    //     console.log(window.innerWidth)

        // if (size < 1000) {
        //     for (let j = 0; j < 5; j++) {
        //         for (let i = 1; i < 9; i++) {
        //             companiesList.push({ src: `/src/images/companies/${i}.png` });
        //         }
        //     }

        //     const interval = setInterval(() => {
        //         updateIndex(imgId + 1);
        //     }, 3000);

        //     return () => {
        //         if (interval) {
        //             clearInterval(interval);
        //         }
        //     };
        // }

        // if (size > 1000) {
        //     for (let j = 0; j < 5; j++) {
        //         for (let i = 1; i < 9; i++) {
        //             companiesList.pop();
        //         }
        //     }
        // }

    //     return () => {
    //         window.removeEventListener("resize", resizeHandler);
    //     };
    // }, []);

    /////

    // useEffect(() => {
    //     if (size < 1000) {
    //         for (let j = 0; j < 5; j++) {
    //             for (let i = 1; i < 9; i++) {
    //                 companiesList.push({ src: `/src/images/companies/${i}.png` });
    //             }
    //         }
    //     }

    //     if (size > 1000) {
    //         for (let j = 0; j < 5; j++) {
    //             for (let i = 1; i < 9; i++) {
    //                 companiesList.pop();
    //             }
    //         }
    //     }
    // }, [size])

    // useEffect(() => {
    //     if (size < 1000) {
    //         const interval = setInterval(() => {
    //             updateIndex(imgId + 1);
    //         }, 3000);
    //         return () => {
    //             if (interval) {
    //                 clearInterval(interval);
    //             }
    //         };
    //     }
    // });

    // const updateIndex = (newIndex) => {
    //     if (newIndex >= companiesList.length - 3) {
    //         newIndex = 0;
    //     }
    //     setImgId(newIndex);
    // };



    return (
        <>
            <Hr />
            <div className='companies_list'>
                <div className='as_seen_in'>
                    <h4>AS SEEN IN</h4>
                </div>
                <div
                    style={{ transform: `translateX(-${imgId * 170}px)` }}
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