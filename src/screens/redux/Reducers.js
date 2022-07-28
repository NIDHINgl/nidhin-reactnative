import {ModuleEvents} from './Actions';

const INITIAL_STATE = {
  categories: [],
  allProducts: [],
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
    case ModuleEvents.FILTER_PRODUCTS: {
        if(action.category == 'All'){
            return {
                ...state,
                products: state.allProducts,
              };
        }else{
            return {
                ...state,
                products: state.allProducts?.filter(item=>item?.category == action.category),
              };
        }
        
      }

  }

  return state;
};

export default products;
