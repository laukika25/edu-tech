import React from "react";
// import "./ReviewCard.css";
import { Link } from "react-router-dom";

const ReviewCard = ({ name, review }) => {
  return (
    <div className="review-card">
      <h3 className="reviewer-name">{name}</h3>
      <p className="review-text">{review}</p>
    </div>
  );
};

export default ReviewCard;
