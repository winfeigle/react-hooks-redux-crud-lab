import { configureStore } from "@reduxjs/toolkit";
import ReviewsReducer from "./features/reviews/reviewsSlice";
import restaurantsReducer from "./features/restaurants/restaurantsSlice";

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    reviews: ReviewsReducer,
  },
});

export default store;
