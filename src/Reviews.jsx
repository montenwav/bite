export default function Reviews() {
    return (
        <div className="Reviews">
            <h1>20,000+ Reviews For A Reason</h1>
            <div className='ReviewCardsContainer'>
                <ReviewCard
                    title='No mess, cleans and whitens beautifully, and no plastic or repeat containers!'
                    author='KATHLEEN M.'
                    src='/src/images/reviews/homepage-ugc-review-1.webp' />
                <ReviewCard
                    title='I love the sustainable packaging and my teeth have gotten whiter since using this toothpaste. Easy to travel with!'
                    author='CHRISSY B.'
                    src='/src/images/reviews/homepage-ugc-review-3.webp' />
                <ReviewCard
                    title='Best toothpaste I’ve ever used!'
                    author='LUCY R.'
                    src='/src/images/reviews/homepage-ugc-review-4.webp' />
                <ReviewCard
                    title='I’ve tried a few other brands of toothpaste tablets and these bits are by far the best. 
                    They foam up like regular toothpaste and have a great flavor.'
                    author='BRITT W.'
                    src='/src/images/reviews/homepage-ugc-review-2.webp' />
                <ReviewCard
                    title='I have been using Bits for a year now, and I am very happy with them. My dental hygienist is too! I highly recommend them!'
                    author='ANNE L.'
                    src='/src/images/reviews/homepage-ugc-review-5.webp' />
            </div>
            <button className='ReviewsBtn'>READ ALL REVIEWS</button>
        </div>
    )
}

const ReviewCard = ({ title, author, src }) => {
    return (
        <div className='ReviewCard'>
            <div className='ReviewTitle'>
                <p>{title}</p>

                <div className="AuthorAndStars">
                    <p>{author}</p>
                    <Stars />
                </div>
            </div>

            <img className='ReviewCardImg' src={src} alt={author} />
        </div>
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