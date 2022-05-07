import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus , FaImages} from "react-icons/fa";

//local imports
import { formatPrice } from "../Utilities/helpers";
import { useComponentContext } from "../contexts/component_context";
import { useProductsContext } from "../contexts/products_context";

const Product = ({ id, name, price, image }) => {
  const {openModal, openAddToCart} = useComponentContext();
  const {fetchSingleProduct} = useProductsContext()

  const getSlider = () => {
    fetchSingleProduct(id);
    openModal();
  }

  return (
    <Wrapper>
      <img src={image} alt={name} />
      <div className="info">
        <p className="name">{name}</p>
        <span className="price">{formatPrice(price)}</span>
      </div>
      <div className="actions _flex_center">
        <button 
             className="actions-btn _flex_center"
             onClick={(e) => openAddToCart(e, id)}
             >
          <FaCartPlus />
        </button>
        <Link className="actions-btn _flex_center" to={"/products/" + id}>
          <FaSearch />
        </Link>
        <button className='actions-btn _flex_center' onClick={getSlider}><FaImages/></button>
      </div>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.article`
  position: relative;
  border-radius: var(--radius);
  height: 250px;
  overflow: hidden;
  cursor: pointer;

  .actions {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: rgb(0 0 0 / 0.5);
    gap: 30px;
    opacity: 0;
    transition: var(--transition);
  }
  :hover .actions {
    opacity: 1;
  }
  .actions .actions-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--very-light-color);
    color: var(--secondary-color);
    font-size: 16px;
    font-weight: 200;
    transition: var(--transition);
  }

  .actions > .actions-btn:hover {
    transform: scale(1.3);
    opacity: 0.7;
  }

  .actions > .actions-btn:hover:active{
    transform: scale(2);
    opacity: 0;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--neutral-dark);
    width: 100%;
    height: 50px;
    padding: 10px;
  }

  .info .name {
    letter-spacing: 2px;
    color: var(--primary-color);
    text-transform: capitalize;
    font-weight: 400;
    font-size: 17px;
    line-height: 1.2;
  }

  .info .price {
    color: var(--secondary-color);
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  img {
    height: 250px;
    width: 100%;
    border-radius: var(--radius);
  }
`;
