import React, { useState } from "react";
import useCart from "../../context/useCart";
import { CartModal } from "./CartModal";

const CartButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <button
        type="button"
        className="btn position-relative"
        id="openCart"
        onClick={() => setShowModal(true)}
      >
        <i className="bi bi-bag" style={{ fontSize: "1.5rem" }}></i>
        {cartCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
            <span className="visually-hidden">items in cart</span>
          </span>
        )}
      </button>

      <CartModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export { CartButton };
