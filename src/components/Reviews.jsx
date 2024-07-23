import { memo, useState } from "react";
import { Stars } from "./Stars";
import { useAutoPlay } from "../hooks/useAutoPlay";
import { useSize } from "../hooks/useSize";

export function Reviews() {
  const [imgIndex, setImgIndex] = useState(0);
  useAutoPlay(imgIndex, setImgIndex, false, reviews.length - 2);
  const windowsize = useSize();

  return (
    <section className="reviews">
      <h1>20,000+ Reviews For A Reason</h1>
      <div
        className="review_container"
        style={{
          transform:
            windowsize < 600
              ? `translateX(calc(-${imgIndex} * 70% + ${imgIndex} * -20px))`
              : windowsize < 1000
              ? `translateX(calc(-${imgIndex} * 50% + ${imgIndex} * -20px))`
              : windowsize < 2000
              ? `translateX(calc(-${imgIndex} * 70% + ${imgIndex} * -20px))`
              : windowsize < 2800
              ? `translateX(calc(-${imgIndex} * 30% + ${imgIndex} * -20px))`
              : windowsize > 2800
              ? `translateX(calc(-${imgIndex} * 15% + ${imgIndex} * -20px))`
              : undefined, // Use undefined to remove the style if none of the conditions match
        }}
      >
        {reviews && <ReviewCards />}
      </div>
      <button className="reviews_btn">READ ALL REVIEWS</button>
    </section>
  );
}

const ReviewCards = memo(function ReviewCards() {
  return (
    <>
      {reviews.map((review, idx) => (
        <div key={idx} className="review_card">
          <div className="ReviewTitle">
            <p>{review.title}</p>

            <div className="AuthorAndStars">
              <p>{review.author}</p>
              <Stars color="72f2c7" />
            </div>
          </div>

          <div className="review_card_img">
            <img src={review.src} alt={review.author} />
          </div>
        </div>
      ))}
    </>
  );
});

const reviews = [];
for (let i = 0; i < 10; i++) {
  reviews.push(
    {
      title:
        "No mess, cleans and whitens beautifully, and no plastic or repeat containers!",
      author: "KATHLEEN M.",
      src: "/reviews/homepage-ugc-review-1.webp",
    },
    {
      title:
        "I love the sustainable packaging and my teeth have gotten whiter since using this toothpaste. Easy to travel with!",
      author: "CHRISSY B.",
      src: "/reviews/homepage-ugc-review-3.webp",
    },
    {
      title: "Best toothpaste I’ve ever used!",
      author: "LUCY R.",
      src: "/reviews/homepage-ugc-review-4.webp",
    },
    {
      title:
        "I’ve tried a few other brands of toothpaste tablets and these bits are by far the best. They foam up like regular toothpaste and have a great flavor.",
      author: "BRITT W.",
      src: "/reviews/homepage-ugc-review-2.webp",
    },
    {
      title:
        "I have been using Bits for a year now, and I am very happy with them. My dental hygienist is too! I highly recommend them!",
      author: "ANNE L.",
      src: "/reviews/homepage-ugc-review-5.webp",
    }
  );
}
