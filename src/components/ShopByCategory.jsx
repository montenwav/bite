import { motion, useMotionValue } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export default function ShopByCategory() {
    const [imgIndex, setImgIndex] = useState(39)

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
                    transform: `translateX(calc(-${imgIndex * 85}vw - ${imgIndex} * 16px))`, //card width + padding 
                    x: dragLenght,
                }}
                drag="x"
                dragConstraints={{ right: 0, left: 0 }}
                animate={{ translateX: `calc(-${imgIndex * 85}vw - ${imgIndex} * 16px)` }} // translate by img size
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
            {imgs.map((img, idx) => (
                <motion.div
                    key={idx}
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

const imgs = []
for (let i = 0; i < 30; i++) {
    imgs.push(
        { name: 'ORAL CARE', src: '/src/images/shopby/hp-shop-by-category-oral-care.webp' },
        { name: 'SETS', src: '/src/images/shopby/hp-shop-by-category-sets.webp' },
        { name: 'BODY CARE', src: '/src/images/shopby/hp-shop-by-category-body-care.webp' },
    )
}