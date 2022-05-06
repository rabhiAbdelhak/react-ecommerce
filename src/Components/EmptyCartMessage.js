import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EmptyCartMessage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className="_flex_center">
      <h3>You have an empty Cart !</h3>
      <button 
        className="big-small-animation"
        onClick={() => navigate("/products")}
      >
        Fill Your Cart
      </button>
    </Wrapper>
  );
};

export default EmptyCartMessage;

const Wrapper = styled.div`
  padding: 15px 20px;
  margin: 200px auto;
  text-align: center;
  width: 80%;
  flex-direction: column;

  h3 {
    color: var(--secondary-color);
    font-size: 25px;
    font-weight: 400;
  }

  button {
      padding: 7px 15px;
      background: var(--primary-color);
      color: white;
      margin-top: 20px;
  }
`;
