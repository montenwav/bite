import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export function BottomCompanies() {
    const [imgIndex, setImgIndex] = useState(52)

    // Drag effect 

    const [isDragging, setIsDragging] = useState(false)

    const ChangeThreshold = 50 // How much you should drag to change an image
    const dragLenght = useMotionValue(0) // displays how much you dragged 

    const onDragStart = () => setIsDragging(true)

    const onDragEnd = () => {
        setIsDragging(false)

        const x = dragLenght.get()

        if (x <= -ChangeThreshold && imgIndex < companiesList.length - 1) {
            setImgIndex(prev => prev + 1)
        } else if (x >= ChangeThreshold && imgIndex > 0) {
            setImgIndex(prev => prev - 1)
        }
    }

    //Autoplay effect

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         updateIndex(imgIndex + 1);
    //     }, 3000);
    //     return () => {
    //         if (interval) {
    //             clearInterval(interval);
    //         }
    //     };
    // });

    const updateIndex = (newIndex) => {
        if (newIndex >= companiesList.length) {
            newIndex = 0;
        }
        setImgIndex(newIndex);
    };

    return (
        <section className="bottom_companies">
            <motion.div
                style={{
                    transform: `translateX(-${imgIndex * 100}%)`,
                    x: dragLenght,
                }}
                drag="x"
                dragConstraints={{ right: 0, left: 0 }}
                animate={{ translateX: `-${imgIndex * 100}%` }} // translate by img size
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className="bottom_comp_container">
                <Companies />
            </motion.div>
        </section>
    )
}

const Companies = () => {
    return (
        <>
            {companiesList.map((company, index) => (
                <motion.div
                    key={index}
                    whileTap={{ cursor: 'grabbing' }}
                    className='bottom_comp_item'
                >
                    <h4>{company.title}</h4>
                    <img height='25px' src={company.src} />
                </motion.div>
            ))}
        </>
    )
}

const companiesList = []
for (let i = 0; i < 25; i++) {
    companiesList.push(
        { title: '“Just what your toiletry bag didn’t know it was missing.”', src: '/src/images/companies/1.png' },
        { title: '“These have changed my life.”', src: '/src/images/companies/4.png' },
        { title: '“Give love to your pearly whites.”', src: '/src/images/companies/6.png' },
        { title: '“Best Whitening Toothpaste Tablets”', src: '/src/images/companies/7.png' },
    )
} 