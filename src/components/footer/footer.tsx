import React from "react";
import "../../scss/_footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4 className="footer__title">4 Jewelry</h4>
            <ul className="footer__ul">
              <li className="footer__li">
                <a href="/" className="footer__links">
                  Home
                </a>
              </li>
              <li className="footer__li">
                <a href="/products" className="footer__links">
                  Products
                </a>
              </li>
              <li className="footer__li">
                <a href="/about" className="footer__links">
                  About Us
                </a>
              </li>
              <li className="footer__li">
                <a href="/contact" className="footer__links">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer__title">FAQ</h4>
            <ul className="footer__ul">
              <li className="footer__li">
                <a href="/shipping" className="footer__links">
                  Shipping
                </a>
              </li>
              <li className="footer__li">
                <a href="/returns" className="footer__links">
                  Returns
                </a>
              </li>
              <li className="footer__li">
                <a href="/order-status" className="footer__links">
                  Order Status
                </a>
              </li>
              <li className="footer__li">
                <a href="/payment-options" className="footer__links">
                  Payment Options
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer__title">Store</h4>
            <ul className="footer__ul">
              <li className="footer__li">
                <a href="#" className="footer__links">
                  <i className="fa fa-map-marker"></i> Gågatan 2, Stockholm
                </a>
              </li>
              <li className="footer__li">
                <a href="mailto:info@4jewelry.com" className="footer__links">
                  <i className="fa fa-envelope"></i> info@4jewelry.com
                </a>
              </li>
              <li className="footer__li">
                <a href="tel:0735647654" className="footer__links">
                  <i className="fa fa-phone"></i> 073-5647654
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer__title">Follow Us</h4>
            <div className="social-links">
              <a
                href="https://facebook.com"
                className="footer__links"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i> @4jewelryshop
              </a>
              <a
                href="https://instagram.com"
                className="footer__links"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i> @4jewelryshop
              </a>
              <a
                href="https://twitter.com"
                className="footer__links"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i> @4jewelryshop
              </a>
            </div>
          </div>

          <a href="#" className="arrow" aria-label="Go to top">
            <span className="bi bi-arrow-up"></span>
          </a>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 4 Jewelry</p>
        </div>
      </div>
    </footer>
  );
};
export { Footer };
