import React, { createContext, useState } from "react";

// Create Cart Context
export const CartContext = createContext();

// CartProvider will provide the cart state to the components
export const CartProvider = ({ children }) => {
  // Initialize the cart count with a default value of 0
  const [cartCount, setCartCount] = useState(0);

  // Function to add item to the cart
  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  // Return the context provider with the cart state and update function
  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
