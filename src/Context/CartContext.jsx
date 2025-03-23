import React, { createContext, useState } from "react";

// Create Cart Context
export const CartContext = createContext();

// CartProvider will provide the cart state to the components
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to the cart
  const addToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists, increase the quantity by 1
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Otherwise, add the new item with quantity 1
      setCart((prevCart) => [
        ...prevCart,
        { ...item, quantity: 1 },
      ]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Function to update the quantity of an item
  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate total cart count (sum of all quantities)
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price of all items in the cart
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount, // Provide cartCount for the Cart Icon
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
