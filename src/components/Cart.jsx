import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {/* If cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {/* List of cart items */}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 border-b">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p>Price: ${item.price}</p>
                </div>
              </div>

              <div className="flex items-center">
                {/* Quantity Controls */}
                <button
                  className="bg-gray-300 p-2 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-4">{item.quantity}</span>
                <button
                  className="bg-gray-300 p-2 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>

                {/* Remove from cart button */}
                <button
                  className="bg-red-500 text-white p-2 ml-4 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="flex justify-between items-center mt-4 p-4 bg-gray-100">
            <h2 className="font-bold text-lg">Total Price: ${totalPrice}</h2>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
