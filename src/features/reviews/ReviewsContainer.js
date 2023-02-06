import React from "react";
import { useSelector } from "react-redux";
import ReviewInput from "./ReviewInput";
import Reviews from "./Reviews";

function ReviewsContainer({ restaurantId }) {
    const reviews = useSelector((state) => {
      return state.reviews.entities.filter((review) => review.restaurantId === restaurantId);
    })

  return (
    <div>
      <ReviewInput 
        restaurantId={restaurantId}
        />
      <Reviews 
        reviews={reviews}
        />
    </div>
  );
}

export default ReviewsContainer;
