"use client";
import {
  createContext,
  useContext,
  useReducer,
  useMemo,
} from "react/cjs/react.development";
const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
  const stringifiedCartProducts = localStorage.getItem("cartProducts");
  const cartProducts = stringifiedCartProducts
    ? JSON.parse(stringifiedCartProducts)
    : [];
  
  const value = useMemo(() => ({
    cart: cartProducts,
  }));
  return (
    <CartContext.Provider value={cartProducts}>{children}</CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (cartProducts === undefined) {
    throw new Error("useCart must be used within a Cartprovider");
  }
  return [context];
};
