import { useEffect, useRef } from 'react';

const windowInnerWidth = window.innerWidth 

export default function TopCompanies() {
    const topCompRef = useRef(null)

    // if (windowInnerWidth < 600) { // activates the slider
    //     useEffect(() => {
    //         setInterval(() => {
    //             for(let i = 0; i < 9; i++) {
    //                 const map = getMap();
    //                 const node = map.get(i);
    //                 node.scrollIntoView({
    //                     behavior: 'smooth',
    //                     inline: 'center'
    //                 });
    //             }})
    //         }, 2000);
    //     }

    function getMap() {
        if (!topCompRef.current) {
            // initialize the map on first usage.
            topCompRef.current = new Map();
        }
        return topCompRef.current;
    }

    return (
        <>
            <Hr />
            <div className='companiesList'>
                <h4>AS SEEN IN</h4>
                <div className='companies_container'>
                    <ul>
                        {companiesList.map(company => (
                            <li
                                key={company.id}
                                ref={(node) => {
                                    const map = getMap();
                                    if (node) {
                                        map.set(company.id, node);
                                    } else {
                                        map.delete(company.id);
                                    }
                                }}
                            >
                                <img
                                    src={company.src}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Hr />
        </>
    )
}

const Hr = () => <div style={{ width: '100vw', height: '1px', background: 'black' }}></div>

const companiesList = [];
for (let i = 1; i < 9; i++) {
    companiesList.push({ id: i, src: `/src/images/companies/${i}.png` });
}