export const ModuleEvents = {
    FETCH_CATEGORIES: 'FETCH_CATEGORIES',
    FETCH_PRODUCTS: 'FETCH_PRODUCTS',
    FETCH_PRODUCT_DETAILS: 'FETCH_PRODUCT_DETAILS',
    ADD_PRODUCT: 'ADD_PRODUCT',
    SET_CATEGORY_STATE: 'SET_CATEGORY_STATE',
    SET_PRODUCTS_STATE: 'SET_PRODUCTS_STATE',

  };
  const Actions = {
    fetchCategories: categories => ({
      type: ModuleEvents.FETCH_CATEGORIES,
      categories,
    }),
    fetchProducts: () => ({
      type: ModuleEvents.FETCH_PRODUCTS,
    }),
    fetchProductDetails: id => ({
      type: ModuleEvents.FETCH_PRODUCT_DETAILS,
      id,
    }),
    addProduct: () => ({
      type: ModuleEvents.ADD_PRODUCT,
    }),
    setProductsState: state => ({
        type: ModuleEvents.SET_PRODUCTS_STATE,
        state,
    }),
   
  };
  
  export default Actions;
  