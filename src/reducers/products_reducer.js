import {
  LOADING_PRODUCTS,
  GET_PRODUTCS,
  PRODUCTS_ERROR,
  LOADING_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT,
  SINGLE_PRODUCT_ERROR,
} from "../Utilities/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    //loading products
    case LOADING_PRODUCTS:
      return { ...state, products_loading: true };

    //Get products
    case GET_PRODUTCS:
      const featured_products = action.payload.filter(
        (product) => product.featured
      );
      return {
        ...state,
        products: action.payload,
        featured: featured_products,
        products_loading: false,
      };
    //if there is an an error with fetching the products
    case PRODUCTS_ERROR:
        return {...state, products_error: true}
    
    //loading the single product
    case LOADING_SINGLE_PRODUCT : 
        return {...state, single_product_loading: true, single_product_error: false}
    
    //update the single product value
    case GET_SINGLE_PRODUCT:
      return {...state, single_product: action.payload , single_product_loading: false}
    
    //if there is an error with fetching the single product 
    case SINGLE_PRODUCT_ERROR:
      return {...state, single_product_loading: false, single_product_error: true};
    default:
      return state;
  }
};
