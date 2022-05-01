import React, { useContext, useReducer, useEffect } from "react";

//local imports 
import reducer  from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CALCULATE_TOTALS,
  UPDATE_AMOUNT
} from "../Utilities/actions";

const CartContext = React.createContext();

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    total_price:0,
    total_items: 0,
    shipping_fee: 586,
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  //add a product to the cart
  const addToCart = (item) => {
    dispatch({type: ADD_TO_CART, payload: item})
  }
  
  //remove a product from the cart
  const removeFromCart = (id) => {
    dispatch({type: REMOVE_FROM_CART, payload: id});
  }
  //update the amount a product provided
  const updateAmount = (value) => {
     dispatch({type : UPDATE_AMOUNT, payload: value});
  }

  //clear all the cart
  const clearCart = () => {
    dispatch({type: CLEAR_CART});
  }

  //useEffect to calculate totals and save cart into local storage
  useEffect(() => {
    dispatch({type : CALCULATE_TOTALS});
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart])
  return <CartContext.Provider value={{ ...state, addToCart, removeFromCart, clearCart , updateAmount}}>{children}</CartContext.Provider>;
};

const useCartContext = () => {
  return useContext(CartContext);
};

export  { useCartContext, CartContextProvider };
