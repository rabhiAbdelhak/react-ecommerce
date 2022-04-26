import React from "react";
import styled from "styled-components";

import ProductInList from "./ProductInList";

const ListView = ({ products }) => {
  
  return (
    <Wrapper>
      {products.map((product) => {
        const {id} = product;
        return (
          <ProductInList key={id} {...product}/>
        );
      })}
    </Wrapper>
  );
};

export default ListView;

const Wrapper = styled.section`
  
`;
