import React from "react";
import styled from "styled-components";


//local_imports
import { useProductsContext } from "../contexts/products_context";
import { Link } from "react-router-dom";

//local imports
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import Product from "./Product";

const FeaturedProdutcs = () => {
  const { featured, products_loading: loading, products_error: error } = useProductsContext();

  return (
    <Wrapper>
      <Title>Featured Products</Title>

      {!loading && !error ? (
        <Container className="container">
          {featured.map((product) => {
            return (
              <Product key={product.id} {...product}/>
            );
          })}
        </Container>
      ) : (
        error ? <ErrorComponent/> : <Loading/>
      )}

      <Link to="/products" className="btn">
        More Products ...
      </Link>
    </Wrapper>
  );
};

export default FeaturedProdutcs;

const Wrapper = styled.section`
  background: var(--very-light-color);
  padding: 100px 0;

  > a {
    background: var(--secondary-color);
    color: var(--neutral-dark);
    text-align: center;
    padding: 7px 15px;
    margin: 20px auto 50px;
    width: 180px;
  }
`;

const Title = styled.h1`
  color: var(--primary-color);
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

