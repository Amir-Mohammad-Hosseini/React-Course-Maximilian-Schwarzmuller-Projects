import React, { useContext } from "react";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import CartContext from "../context/CartContext";

const MealItem = ({ id, name, price, description, image , mealDatas }) => {
    const {addItem} =useContext(CartContext)

    const handleAddMealToCart = () => {
        addItem(mealDatas)
    }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly={false} onClick={handleAddMealToCart} >Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
