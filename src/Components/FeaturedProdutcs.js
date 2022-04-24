import React from "react";
import styled from "styled-components";
import {FaSearch, FaCartPlus} from 'react-icons/fa';

//local_imports
import { useProductsContext } from "../contexts/products_context";
import { Link } from "react-router-dom";

const FeaturedProdutcs = () => {
  const { featured } = useProductsContext();
  return (
    <Wrapper>
      <Title>Featured Products</Title>
      <Container className="container">
        {featured.map((product) => {
          const { id, name, price, image } = product;
          return (
            <Product>
              <img src={image} alt={name} />
              <div className="info">
                <p className="name">{name}</p>
                <span className="price">{price}</span>
              </div>
              <div className='actions _flex_center'>
                 <Link className='_flex_center' to={'/products/'+id}><FaCartPlus/></Link>
                 <Link className='_flex_center' to={'/products/'+id}><FaSearch/></Link>
              </div>
            </Product>
          );
        })}
      </Container>
      <Link to='/products' className='btn'>More Products ...</Link>
    </Wrapper>
  );
};

export default FeaturedProdutcs;

const Wrapper = styled.section`
background: var(--very-light-color);
padding: 100px 0;

> a{
    background: var(--secondary-color);
    color: var(--neutral-dark);
    text-align: center;
    padding: 7px 15px;
    margin: 20px auto 50px;
    width: 180px;
}`;

const Title = styled.h1`
color: var(--primary-color);
text-align: center;
`

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
gap: 25px;
`;

const Product = styled.article`
position: relative;
border-radius: 5px;
height: 250px;
overflow: hidden;
cursor: pointer;

.actions {
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    height: 200px;
    background: rgb(0 0 0 / 0.5);
    gap: 30px;
    opacity: 0;
    transition: var(--transition);
}
:hover .actions{
    opacity: 1;
}
.actions > a {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--very-light-color);
    color: var(--secondary-color);
    font-size: 16px;
    font-weight: 200;
    transition: var(--transition)
}

.actions > a:hover {
    transform: scale(1.3);
    opacity: 0.7;
}

.info{
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: absolute;
    left:0;
    bottom:0;
    background: var(--neutral-dark);
    width: 100%;
    height: 50px;
    padding: 10px;
}

.info .name{
letter-spacing: 2px;
color: var(--primary-color);
text-transform: capitalize;
font-weight: 400;
font-size: 17px;
}

.info .price {
    color: var(--secondary-color);
    font-size: 14px;
    font-weight: height;
}

img{
    height: 250px;
    width: 100%;
    border-radius: 5px;
}`;
