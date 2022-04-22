import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const Footer = () => {
  return (
    <Wrapper className='_flex_center'>
          <Copyright>2022 </Copyright>
          <Logo/>
          <p>Made with Love by <strong>Rabhi Abdelhak</strong></p>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
flex-direction: column;
height: 120px;
background: var(--secondary-color);
color: var(--neutral-dark);
p > strong {
    color: var(--primary-color)
}
`

const Copyright = styled.p`
text-align: center;

`