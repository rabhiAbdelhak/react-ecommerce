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
    default:
      return state;
  }
};
