import React, { useState } from "react";
import styled from "styled-components";
import { IoGrid } from "react-icons/io5";
import { IoIosListBox } from "react-icons/io";
import { FaSearch, FaFilter } from "react-icons/fa";

//local imports
import { useFilterContext } from "../contexts/filter_context";
import {
  middleScreen,
  mobile,
} from "../Utilities/Responsive";
import Filters from "./Filters";
import { useComponentContext } from "../contexts/component_context";

const Sort = () => {
  const {
    filtered_products: products,
    disableGridView,
    enableGridView,
    grid_view: gridView,
    UpdateSort,
    sort,
    filters: { text },
    updateFilters,
  } = useFilterContext();
  const {toggleFilters, showFilters} = useComponentContext()
  return (
    <Wrapper className="container">
      
      <div className="options">
        <div className="view-actions">
          <button
            className={`${gridView ? "active" : ""}`}
            onClick={enableGridView}
          >
            <IoGrid />
          </button>
          <button
            className={`${gridView ? "" : "active"}`}
            onClick={disableGridView}
          >
            <IoIosListBox />
          </button>
          <button className={`"toggle-filter" ${showFilters && 'active'}`}onClick={toggleFilters}>
            <FaFilter />
          </button>
        </div>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search..."
            name="text"
            value={text}
            onChange={updateFilters}
          />
          <button className="search-form-btn _flex_center">
            <FaSearch />
          </button>
        </form>

        <form>
          <div className="sort-actions">
            <select
              className="sort-actions-select"
              value={sort}
              onChange={UpdateSort}
            >
              <option value="name-a">Name(A-Z)</option>
              <option value="name-z">Name(Z-A)</option>
              <option value="price-lowest">Price(Lowest)</option>
              <option value="price-highest">Price(Highest)</option>
            </select>
          </div>
        </form>
      </div>
      <h4 className="product-counter">{products.length} products found</h4>
      <Filters />
    </Wrapper>
  );
};

export default Sort;

const Wrapper = styled.section`
  padding: 20px 0;

  .options {
    padding: 10px 0;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ flexWrap: "wrap" })}
  }
  
  .product-counter{
    color: var(--primary-color);
    opacity: 0.5;
  }
  .view-actions {
    display: flex;
    gap: 10px;
  }

  .view-actions button {
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

  .view-actions button.active {
    background-color: var(--secondary-color);
    color: var(--neutral-dark);
  }

  .view-actions .toggle-filter {
    display: none;
    ${middleScreen({ display: "block" })};
  }

  .search-form {
    height: 25px;
    flex: 1;
    display: flex;
    margin: 0 10px;
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
    ${mobile({ order: 4, width: "100%", margin: "5px 0" })}
  }

  .search-form input {
    flex: 1;
    height: 100%;
    border-radius: 5px;
    border: none;
    padding: 1px 5px;
    background: transparent;
  }

  .search-form input:focus {
    outline: none;
  }
  .search-form .search-form-btn {
    background: transparent;
    color: var(--secondary-color);
    padding: 5px;
  }
  .sort-actions-select {
    height: 25px;
    color: var(--secondary-color);
    font-weight: bold;
    border-radius: 5px;
  }

  .sort-actions-select:focus {
    outline: none;
  }
`;
