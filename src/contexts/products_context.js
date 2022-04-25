import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";

//local imports
import { reducer } from "../reducers/products_reducer";
import { products_url, single_product_url } from "../Utilities/constants";
import {
  LOADING_PRODUCTS,
  GET_PRODUTCS,
  PRODUCTS_ERROR,
  LOADING_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT,
  SINGLE_PRODUCT_ERROR,
} from "../Utilities/actions";

const ProductsContext = React.createContext();

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  featured: [],
  single_product: {},
  single_product_loading: true,
  single_product_error: false,
};

//the context provider function
export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: LOADING_PRODUCTS });
    try {
      const { data: products } = await axios(products_url);
      if (products) {
        dispatch({ type: GET_PRODUTCS, payload: products });
      }
    } catch (error) {
      dispatch({ type: PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: LOADING_SINGLE_PRODUCT });
    try {
      const { data: product } = await axios(`${single_product_url}${id}`);
      if (product) {
        dispatch({ type: GET_SINGLE_PRODUCT, payload: product });
      }
    } catch (err) {
      dispatch({ type: SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

//export the context as ready to use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default { ProductsContextProvider, useProductsContext };
