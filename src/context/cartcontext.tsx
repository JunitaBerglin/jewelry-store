import React, { createContext, useState, ReactNode } from "react";

interface CartContextType {
  cartCount: number;
  addToCart: (amount: number) => void;
  removeFromCart: (amount: number) => void;
}

const defaultContext: CartContextType = {
  cartCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
};

export const CartContext = createContext<CartContextType>(defaultContext);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (amount: number) => {
    setCartCount((prevCount) => prevCount + amount);
  };

  const removeFromCart = (amount: number) => {
    setCartCount((prevCount) => Math.max(0, prevCount - amount));
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
