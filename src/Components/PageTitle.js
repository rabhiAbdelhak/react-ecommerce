import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Utilities/Responsive'

const PageTitle = ({title}) => {
  return (
    <Wrapper>
         <h1>{title}</h1>
    </Wrapper>
  )
}

export default PageTitle

const Wrapper = styled.div`
height: 60px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 15px;
color: var(--primary-color);
background: var(--neutral-light);

h1{
  font-size: 20px;
  text-align: center;
  ${mobile({fontSize: '16px'})}
}

`