import { useState, useEffect } from 'react';
import {useSize} from '../hooks/useSize.jsx'

export function Reviews() {
    const [activeIndex, setActiveIndex] = useState(0);

    const windowsize = useSize()

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1);
        }, 3000);
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const updateIndex = (newIndex) => {
        if (newIndex >= reviews.length - 3) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return (
        <section className="reviews">
            <h1>20,000+ Reviews For A Reason</h1>

            <div
                className="review_container"
                style={{
                    transform:
                        windowsize < 1000 ? 
                            `translateX(calc(-${activeIndex} * 25% + ${activeIndex} * -20px))` :
                        windowsize < 2000 ? 
                            `translateX(calc(-${activeIndex} * 70% + ${activeIndex} * -20px))` :
                        windowsize < 2800 ? 
                            `translateX(calc(-${activeIndex} * 30% + ${activeIndex} * -20px))` :
                        windowsize > 2800 ? 
                            `translateX(calc(-${activeIndex} * 15% + ${activeIndex} * -20px))` :
                            undefined, // Use undefined to remove the style if none of the conditions match
                }}
                
            >
                <ReviewCards />
            </div>
            <button className='reviews_btn'>READ ALL REVIEWS</button>
        </section>
    )
}

const ReviewCards = () => {
    return (
        <>
            {reviews.map((review, idx) =>
                <div
                    key={idx}
                    className='review_card'>
                    <div className='ReviewTitle'>
                        <p>{review.title}</p>

                        <div className="AuthorAndStars">
                            <p>{review.author}</p>
                            <Stars />
                        </div>
                    </div>

                    <div className='review_card_img'>
                        <img
                            src={review.src}
                            alt={review.author} />
                    </div>
                </div>
            )}
        </>
    )
}

const Stars = () => {
    return (
        <div className='cardStars reviews-stars'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={24}
                fill="none"
                viewBox="-1 -1 26 24"
                id="star-teal"
                y={4873}
            >
                <path
                    d="m11.886 0 2.67 8.213h8.635l-6.986 5.077 2.668 8.213-6.987-5.076L4.9 21.503l2.668-8.213L.582 8.213h8.636L11.886 0Z"
                    fill="#72F2C7"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={24}
                fill="none"
                viewBox="-1 -1 26 24"
                id="star-teal"
                y={4873}
            >
                <path
                    d="m11.886 0 2.67 8.213h8.635l-6.986 5.077 2.668 8.213-6.987-5.076L4.9 21.503l2.668-8.213L.582 8.213h8.636L11.886 0Z"
                    fill="#72F2C7"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={24}
                fill="none"
                viewBox="-1 -1 26 24"
                id="star-teal"
                y={4873}
            >
                <path
                    d="m11.886 0 2.67 8.213h8.635l-6.986 5.077 2.668 8.213-6.987-5.076L4.9 21.503l2.668-8.213L.582 8.213h8.636L11.886 0Z"
                    fill="#72F2C7"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={24}
                fill="none"
                viewBox="-1 -1 26 24"
                id="star-teal"
                y={4873}
            >
                <path
                    d="m11.886 0 2.67 8.213h8.635l-6.986 5.077 2.668 8.213-6.987-5.076L4.9 21.503l2.668-8.213L.582 8.213h8.636L11.886 0Z"
                    fill="#72F2C7"
                />
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={24}
                fill="none"
                viewBox="-1 -1 26 24"
                id="star-teal"
                y={4873}
            >
                <path
                    d="m11.886 0 2.67 8.213h8.635l-6.986 5.077 2.668 8.213-6.987-5.076L4.9 21.503l2.668-8.213L.582 8.213h8.636L11.886 0Z"
                    fill="#72F2C7"
                />
            </svg>
        </div>
    )
}

const reviews = [];
for (let i = 0; i < 20; i++) {
    reviews.push(
        {
            title: 'No mess, cleans and whitens beautifully, and no plastic or repeat containers!',
            author: 'KATHLEEN M.',
            src: '/src/images/reviews/homepage-ugc-review-1.webp'
        },
        {
            title: 'I love the sustainable packaging and my teeth have gotten whiter since using this toothpaste. Easy to travel with!',
            author: 'CHRISSY B.',
            src: '/src/images/reviews/homepage-ugc-review-3.webp'
        },
        {
            title: 'Best toothpaste I’ve ever used!',
            author: 'LUCY R.',
            src: '/src/images/reviews/homepage-ugc-review-4.webp'
        },
        {
            title: 'I’ve tried a few other brands of toothpaste tablets and these bits are by far the best. They foam up like regular toothpaste and have a great flavor.',
            author: 'BRITT W.',
            src: '/src/images/reviews/homepage-ugc-review-2.webp'
        },
        {
            title: 'I have been using Bits for a year now, and I am very happy with them. My dental hygienist is too! I highly recommend them!',
            author: 'ANNE L.',
            src: '/src/images/reviews/homepage-ugc-review-5.webp'
        }
    )
}