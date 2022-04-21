import React, { useContext, useState , useEffect} from 'react';




const AppContext = React.createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

const ContextProvider = ({children}) => {
  const [showSidebar , setShowSidebar] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-theme')

  //change and store theme in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme) document.documentElement.classList.remove(storedTheme);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme' , theme);
  },[theme]);

  return <AppContext.Provider value={
      {
          showSidebar,
          setShowSidebar,
          theme,
          setTheme
      }
  }>
      {children}
  </AppContext.Provider>
}

export default ContextProvider