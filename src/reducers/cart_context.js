import React, { useContext, useReducer } from "react";

const CartContext = React.createContext();

const initialState = {
    cart: [],
    amount: [],
    total: [],
}

const CartContextPriveder = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export default { useCartContext, CartContextPriveder };
