import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper className='_flex_center'>
        <h1>404</h1>
        <p>The page you are looking for does not exist</p>
        <Link to='/'>Go Home</Link>
    </Wrapper> 
  )
}

export default Error

const Wrapper = styled.main`
flex-direction: column;

h1{
  color: tomato;
  font-size: 75px;
  margin:0;
  padding:0;
}

p{
  color: var(--primary-color);
  letter-spacing: 2px;
  font-size: 20px;
  margin:20px 0;
}

a {
  background: var(--primary-color);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

`