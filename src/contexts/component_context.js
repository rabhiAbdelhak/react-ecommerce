import React, { useContext, useEffect, useReducer} from 'react';

//local imports
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  OPEN_THEME_CONTAINER,
  CLOSE_THEME_CONTAINER,
  CHANGE_THEME,
  TOGGLE_FILTERS,
  OPEN_ADD_TO_CART,
  CLOSE_ADD_TO_CART
} from '../Utilities/actions';

import { component_reducer } from '../reducers/components_reducer';
import { useProductsContext } from './products_context';

const AppContext = React.createContext();


const initialState = {
  showSidebar : false,
  theme: localStorage.getItem('theme') || 'dark-theme',
  showThemeContainer : false,
  showModal: false,
  showFilters : false,
  AddToCartPosition: {left : '0', top: '0'},
}



const ComponentContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(component_reducer, initialState)
  const {fetchSingleProduct} = useProductsContext();

  const openSidebar = () => {
    dispatch({type: OPEN_SIDEBAR})
  }
  
  const closeSidebar = () => {
    dispatch({type:CLOSE_SIDEBAR})
  }

  const toggleFilters = () => {
    dispatch({type: TOGGLE_FILTERS})
  }

  const openModal = (id) => {
    fetchSingleProduct(id);
    dispatch({type: 'OPEN_MODAL'});
  }
  
  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'});
  }

  
  const openThemeContainer = () => {
    dispatch({type:OPEN_THEME_CONTAINER})
  }
  
  const closeThemeContainer = () => {
    dispatch({type:CLOSE_THEME_CONTAINER})
  }
  
  const changeTheme = (theme) => {
    dispatch({type:CHANGE_THEME, payload: theme })
  }

  const openAddToCart = (e, id) => {
       const {left, top} = e.target.getBoundingClientRect();
       fetchSingleProduct(id);
       dispatch({type: OPEN_ADD_TO_CART, payload: {left , top}})
  }

  const closeAddToCart = () => {
        dispatch({type: CLOSE_ADD_TO_CART})
  }
  
  //change and store theme in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme) document.documentElement.classList.remove(storedTheme);
    document.documentElement.classList.add(state.theme);
    localStorage.setItem('theme' , state.theme);
  },[state.theme]);

  return <AppContext.Provider value={
      {
          ...state,
          openSidebar,
          closeSidebar,
          openThemeContainer,
          closeThemeContainer,
          changeTheme,
          openModal,
          closeModal,
          toggleFilters,
          openAddToCart,
          closeAddToCart
      }
  }>
      {children}
  </AppContext.Provider>
}

 const useComponentContext = () => {
  return useContext(AppContext);
}

export  {ComponentContextProvider, useComponentContext}