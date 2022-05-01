import React from 'react'
import styled from 'styled-components'
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../contexts/cart_context';

const NavButtons = ({container}) => {
  const navigate = useNavigate()
  const {total_items} = useCartContext();
  return (
    <Wrapper container={container}>
        <CartIcon onClick={() => navigate('/cart')}>
          Cart
          <FiShoppingCart className="icon" />
          <Badge className="_flex_center">{total_items}</Badge>
        </CartIcon>
        <Logout>
          Logout
          <FiLogOut className="icon" />
        </Logout>
    </Wrapper>
  )
}

export default NavButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  .icon {
    font-size: 25px;
    margin-left: 5px;
  }
  @media (max-width:992px){
      ${ props => props.container === 'navbar' ? 'display:none' : ''}
  }
`;

const CartIcon = styled.div`
  position: relative;
  font-weight: bold;
  color: var(--secondary-color);
  font-size: 20px;
  cursor: pointer;
`;

const Badge = styled.span`
  position: absolute;
  background: var(--secondary-color);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: -20px;
  right: -15px;
  color: white;
  font-size: 13px;
`;

const Logout = styled.button`
  background: transparent;
  border: none;
  color: var(--secondary-color);
  font-size: 20px;
  font-weight: bold;
`;
