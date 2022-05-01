import React, {useEffect, useRef } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

//local imports
import { useFilterContext } from "../contexts/filter_context";
import { formatPrice, uniqueValues } from "../Utilities/helpers";
import { useComponentContext } from "../contexts/component_context";

const Filters = () => {
  const containerRef = useRef();
  const formRef = useRef();
  const {
    all_products: products,
    updateCategoriesFilter,
    updateFilters,
    filters: { colors, categories, companies, shipping, max_price, min_price, price},
    clearFilters,
  } = useFilterContext();
  const {showFilters} = useComponentContext()

  const allCategories = uniqueValues(products, "category");
  const allCompanies =  uniqueValues(products, "company");
  const allColors =     uniqueValues(products, "colors");
  
  const changeContainerHeight = () => {
    const formHeight = formRef.current.getBoundingClientRect().height;
    if(showFilters){
      containerRef.current.style.height = (formHeight + 50)+'px';
    }
  }

  useEffect(() => {
    window.addEventListener('resize', changeContainerHeight)
    if(showFilters){
      const formHeight = formRef.current.getBoundingClientRect().height;
      containerRef.current.style.height = (formHeight + 50)+'px';
    }else{
      containerRef.current.style.height = '0px';
    }

    return () =>  window.removeEventListener('resize', changeContainerHeight);
  }, [showFilters]);

  return (
    <Wrapper show={showFilters} ref={containerRef}>
      <form className="filters-form" ref={formRef}>
        <section className="filters-form-section">
          <h3 className="filters-form-section-title">Categories : </h3>
          <div className="form-group-checkboxes">
            {allCategories.map((cat, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={cat + index}
                    name="categories"
                    value={cat}
                    checked={categories.includes(cat)}
                    onChange={updateFilters}
                  />
                  <label
                    htmlFor={cat + index}
                    className={`_flex_center label ${
                      categories.includes(cat) && "selected"
                    }`}
                  >
                    {cat}
                  </label>
                </div>
              );
            })}
          </div>
        </section>
        <section className="filters-form-section">
          <h3 className="filters-form-section-title">Companies</h3>
          <div className="form-group-checkboxes">
            {allCompanies.map((company, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={company + index}
                    name="companies"
                    value={company}
                    checked={companies.includes(company)}
                    onChange={updateFilters}
                  />
                  <label
                    htmlFor={company + index}
                    className={`_flex_center label ${
                      companies.includes(company) && "selected"
                    }`}
                  >
                    {company}
                  </label>
                </div>
              );
            })}
          </div>
        </section>
        {/*colors inputs*/}
        <section className="filters-form-section">
          <h3 className="filters-form-section-title">Colors : </h3>
          <div className="form-group-checkboxes colors">
            {allColors.map((color, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={color + index}
                    name="colors"
                    value={color}
                    checked={colors.includes(color)}
                    onChange={updateFilters}
                  />
                  <label
                    htmlFor={color + index}
                    className={`_flex_center color ${
                      colors.includes(color) && "selected"
                    }`}
                    style={{ background: color }}
                  >
                    {colors.includes(color) ? <FaCheck /> : null}
                  </label>
                </div>
              );
            })}
          </div>
        </section>
        {/*end colors inputs*/}

        {/*Shipping and price section */}
        <section className="filters-form-section">
          <h3 className="filters-form-section-title">Other filters : </h3>
          <div className="form-group">
            <input
              type="checkbox"
              checked={Boolean(shipping)}
              value={shipping}
              id="shipping"
              name="shipping"
              onChange={updateFilters}
            />
            <label htmlFor="shipping">Free Shipping</label>
          </div>
          <div className="form-group">
            <label>{formatPrice(price)}</label><br/>
            <input type='range' max={max_price} min={min_price} value={price} name='price' onChange={updateFilters} />
          </div>
        </section>
        {/* end of section */}
      </form>
      <button className="clear-filter-btn" onClick={clearFilters}>Clear Filter</button>
    </Wrapper>
  );
};

export default Filters;

const Wrapper = styled.section`
  flex: 1;
  width: 100%;
  order: 6;
  overflow: hidden;
  height:0;
  transition: var(--transition);
  border-bottom: 1px solid var(--secondary-color);

  .filters-form {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    gap: 30px;
  }

  .filters-form-section {
    flex: 1;
    min-width: 200px;
  }

  .filters-form-section-title {
    color: var(--secondary-color);
    font-weight: 400;
  }

  .form-group-checkboxes {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    justify-content: flex-start;
    padding: 10px 0;
  }

  .form-group-checkboxes .label {
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    margin: 2px;
    border-radius: var(--radius);
    cursor: pointer;
    height: 25px;
    font-size: 14px;
  }

  .form-group-checkboxes .label.selected {
    color: white;
    background-color: var(--secondary-color);
  }
  .form-group-checkboxes.colors {
    display: flex;
    flex-wrap: wrap;
  }

  .form-group-checkboxes .color {
    width: 20px;
    height: 20px;
    margin: 2px;
    border-radius: var(--radius);
    cursor: pointer;
    opacity: 0.4;
    color: white;
  }

  .form-group-checkboxes .color.selected {
    opacity: 1;
  }

  .form-group-checkboxes input[type="checkbox"] {
    display: none;
  }

  .form-group {
    padding: 10px 0;
  }

  .form-group input[type='checkbox']{
    margin-right: 10px;
  }
  
  .form-group label {
    color: var(--secondary-color);
  }

  .clear-filter-btn {
    background: tomato;
    color: white;
    padding: 5px 15px;
    display: block;
    margin: 10px 0;
  }
`;
