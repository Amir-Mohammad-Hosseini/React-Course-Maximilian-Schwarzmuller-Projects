import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItems : () => {}
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existItemInCart = state.items.some(
      (item) => item.id === action.item.id,
    );

    let updatedItems = [];

    if (existItemInCart) {
      updatedItems = state.items.map((item) =>
        item.id === action.item.id
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item },
      );
    } else {
       updatedItems = [...state.items, { ...action.item, quantity: 1 }];
    }

    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
    const updatedItems = state.items
      .map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item },
      )
      .filter((item) => item.quantity !== 0);

    return { ...state, items: updatedItems };
  }
  if(action.type === "CLEAR_ITEMS"){
    return {...state , items : []}
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", item });
  };
  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id });
  };
  const clearItems = () => {
    dispatchCart({type : "CLEAR_ITEMS"})
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearItems
  };


  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
export default CartContext;
