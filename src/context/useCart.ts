import { useContext } from "react";
import { CartContext } from "./cartcontext";

const useCart = () => useContext(CartContext);

export default useCart;
