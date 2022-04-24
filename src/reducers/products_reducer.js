export const reducer = (state, action) => {
    switch (action.type){
        case 'GET_PRODUTCS' : 
           return {...state, products : action.payload}
        case 'GET_FEATURED_PRODUCTS':
           return {...state, featured: action.payload}
        default: return state;
    }
    
}