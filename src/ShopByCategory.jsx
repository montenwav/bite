import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ShopByCategory() {
    const [imgIndex, setImgIndex] = useState(0)

    // Drag effect 
    const [isDragging, setIsDragging] = useState(false)

    const ChangeThreshold = 50 // How much you should drag to change an image
    const dragLenght = useMotionValue(0) // displays how much you dragged 

    const onDragStart = () => setIsDragging(true)

    const onDragEnd = () => {
        setIsDragging(false)

        const x = dragLenght.get()

        if (x <= -ChangeThreshold && imgIndex < imgs.length - 1) {
            setImgIndex(prev => prev + 1)
        } else if (x >= ChangeThreshold && imgIndex > 0) {
            setImgIndex(prev => prev - 1)
        }
    }

    //Autoplay effect
    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(imgIndex + 1);
        }, 3000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const updateIndex = (newIndex) => {
        if (newIndex >= imgs.length) {
            newIndex = 0;
        }
        setImgIndex(newIndex);
    };

    return (
        <section className="shop_by_category">
            <h1>Shop By Category</h1>
            <motion.div
                style={{
                    transform: `translateX(-${imgIndex * 89}%)`,
                    x: dragLenght,
                }}
                drag="x"
                dragConstraints={{ right: 0, left: 0 }}
                animate={{ translateX: `-${imgIndex * 89}%` }} // translate by img size
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                className="carousel">
                <Images />
            </motion.div>
        </section>
    )
}

const Images = () => {
    return (
        <>
            {imgs.map(img => (
                <motion.div
                    key={img.id}
                    whileTap={{ cursor: 'grabbing' }}
                    className='inner_carousel'>
                    <div className="card_image">
                        <h4>{img.name}</h4>
                        <img src={img.src} alt={img.name} />
                    </div>
                    <button className="shop_by_btn">SHOP NOW</button>
                </motion.div>
            ))}
        </>
    )
}

const imgs = [
    { id: 0, name: 'ORAL CARE', src: '/src/images/shopby/hp-shop-by-category-oral-care.webp' },
    { id: 1, name: 'SETS', src: '/src/images/shopby/hp-shop-by-category-sets.webp' },
    { id: 3, name: 'BODY CARE', src: '/src/images/shopby/hp-shop-by-category-body-care.webp' },
]