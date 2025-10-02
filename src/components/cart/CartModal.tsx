import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../context/useCart";
import "../../scss/_cart.scss";

interface CartModalProps {
  show: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ show, onClose }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  const handleContinueShopping = () => {
    onClose();
    navigate("/products");
  };

  return (
    <>
      {/* Bootstrap Modal Backdrop */}
      {show && (
        <div className="modal-backdrop fade show" onClick={onClose}></div>
      )}

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="cartModalLabel"
        aria-hidden={!show}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="cartModalLabel">
                Cart
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>

            <ul className="modal-body list-group" id="modal-body">
              {cartItems.length === 0 ? (
                <li className="list-group-item text-center">
                  <p className="totalAmount">Your cart is empty</p>
                </li>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <li
                      key={item.product.id}
                      className="cartproduct list-group-item d-flex justify-content-between lh-sm"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="cartproduct__img"
                        style={{
                          width: "80px",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <p className="cartproduct__name">{item.product.name}</p>
                      <p className="cartproduct__price">
                        {item.product.price} kr
                      </p>
                      <div className="cartproduct__amountcontainer d-flex align-items-center">
                        <button
                          className="cartproduct__remove btn btn-dark btn-sm"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <p className="cartproduct__amount mx-2 mb-0">
                          {item.quantity}
                        </p>
                        <button
                          className="cartproduct__add btn btn-dark btn-sm"
                          onClick={() => addToCart(item.product)}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </li>
                  ))}
                  <li className="list-group-item">
                    <p className="totalAmount fw-bold mb-0">
                      Total amount: {totalAmount} kr
                    </p>
                  </li>
                </>
              )}
            </ul>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary shopping"
                onClick={handleContinueShopping}
              >
                Continue shopping
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="btn-checkout"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CartModal };
