import {ModuleEvents} from './Actions';

const INITIAL_STATE = {
  categories: [],
  products: [],
  productDetails:[],
  productDetailsLoading:true,

};
const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   
    case ModuleEvents.SET_PRODUCTS_STATE: {
      return {
        ...state,
        ...action.state,
      };
    }
    case ModuleEvents.FETCH_PRODUCT_DETAILS: {
      return {
        ...state,
        productDetailsLoading: true,
      };
    }

  }

  return state;
};

export default products;
