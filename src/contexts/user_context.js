import React, {useContext} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

const UserContextProvider = ({children}) => {
    const {isAuthenticated,loginWithRedirect, logout, user} = useAuth0();
    const isUser = isAuthenticated && user;
    return <UserContext.Provider value={{
        isUser,
        user,
        loginWithRedirect,
        logout
    }}>
        {children}
    </UserContext.Provider>
}

const useUserContext = () => {
  return useContext(UserContext);
}

export  {useUserContext, UserContextProvider}