import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/startpage";
import { ProductsPage } from "./pages/productspage";
import { AboutPage } from "./pages/aboutpage";
import { ContactPage } from "./pages/contactpage";
import { CartProvider } from "./context/CartProvider";
import { ProductDetails } from "./pages/productdetails";
import { CartPage } from "./pages/cartpage";
import { CheckoutPage } from "./pages/checkoutpage";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export { App };
