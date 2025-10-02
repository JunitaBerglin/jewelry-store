import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/_header.scss";
import useCart from "../../context/useCart";

export const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <p className="header__logo">4 Jewelry Store</p>
        <ul className={`header__navbar ${menuOpen ? "active" : ""}`}>
          <li className="links">
            <Link to="/">Home</Link>
          </li>
          <li className="links">
            <Link to="/products">Products</Link>
          </li>
          <li className="links">
            <Link to="/about">About Us</Link>
          </li>
          <li className="links">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="header__icon">
          <li>
            <Link
              to="/cart"
              aria-label="Shopping Cart"
              className="icons__shoppingbag"
            >
              <i className="fa fa-shopping-bag"></i>
              <span className="cart-badge badge rounded-pill" id="badgeOnCart">
                {cartCount > 0 ? cartCount : ""}
              </span>
            </Link>
          </li>
        </div>
        <button
          className="header__menu-bar"
          onClick={toggleHamburgerMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
};
