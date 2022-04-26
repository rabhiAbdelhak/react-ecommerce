import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Utilities/Responsive'

const PageTitle = ({title}) => {
  return (
    <Wrapper>
         <p>{title}</p>
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

p {
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  ${mobile({fontSize: '16px'})}
}

`