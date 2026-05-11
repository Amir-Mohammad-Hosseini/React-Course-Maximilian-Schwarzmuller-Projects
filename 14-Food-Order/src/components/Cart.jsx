import React, { useContext, useEffect, useRef } from "react";
import Modal from "./UI/Modal";
import CartContext from "../context/CartContext";
import { calculateTotalPriceAtCart } from "../utils/utils";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../context/UserProgressContext";
import CartItem from "./UI/CartItem";

const Cart = () => {
  const { items: cartItems, addItem, removeItem } = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  const modalRef = useRef();
  useEffect(() => {
    if (progress === "cart") {
      modalRef.current.open();
    } else {
      modalRef.current.close();
    }
  }, [progress]);

  const handleCloseCart = () => {
    hideCart();
  };
  const handleGoToCheckout = () => {
    showCheckout();
  };

  const formattedTotalPrice = currencyFormatter.format(
    calculateTotalPriceAtCart(cartItems),
  );
  return (
    <Modal className="cart" ref={modalRef} onClose={progress === "cart" ? handleCloseCart : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => addItem(item)}
            onDecrease={() => removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{formattedTotalPrice}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartItems.length !== 0 && (
          <Button onClick={handleGoToCheckout}>Go to checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
