import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { restaurantAdded } from "./restaurantsSlice";

function RestaurantInput() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(restaurantAdded(name));
    setName("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label>Name
          <input 
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            />
        </label>
        <button type="submit">add restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;
