import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//local imports
import { CartItem, CartTotals } from "../Components";
import { useCartContext } from "../contexts/cart_context";
import { tablette, mobile } from "../Utilities/Responsive";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  const navigate = useNavigate();
  if (cart.length === 0)
    return (
      <Wrapper>
        <div className="cart-no-item _flex_center">
           <h3>There is no Item Added to your Cart</h3>
           <botton className=" actions-shop-btn" onClick= {() => navigate("/products")}>
              Continue Shopping
            </botton>
        </div>
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

  .cart-no-item{
    padding: 15px 20px;
    margin: 200px auto;
    text-align: center;
    width: 80%;
    flex-direction: column;
  }

  .cart-no-item h3{
    color: var(--secondary-color);
    font-size: 25px;
    font-weight: 400;
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
