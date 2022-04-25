import React, { useContext, useEffect, useReducer} from 'react';

//local imports
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  OPEN_THEME_CONTAINER,
  CLOSE_THEME_CONTAINER,
  CHANGE_THEME,
} from '../Utilities/actions';

import { component_reducer } from '../reducers/components_reducer';

const AppContext = React.createContext();


const initialState = {
  showSidebar : false,
  theme: localStorage.getItem('theme') || 'light-theme',
  showThemeContainer : false,
  showModal: false,
}



const ComponentContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(component_reducer, initialState)

  const openSidebar = () => {
    dispatch({type: OPEN_SIDEBAR})
  }
  
  const closeSidebar = () => {
    dispatch({type:CLOSE_SIDEBAR})
  }

  const openModal = () => {
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
  
  //change and store theme in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme) document.documentElement.classList.remove(storedTheme);
    document.documentElement.classList.add(state.theme);
    localStorage.setItem('theme' , state.theme);
  },[state.theme]);

  return <AppContext.Provider value={
      {
          openSidebar,
          closeSidebar,
          showSidebar: state.showSidebar,
          openThemeContainer,
          closeThemeContainer,
          showThemeContainer: state.showThemeContainer,
          changeTheme,
          theme: state.theme,
          showModal: state.showModal,
          openModal,
          closeModal,
      }
  }>
      {children}
  </AppContext.Provider>
}

 const useComponentContext = () => {
  return useContext(AppContext);
}

export  {ComponentContextProvider, useComponentContext}