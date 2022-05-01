import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


//local imports
import { formatPrice } from "../Utilities/helpers";
import { useCartContext } from "../contexts/cart_context";
import { mobile } from "../Utilities/Responsive";

const CartItem = ({ id, color, name, price, image, amount }) => {
    const {updateAmount, removeFromCart} = useCartContext()
  return (
    <Wrapper>
      <div className="item-details">
        <div className="item-image-holder">
          <img src={image} alt={name} className="item-image" />
        </div>
        <div className="item-info">
          <h3 className="name">{name}</h3>
          <div className="bar color-bar"><span>Color :</span><div className="color" style={{background: color}}></div></div>
          <div className="bar price-bar"><span>Price :</span><span className='price'>{formatPrice(price)}</span></div>
          <div className="bar price-bar"><span>SubTotal :</span><span className='price'>{formatPrice(price * amount)}</span></div>

        </div>
      </div>
      <div className="amount">
          <button className="amount-btn" onClick={() => updateAmount({id, value: amount- 1})}><AiOutlineLeft/></button>
          <span>{amount}</span>
          <button className="amount-btn" onClick={() => updateAmount({id, value: amount+ 1})}><AiOutlineRight/></button>
      </div>
      <div className="actions">
          <button className="remove-btn" onClick={() => removeFromCart(id)}>remove</button>
          <button className="one-btn" onClick={() => updateAmount({id, value: 1})}>back to one</button>
      </div>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.article`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--neutral-light);
  ${mobile({flexDirection: 'column', gap: '20px', alignItems: 'flex-start'})};

  .item-details {
    display: flex;
    align-items: center;
  }

  .item-image-holder {
    width: 100px;
    height: 140px;
    margin-right: 20px;
    border-radius: var(--radius);
    overflow: hidden;
  }

  .item-image-holder img {
    width: 100%;
    height: 100%;
  }

  .item-info .name {
    color: var(--primary-color);
    font-size: 20px;
    font-weight: 400;
    text-transform: capitalize;
  }

  .item-info .price {
    color: var(--secondary-color);
    font-weight: bold;
    font-size: 13px;
  }

  .bar{
      display: flex;
      align-items: center;
      gap: 10px;
  }

  .bar span{
      font-size: 15px;
      color: var(--secondary-color);
      display: block;
      width: 70px;
  }
  .item-info .color {
    width: 15px;
    height: 15px;
    border-radius: var(--radius);
  }

  .amount{
      display: flex;
      align-items: center;
      gap: 10px;
      ${mobile({justifyContent: 'center'})}
  }

  .amount-btn {
      width: 25px;
      height: 25px;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      color: var(--secondary-color);
      background: var(--vary-light-color);
      border: 1px solid  var(--secondary-color);
  }

  .amount span{
      font-size: 18px;
      font-weight: 400;
      color: var(--secondary-color);
  }

  .actions {
      display: flex;
      flex-direction: column;
      gap: 5px;
      ${mobile({flexDirection: 'row', marginBottom: '15px'})}
  }

  .actions button {
      padding: 3px 5px;
  }

  .actions .remove-btn {
      background: tomato;
      color: white;
      text-transform: capitalize;
  }

  .actions .one-btn{
      background: black;
      color: white;
      text-transform: capitalize;
  }
`;
