import React from "react";
import useCart from "../../context/useCart";

const CartPage: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="container my-4">
      <h1>Your Cart</h1>

      {cartItems.length > 0 ? (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              key={item.product.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                style={{ width: "100px", height: "auto" }}
              />

              <div className="flex-grow-1 mx-3">
                <h5>{item.product.name}</h5>
                <p>Size: {item.product.size || "N/A"}</p>
                <p>Price: {item.product.price} kr</p>
              </div>

              <div className="d-flex align-items-center">
                <button
                  className="btn btn-dark mx-1"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  <i className="bi bi-dash"></i>
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="btn btn-dark mx-1"
                  onClick={() => addToCart(item.product)}
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="mt-4">
        <h4>Total Amount: {totalAmount} kr</h4>
        <button
          className="btn btn-primary"
          onClick={() => alert("Proceed to checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export { CartPage };
