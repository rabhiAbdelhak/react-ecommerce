import React, {Fragment} from 'react'
import { Navigate } from 'react-router-dom'

//local imports
import { useUserContext } from '../contexts/user_context'

const PrivateRoute = ({children}) => {
  const {isUser} = useUserContext()
  if(isUser){
    return <Fragment>
      {children}
    </Fragment>
  }else {
    return <Navigate to='/'/>
  }
}

export default PrivateRoute