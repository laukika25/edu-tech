import React from "react";
import ReviewCard from "./ReviewCard";
import "./Review.css";

function review() {
  return (
    <div>
      <h1 className="reviews-title">Reviews</h1>
      <div className="reviews-container">
        <ReviewCard
          name="John Doe"
          review="KaroAbhayas has been a game-changer for my NEET preparation. The courses are comprehensive, and the interactive learning modules make studying enjoyable. The regular updates on the latest courses keep me ahead in my preparation. Highly recommend it."
        />
        <ReviewCard
          name="Jane Smith"
          review="I can't thank KaroAbhayas enough for the personalized learning experience. The platform's responsiveness and user-friendly interface make it easy to navigate. The latest courses section is always updated, ensuring I have access to the most relevant study material."
        />
        <ReviewCard
          name="Raj Patel"
          review="The About Us section helped me understand KaroAbhayas' commitment to quality education. The testimonials from successful students motivated me to join. The contact section made it convenient for me to reach out with my queries, and the support team was prompt and helpful."
        />
        <ReviewCard
          name="Amit Verma"
          review="KaroAbhayas has exceeded my expectations. The clear navigation and well-organized content make it easy to find what I need. The call-to-action buttons encourage me to take the next steps in my NEET preparation journey. Truly a user-friendly website!"
        />
      </div>
    </div>
  );
}

export default review;
