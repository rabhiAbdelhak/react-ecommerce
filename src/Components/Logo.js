import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Wrapper>
        <Link to='/'>
          Shoo<strong>Ping</strong>
        </Link>
    </Wrapper>
  )
}

export default Logo

const Wrapper = styled.div`
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
  text-shadow: 0px 3px 5px #cb0040;
  font-family: "Ms Madi", cursive;
  strong {
    color: #cb0040;
  }
`;