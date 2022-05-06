import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//local imports
import { CartItem, CartTotals, EmptyCartMessage } from "../Components";
import { useCartContext } from "../contexts/cart_context";
import { tablette, mobile } from "../Utilities/Responsive";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();
  if (cart.length === 0)
    return (
      <Wrapper>
        <EmptyCartMessage/>
      </Wrapper>
    );
  return (
    <Wrapper>
      <Container className="container">
        <div className="cart-list">
          {cart.map((product) => {
            return <CartItem key={product.id} {...product} />;
          })}
          <div className="cart-actions">
            <button className="actions-remove-btn" onClick={clearCart}>
              Clear Shooping Cart
            </button>
            <button className="btn actions-shop-btn" onClick= {() => navigate("/products")}>
              Continue Shopping
            </button>
          </div>
        </div>
        <CartTotals />
      </Container>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.main`

  .cart-list {
    flex: 1;
  }


  .cart-actions{
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    ${mobile({flexDirection: 'column', gap: '10px'})};
  }

  .actions-remove-btn{
    background-color: tomato;
    color:white;
    padding: 3px 10px; 
  }

  .actions-shop-btn{
    background: var(--primary-color);
    padding: 3px 10px; 
    color: white;
    max-width: 200px;
    ${mobile({maxWidth: '100%', width: "100%"})};
  }
`;

const Container = styled.section`
  padding: 30px 0;
  display: flex;
  gap: 50px;
  ${tablette({flexDirection: 'column'})};
`;
