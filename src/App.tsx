import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/startpage";
import { CartPage } from "./pages/cartpage";
import { ProductsPage } from "./pages/productspage";
import { AboutPage } from "./pages/aboutpage";
import { ContactPage } from "./pages/contactpage";
import { CartProvider } from "./context/cartcontext";
import { ProductDetails } from "./pages/productdetails";

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
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
};

export { App };
