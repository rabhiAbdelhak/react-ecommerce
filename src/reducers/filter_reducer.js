import {
  LOAD_PRODUCTS,
  ENABLE_GRID_VIEW,
  DISABLE_GRID_VIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  CLEAR_FILTERS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from "../Utilities/actions";
import { intersect } from "../Utilities/helpers";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      const prices = action.payload.map((p) => p.price);
      const maxPrice = Math.max(...prices);
      const minPrice = Math.min(...prices);
      return {
        ...state,
        filtered_products: action.payload,
        all_products: action.payload,
        filters: {
          ...state.filters,
          prices: { ...state.prices, max_price: maxPrice, min_price: minPrice },
        },
      };
    case ENABLE_GRID_VIEW:
      return { ...state, grid_view: true };
    case DISABLE_GRID_VIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    //sort products
    case SORT_PRODUCTS:
      const { filtered_products, sort: order } = state;
      let temp_filtered_products = [...filtered_products];
      //sort from a to z
      if (order === "name-a") {
        temp_filtered_products = filtered_products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      //sort from z to a
      if (order === "name-z") {
        temp_filtered_products = state.filtered_products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      // sort from lowest to highest price
      if (order === "price-lowest") {
        temp_filtered_products = state.filtered_products.sort(
          (a, b) => a.price - b.price
        );
      }

      //sort from highest to lowest price
      if (order === "price-highest") {
        temp_filtered_products = state.filtered_products.sort(
          (a, b) => b.price - a.price
        );
      }
      return { ...state, filtered_products: temp_filtered_products };
    //end sort products

    //start update filters
    case UPDATE_FILTERS:
      const { name, value, checked } = action.payload;

      //update categories, colors and companies
      if (name === "categories" || name === "companies" || name === "colors") {
        if (checked) {
          return {
            ...state,
            filters: {
              ...state.filters,
              [name]: [...state.filters[name], value],
            },
          };
        } else {
          return {
            ...state,
            filters: {
              ...state.filters,
              [name]: state.filters[name].filter((item) => item !== value),
            },
          };
        }
      }
      //update shipping
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: checked !== null ? checked : value,
        },
      };

      return state;
    //end update filters

    //start products filter
    case FILTER_PRODUCTS:
      const { text, categories, companies, colors, shipping } = state.filters;
      let temp_products = state.all_products;
      //text filter
      if (text.length > 0) {
        temp_products = temp_products.filter((pr) => pr.name.includes(text));
      }
      //categories
      if (categories.length > 0) {
        temp_products = temp_products.filter((pr) =>
          categories.includes(pr.category)
        );
      }

      //companies
      if (companies.length > 0) {
        temp_products = temp_products.filter((pr) =>
          companies.includes(pr.company)
        );
      }

      //colors
      if (colors.length > 0) {
        temp_products = temp_products.filter((pr) =>
          intersect(pr.colors, colors)
        );
      }

      //shipping
      if (shipping) {
        temp_products = temp_products.filter((pr) => pr.shipping);
      }
      return { ...state, filtered_products: temp_products };
    //end products filter

    //clear filter
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          text: "",
          categories: [],
          companies: [],
          colors: [],
          prices: {
            min_price: 0,
            max_price: 0,
            price: 0,
          },
          shipping: false,
        },
      };
    default:
      throw new Error("Thers is no action that match !");
  }
};

export default filter_reducer;
