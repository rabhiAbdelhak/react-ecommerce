import React from 'react'
import styled from 'styled-components';

//local imports
import Product from './Product';

const GridView = ({products}) => {
  return (
    <Wrapper>
        {products.map(product => {
             const {id} = product;
             return <Product key={id} {...product}/>
        })}
    </Wrapper>
  )
}

export default GridView

const Wrapper = styled.section`
flex: 1;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
gap:25px;
`