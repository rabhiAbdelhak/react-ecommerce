import React from 'react'
import styled from 'styled-components'

const PageTitle = ({title}) => {
  return (
    <Wrapper>
         <h1>{title}</h1>
    </Wrapper>
  )
}

export default PageTitle

const Wrapper = styled.div`
height: 50px;
display: flex;
align-items: center;
padding: 10px 15px;
font-size: 15px;
color: var(--primary-color);
background: var(--neutral-light);

`