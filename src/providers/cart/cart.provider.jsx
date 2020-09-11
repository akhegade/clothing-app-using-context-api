import React, {createContext, useState, useEffect} from "react";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemsFrom,
  getCartItemsCount,
  getTotalCost,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  cartItemCount: 0,
  totalPrice: 0,
});

const CartProvider = ({children}) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItem = (item) => setCartItems(clearItemsFrom(cartItems, item));
  // const itemCount = () => setCartItemsCount(totalItems(cartItems));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setTotalPrice(getTotalCost(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItem,
        cartItemsCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
