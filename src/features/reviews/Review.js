import React from "react";
import { reviewRemoved } from "./reviewsSlice";
import { useDispatch } from "react-redux";

function Review({ review }) {
  const dispatch = useDispatch();

  const handleReviewDelete = () => {
    dispatch(reviewRemoved(review.id))
  }

  return (
    <li>
      <span>{review.comment}</span>
      <button onClick={handleReviewDelete}> Delete Review </button>
    </li>
  );
}

export default Review;
