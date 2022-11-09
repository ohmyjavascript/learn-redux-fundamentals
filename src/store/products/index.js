// Initial state object
const INITIAL_STATE = {
  products: [],
  isLoaded: false,
  isLoading: false,
};

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'products/LOAD_PRODUCTS_INIT':
      return {
        ...state,
        isLoading: true,
      };
    case 'products/LOAD_PRODUCTS':
      const sliced = action.payload.slice(0, 8);
      return {
        ...state,
        products: sliced,
        isLoaded: true,
        isLoading: false,
      };

    case 'product/ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case 'favorites/ADD_FAVORITE':
      return {
        ...state,
        products: state.products.map((prod) => {
          return prod.id === action.payload
            ? {
                ...prod,
                isFavorite: !prod.isFavorite,
              }
            : prod;
        }),
      };
    default:
      return state;
  }
}

export default productsReducer;
