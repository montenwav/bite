import { useRef } from 'react';

export default function TopCompanies() {
    const itemsRef = useRef(null)

    let currentIndex = 0; // init ialize index to track the current position
    setInterval(() => {
        currentIndex = (currentIndex + 1) % 6; // update index for next iteration
        const map = getMap();
        const node = map.get(currentIndex);
        node.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }, 3000);

    function getMap() {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
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