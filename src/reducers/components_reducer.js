import {CLOSE_ADD_TO_CART, OPEN_ADD_TO_CART} from '../Utilities/actions';

export const component_reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, showSidebar: true };
    case "CLOSE_SIDEBAR":
      return { ...state, showSidebar: false };
    case "OPEN_THEME_CONTAINER":
      return { ...state, showThemeContainer: true };
    case "CLOSE_THEME_CONTAINER":
      return { ...state, showThemeContainer: false };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case 'TOGGLE_FILTERS':
      return {...state, showFilters : !state.showFilters}
    case "OPEN_MODAL":
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    case OPEN_ADD_TO_CART:
      const {left, top} = action.payload;
      console.log(left, top)
      return {...state, AddToCartPosition : {left, top}}
    case CLOSE_ADD_TO_CART :
      return {...state, AddToCartPosition : {left: '0' , top: '0'}}
    default:
      return state;
  }
};
