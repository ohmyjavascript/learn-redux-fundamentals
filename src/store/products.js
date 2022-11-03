import { v4 as uuidv4 } from 'uuid';

// Initial state object
const INITIAL_STATE = {
  products: [],
};

const PRODUCTS = [
  {
    id: uuidv4(),
    text: 'iPhone',
    isFavorite: true,
    category: 'Mobile',
    price: 1900,
  },
  {
    id: uuidv4(),
    text: 'Macbook Pro',
    isFavorite: false,
    category: 'Laptop',
    price: 2900,
  },
  {
    id: uuidv4(),
    text: 'Peter England',
    isFavorite: false,
    category: 'Clothing',
    price: 299,
  },
];

function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'products/LOAD_PRODUCTS':
      return {
        ...state,
        products: [...PRODUCTS],
      };
    default:
      return state;
  }
}

export default productsReducer;
