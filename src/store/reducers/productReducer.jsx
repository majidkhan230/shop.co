const intialState = {
  products: [],
  addtocart: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "allproduct":
      return {...state,products:[...payload] };
    case "addtocart":
      return { ...state, addtocart: [...state.addtocart, payload] };
    case "deleteproduct":
      return {
        ...state,
        addtocart: state.addtocart.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};
