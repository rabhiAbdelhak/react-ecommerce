import React from 'react'
import styled from 'styled-components';

const ErrorComponent = () => {
  return (
    <Wrapper className='_flex_center'>
        <p>OOps! Somthing went Wrong ! Products can't be charged</p>
        <span>Try to fix it by Refreshing the page !</span>
    </Wrapper>
  )
}

export default ErrorComponent;

const Wrapper = styled.section`
min-height: 300px;
flex-direction: column;

p{
    text-align: center;
    color: tomato;
    letter-spacing: 1px;
    font-size: 18px;
}

span{
    color: var(--primary-color);
}
`