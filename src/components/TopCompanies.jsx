import { useEffect, useState, memo } from 'react';
import { useSize } from '../hooks/useSize.jsx'

export const TopCompanies = memo(() => {
    const [imgId, setImgId] = useState(0)
    const windowsize = useSize() // Add dynamic width

    const updateIndex = (newIndex) => {
        if (newIndex >= companiesList.length - 3) {
            newIndex = 0;
        }
        setImgId(newIndex);
    };

    useEffect(() => {
        if (windowsize < 1000) {
            const interval = setInterval(() => {
                updateIndex(imgId + 1);
            }, 3000);

            return () => clearInterval(interval);
        } else {
            setImgId(0)
        }
    }, [windowsize])

    return (
        <>
            <Hr />
            <section className='companies_list'>
                <div className='as_seen_in'>
                    <h4>AS SEEN IN</h4>
                </div>

                <div
                    style={{ transform: `translateX(-${imgId * 188.5}px)` }}
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
            </section>
            <Hr />
        </>
    )
})

const Hr = () => <div style={{ width: '100%', height: '1px', background: 'black' }}></div>

const companiesList = [];
for (let i = 1; i < 9; i++) {
    companiesList.push({ src: `/src/images/companies/${i}.png` });
}