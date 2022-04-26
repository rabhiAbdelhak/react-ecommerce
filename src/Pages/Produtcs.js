import React from "react";
import styled from "styled-components";
import {IoGrid} from "react-icons/io5"
import {IoIosListBox} from "react-icons/io"

//local imports
import { Loading, PageTitle, Product, Filters, GridView , ListView} from "../Components";
import { useFilterContext } from "../contexts/filter_context";
import { useProductsContext } from "../contexts/products_context";
import ProductInList from "../Components/ProductInList";

const Products = () => {
  const { products_loading: loading } = useProductsContext();
  const { filtered_products: products, disableGridView, enableGridView , grid_view: gridView} = useFilterContext();

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );
  return (
    <Wrapper>
      <PageTitle title="Home >> Products" />
      <Sort className="container">
        <div className="view-actions">
          <button className={`${gridView ? 'active' : ''}`} onClick={enableGridView}><IoGrid/></button>
          <button className={`${gridView ? '' : 'active'}`} onClick={disableGridView}><IoIosListBox/></button>
        </div>
      </Sort>
      <Container className="container">
        <Filters />
        <ListProducts grid={gridView}>
          {gridView && products.map(product => {
            return <Product key={product.id} {...product}/>
          })}
          {!gridView && products.map(product => {
            return <ProductInList key={product.id} {...product}/>
          })}
        </ListProducts>
      </Container>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.main``;
const Sort = styled.section`
  padding: 10px 0;
  margin-top: 50px;
  border-bottom: 1px solid var(--secondary-color);

  .view-actions{
    display: flex;
    gap : 10px;
  }

  .view-actions button{
    height: 25px;
    width: 25px;
    background: transparent;
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .view-actions button.active{
    background-color: var(--secondary-color);
    color: var(--neutral-dark);
  }
`;

const Container = styled.section`
  display: flex;
  padding: 20px 0;
`;

const ListProducts = styled.div` 
  flex:1;
  ${props => props.grid ? `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  ` : ''}
`
