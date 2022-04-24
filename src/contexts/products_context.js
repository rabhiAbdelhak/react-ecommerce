import React, {useContext, useReducer, useEffect} from 'react';
import axios from 'axios';

//local imports 
import {reducer} from '../reducers/products_reducer';
import {products_url} from '../Utilities/constants'

const ProductsContext = React.createContext();

const initialState = {
    products: [],
    featured: [],
}

//the context provider function
export const ProductsContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer, initialState)
    
    const fetchProducts = async () => {
          try{
            const {data: products} = await axios(products_url);
            if(products) {
                dispatch({type: 'GET_PRODUTCS', payload: products})
                const featured = products.filter(product => product.featured)
                dispatch({type: 'GET_FEATURED_PRODUCTS', payload: featured})
                console.log(products, featured)
            }
          }catch(error){

          }
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    
    return (
        <ProductsContext.Provider value={
            {
                products: state.products,
                featured: state.featured
            }
        }>
            {children}
        </ProductsContext.Provider>
    )
}

//export the context as ready to use
export const useProductsContext  = () => {
    return useContext(ProductsContext);
  }

export default {ProductsContextProvider, useProductsContext}