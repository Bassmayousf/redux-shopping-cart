import { ADD_PRODUCTS, ADD_QUANTITY, REMOVE_QUANTITY } from "./ActionTypes";

const initialState = [
  {
    category: "shose",
    id: 1,
    name: "halfboot",
    price: 990,
    productId: 1,
    quantity: 4,
    url: "https://i.pinimg.com/564x/a1/be/77/a1be773b806ee59872294a14b3e8851b.jpg",
  },
  {
    category: "cloth",
    id: 2,
    name: "jacket",
    price: 800,
    productId: 2,
    quantity: 7,
    url: "https://i.pinimg.com/564x/20/8d/c5/208dc5a5f09ca0790b44716639dbe928.jpg",
  },
];
const nextId = (state) => {
  return state.reduce((id, state) => Math.max(id, state.id), -1) + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [
        ...state,
        {
          id: nextId(state),
          ...action.payload,
          price: parseFloat(action.payload.price),
          quantity: parseFloat(action.payload.quantity),
        },
      ];
    case ADD_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        } else {
          return product;
        }
      });
    case REMOVE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });

    default:
      return state;
  }
};
export default productReducer;
