import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

//local imports
import {ErrorComponent, Loading} from '../Components';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if(isLoading) return <Wrapper><Loading/></Wrapper>
  if(error) return <Wrapper><ErrorComponent/></Wrapper>
  return <div>{children}</div>;
};

export default AuthWrapper;

const Wrapper = styled.div`
display: grid;
place-items: center;
height: 100vh
`
