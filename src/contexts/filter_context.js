import React, {useReducer, useEffect, useContext}from 'react'
import reducer from '../reducers/filter_reducer';


//local imports
import {LOAD_PRODUCTS, ENABLE_GRID_VIEW, DISABLE_GRID_VIEW} from '../Utilities/actions'
import { useProductsContext } from './products_context';

const FilterContext = React.createContext();

const initialState = {
    all_products: [],
    filtered_products: [],
    grid_view: true,
}

const FiterContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {products} = useProductsContext();
    useEffect(() => {
       dispatch({type: LOAD_PRODUCTS, payload: products});
    }, [products])

    const enableGridView = () => {
       dispatch({type: 'ENABLE_GRID_VIEW'})
    }

    const disableGridView = () => {
      dispatch({type: 'DISABLE_GRID_VIEW'})
   }
    return (
       <FilterContext.Provider value = {{
          ...state,
          enableGridView,
          disableGridView

       }}>
          {children}
       </FilterContext.Provider>
    )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}


export {useFilterContext , FiterContextProvider}