import React from "react";
import Star from "./Star";
import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);

  // FUnction to set rating and color in the star component
  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="stars-container">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((value) => {
          return (
            <Star
              key={value}
              selected={value <= rating}
              click={() => handleClick(value)}
              rating={rating}
            />
          );
        })}
      </div>
      <div classNames="rating-text-container">
        {rating === 1 && <h2 className="rating-text one">Very bad</h2>}
        {rating === 2 && <h2 className="rating-text two">Bad</h2>}
        {rating === 3 && <h2 className="rating-text three">Average</h2>}
        {rating === 4 && <h2 className="rating-text four">Good</h2>}
        {rating === 5 && <h2 className="rating-text five">Very good</h2>}
      </div>
    </div>
  );
}

export default StarRating;
