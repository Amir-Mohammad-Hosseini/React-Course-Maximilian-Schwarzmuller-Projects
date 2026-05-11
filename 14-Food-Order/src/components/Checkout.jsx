import { useContext, useEffect, useRef } from "react";
import Modal from "./UI/Modal";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../utils/formatting";
import { BASE_URL, calculateTotalPriceAtCart } from "../utils/utils";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../context/UserProgressContext";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { items: cartItems , clearItems:clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData
  } = useHttp(`${BASE_URL}orders`, requestConfig);

  const modalRef = useRef();

  useEffect(() => {
    if (progress === "checkout") {
      modalRef.current.open();
    } else {
      modalRef.current.close();
    }
  }, [progress]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());
    sendRequest(
      JSON.stringify({
        order: {
          items: cartItems,
          customer: customerData,
        },
      }),
    );
  };

  const handleCloseCheckout = () => {
    hideCheckout();
  };
  const handleFinish = () => {
    hideCheckout()
    clearCart()
    clearData()
  }

  const formattedTotalPrice = currencyFormatter.format(
    calculateTotalPriceAtCart(cartItems),
  );

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );
  if (isSending) {
    actions = <span>Sending order data...</span>;
  }
  if (data && !error) {
    return (
      <Modal ref={modalRef} onClose={handleCloseCheckout}>
        <h2>Success!</h2>
        <p>Your order submitted successfully!</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal ref={modalRef} onClose={handleCloseCheckout}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount : {formattedTotalPrice}</p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="Email Address" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text" />
          <Input label="City" id="city" type="text" />
        </div>
        {error && (
          <Error title="Failed to submit order" message={error.message} />
        )}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
