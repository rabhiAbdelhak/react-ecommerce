import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";

//local imports.
import { useProductsContext } from "../contexts/products_context";
import { useCartContext } from "../contexts/cart_context";

const ProductActions = () => {
  const {
    single_product: product,
  } = useProductsContext();
  const {id, name, price, colors, stock } = product;
  const [amount, setAmount] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const {cart, addToCart} = useCartContext();

  const checkAmount = (number) => {
    if (number <= 1) return 1;
    if (number >= stock) return stock;
    return number;
  };

  const increase = () => {
    setAmount((prevamount) => checkAmount(prevamount + 1));
  };

  const decrease = () => {
    setAmount((prevamount) => checkAmount(prevamount - 1));
  };
  return (
    <Wrapper>
      <div className="actions-amount">
        <button className="actions-amount-btn _flex_center" onClick={decrease}>
          <AiOutlineLeft />
        </button>
        <span className="actions-amount-count">{amount}</span>
        <button className="actions-amount-btn _flex_center" onClick={increase}>
          <AiOutlineRight />
        </button>
      </div>
      <div className="actions-colors">
        {colors.map((color, index) => {
          return (
            <Color
              className='_flex_center'
              key={index}
              color={color}
              selected = {selectedColor === color }
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color ? <MdOutlineDownloadDone /> : null}
            </Color>
          );
        })}
      </div>
      <button className="actions-btn" onClick={() => addToCart({id, color: selectedColor, amount , product})}>Add to Cart</button>
    </Wrapper>
  );
};

export default ProductActions;

const Wrapper = styled.div`
  background: var(--very-light-color);
  border-top: 1px solid var(--secondary-color);
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  
  .actions-amount {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .actions-amount-btn {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: var(--neutral-light);
    color: var(--secondary-color);
  }

  .actions-amount-count {
    font-weight: bold;
    color: var(--secondary-color);
    font-size: 18px;
  }

  .actions-colors {
    display: flex;
    gap: 7px;
  }
  .actions-btn {
    padding: 8px;
    background: var(--secondary-color);
    color: var(--primary-color);
  }
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: var(--radius);
  background: ${(props) => props.color};
  cursor: pointer;
  color: white;
  opacity: ${props => props.selected ? '1' : '0.6'};
  
  :hover {
    opacity: 1;
  }
`;
