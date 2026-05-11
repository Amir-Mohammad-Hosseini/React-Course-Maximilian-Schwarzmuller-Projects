import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../context/CartContext";
import { calculateTotslItemsCountAtCart } from "../utils/utils";
import UserProgressContext from "../context/UserProgressContext";
const Header = () => {
  const {items} = useContext(CartContext)
  const {showCart} = useContext(UserProgressContext)

  const handleShowCart = () => {
    showCart()
  }

  const itemsCount = calculateTotslItemsCountAtCart(items)
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="ReactFood" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>Cart ({itemsCount})</Button>
      </nav>
    </header>
  );
};

export default Header;
