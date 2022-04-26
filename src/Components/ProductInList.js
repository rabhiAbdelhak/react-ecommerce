import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus, FaImages } from "react-icons/fa";

//local imports
import { formatPrice } from "../Utilities/helpers";

const ProductInList = ({ id, name, description, image, price }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <Wrapper className="product">
      <div className="image-holder ">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h2 className="name">{name}</h2>
        <span className="price">{formatPrice(price)}</span>
        <p className="description">
          {seeMore ? description : description.slice(0, 180) + "..."}
          <span
            className="toggle-text-btn"
            onClick={() => setSeeMore((prev) => !prev)}
          >
            {seeMore ? " See Less" : " See More..."}
          </span>
        </p>
        <div className="actions">
          <button className="action-btn">
            <FaCartPlus />
          </button>
          <Link className="btn action-btn" to={`/products/${id}`}>
            <FaSearch />
          </Link>
          <button className="action-btn">
            <FaImages />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductInList;

const Wrapper = styled.article`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--very-light-color);

  .image-holder {
    width: 180px;
    height: 200px;
    margin-right: 20px;
    border-radius: 5px;
    overflow: hidden;
  }

  .image-holder img {
    height: 100%;
    width: 100%;
  }

  .info {
    flex: 1;
  }

  .name {
    text-transform: capitalize;
    color: var(--primary-color);
  }

  .price {
    color: var(--secondary-color);
    margin: 0;
    font-weight: bold;
  }

  .description {
    color: var(--neutral-light);
    font-size: 14px;
    margin: 10px 0;
    width: 100%;
    font-weight: bold;
  }

  .toggle-text-btn {
    color: var(--secondary-color);
    cursor: pointer;
    font-size: 13px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .action-btn {
    padding: 0;
    height: 30px;
    width: 30px;
    background: transparent;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    color: var(--primary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
`;
