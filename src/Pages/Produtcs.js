import React from "react";
import styled from "styled-components";
import { IoGrid } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";

//local imports
import {
  Loading,
  PageTitle,
  Product,
  Filters,
  Sort,
} from "../Components";
import { useFilterContext } from "../contexts/filter_context";
import { useProductsContext } from "../contexts/products_context";
import ProductInList from "../Components/ProductInList";

const Products = () => {
  const { products_loading: loading } = useProductsContext();
  const {
    filtered_products: products,
    disableGridView,
    enableGridView,
    grid_view: gridView,
  } = useFilterContext();

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );
  return (
    <Wrapper>
      
      <Sort/>
      <Container className="container">
        <ListProducts grid={gridView}>
          {gridView &&
            products.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          {!gridView &&
            products.map((product) => {
              return <ProductInList key={product.id} {...product} />;
            })}
        </ListProducts>
      </Container>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.main`
background: var(--very-light-color)
`;


const Container = styled.section`
  display: flex;
  padding: 10px 0;
`;

const ListProducts = styled.div`
  flex: 1;
  ${(props) =>
    props.grid
      ? `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  `
      : ""}
`;
