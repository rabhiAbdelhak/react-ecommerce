import { LOAD_PRODUCTS, ENABLE_GRID_VIEW, DISABLE_GRID_VIEW } from "../Utilities/actions"

const filter_reducer = (state, action) => {
    switch(action.type){
        case LOAD_PRODUCTS:
            return {...state, filtered_products : action.payload, all_products: action.payload}
        case ENABLE_GRID_VIEW:
            return {...state, grid_view: true}
        case DISABLE_GRID_VIEW:
            return {...state, grid_view: false}
        default : throw new Error('Thers is no action that match !')
    }
}

export default filter_reducer;