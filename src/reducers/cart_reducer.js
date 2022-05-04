import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CALCULATE_TOTALS,
  UPDATE_AMOUNT,
} from "../Utilities/actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    //add an item
    case ADD_TO_CART:
      const {
        payload: { id, color, amount, product },
      } = action;
      const existing_product = state.cart.find(
        (item) => item.id === id + color
      );
      if (existing_product) {
        const newAmount = existing_product.amount + amount;
        return {
          ...state,
          cart: [
            ...state.cart.filter((item) => item.id !== id + color),
            {
              ...existing_product,
              amount:
                newAmount <= existing_product.stock
                  ? newAmount
                  : existing_product.stock,
            },
          ],
        };
      } else {
        const newProduct = {
          id: id + color,
          name: product.name,
          price: product.price,
          image: product.images[0].url,
          amount,
          color,
          stock: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, newProduct],
        };
      }

    //end add item

    //update Amount
    case UPDATE_AMOUNT:
      const { id: cur_id, value } = action.payload;
      const cur_product = state.cart.find((item) => item.id === cur_id);
      const tempCart = state.cart.map((product) => {
        if (product.id === cur_id) {
          return {
            ...product,
            amount:
              value <= cur_product.stock && value > 0
                ? value
                : value < 1
                ? 1
                : cur_product.stock,
          };
        } else {
          return product;
        }
      });
      return {
        ...state,
        cart: tempCart,
      };
    //end update amount

    //remove an item
    case REMOVE_FROM_CART:
      const { payload: removed_id } = action;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== removed_id),
      };
    //end remove item

    //calculate totals
    case CALCULATE_TOTALS:
      const { totalPrice, totalItems } = state.cart.reduce(
        (accu, item) => {
          return {
            totalPrice: accu.totalPrice + item.price * item.amount,
            totalItems: accu.totalItems + item.amount,
          };
        },
        { totalPrice: 0, totalItems: 0 }
      );

      return { ...state, total_price: totalPrice, total_items: totalItems };
    case CLEAR_CART:
      return { ...state, cart: [], total_price: 0, total_items: 0 };
    default:
      throw new Error("this action dosen't match any of the actions above");
  }
};

export default cart_reducer;
