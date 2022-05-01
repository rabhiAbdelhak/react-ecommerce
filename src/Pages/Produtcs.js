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
        {products.length > 0 ? (<ListProducts grid={gridView}>
          {gridView &&
            products.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          {!gridView &&
            products.map((product) => {
              return <ProductInList key={product.id} {...product} />;
            })}
        </ListProducts>) : <h1 className='no-products-msg'>There are no products that match your filter !</h1>}
      </Container>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.main`
background: var(--very-light-color);
`;


const Container = styled.section`
  display: flex;
  min-height: 400px;
  padding: 30px 0 50px;
  
  .no-products-msg{
     font-size: 20px;
     text-align: center;
     color: var(--primary-color);
     opacity: 0.6;
  }
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
