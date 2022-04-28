import React, {useReducer, useEffect, useContext}from 'react'
import { Filters } from '../Components';
import reducer from '../reducers/filter_reducer';


//local imports
import {LOAD_PRODUCTS, ENABLE_GRID_VIEW, DISABLE_GRID_VIEW, UPDATE_SORT, SORT_PRODUCTS} from '../Utilities/actions'
import { useProductsContext } from './products_context';

const FilterContext = React.createContext();

const initialState = {
    all_products: [],
    filtered_products: [],
    grid_view: true,
    sort: 'price-lowest',
    filters: {
       text: '',
       categories: [],
       companies: [],
       colors: [],
       prices: {
          min_price: 0,
          max_price: 0,
          price: 0,
       },
       shipping: false,
    }
}

const FiterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {products} = useProductsContext();
    useEffect(() => {
       dispatch({type: LOAD_PRODUCTS, payload: products});
    }, [products])
    
    useEffect(() => {
     dispatch({type: SORT_PRODUCTS})
    }, [state.sort])

    useEffect(() => {
       dispatch({type: 'FILTER_PRODUCTS'})
    }, [state.filters])
    const enableGridView = () => {
       dispatch({type: ENABLE_GRID_VIEW})
    }

    const disableGridView = () => {
      dispatch({type: DISABLE_GRID_VIEW})
   }

   const UpdateSort = (e) => {
      dispatch({type: UPDATE_SORT, payload: e.target.value})
   }

   const updateFilters = (e) => {
     const value= e.target.value;
     const name= e.target.name
     const checked = e.target.type === 'checkbox' ? e.target.checked : null
     dispatch({type: 'UPDATE_FILTERS' , payload : {name, value, checked}})
   }

   const clearFilters= () => {
      dispatch({type: 'CLEAR_FILTERS'})
   }
   
    return (
       <FilterContext.Provider value = {{
          ...state,
          enableGridView,
          disableGridView,
          UpdateSort,
          clearFilters,
          updateFilters
       }}>
          {children}
       </FilterContext.Provider>
    )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}


export {useFilterContext , FiterContextProvider}