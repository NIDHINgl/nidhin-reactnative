import {put, call, takeLatest} from 'redux-saga/effects';
import {request} from '../../config/http';
import Actions, {ModuleEvents} from './Actions';

const fetchCategoriesApi = async () => {
  const response = await request.get('/categories');
  return response.data;
};

const fetchProductsApi = async () => {
  const response = await request.get('/products');

  return response.data;
};

const fetchProductsDetailsApi = async (id) => {
  const response = await request.get(`/products/${id}`);
  return response.data;
};

const addProductApi = async data => {
  const response = await request.post('/products', data);
  return response.data;
};

function* fetchCategories() {
  try {
    const {categories} = yield call(fetchCategoriesApi);
    yield put(Actions.setProductsState({categories}));
    
  } catch (e) {
    yield put(Actions.setProductsState({categories: []}));
  }
}

function* fetchProducts() {
  try {
    const {products} = yield call(fetchProductsApi);

    if (products?.length > 0) {
      yield put(Actions.setProductsState({products,allProducts:products}));
    } else {
      yield put(Actions.setProductsState({products: []}));
    }
  } catch (e) {
    yield put(Actions.setProductsState({products: []}));
  }
}

function* fetchProductDetails({id}) {
  try {
    const data = yield call(fetchProductsDetailsApi, id);
    if (data) {
      yield put(
        Actions.setProductsState({productDetails: data, productDetailsLoading: false}),
      );
    } else {

      yield put(
        Actions.setProductsState({productDetails: [], productDetailsLoading: false}),
      );
    }
  } catch (e) {
    yield put(
      Actions.setProductsState({productDetails: [], productDetailsLoading: false}),
    );
  }
}


function* addProduct({data,onResult}) {
  try {
    const result = yield call(addProductApi,data);
    if(result?.message == 'Success'){
      yield call(onResult,'Successfully created product', 'success');

    }else{
      yield call(onResult,'Failed to create product', 'failed');

    }

   
  } catch (e) {
    yield call(onResult,'Failed to create product', 'failed');

  }
}


// export default [takeLatest(constants.SIGNUP, handleSignUp)];
export default [
  takeLatest(ModuleEvents.FETCH_CATEGORIES, fetchCategories),
  takeLatest(ModuleEvents.FETCH_PRODUCTS, fetchProducts),
  takeLatest(ModuleEvents.FETCH_PRODUCT_DETAILS, fetchProductDetails),
  takeLatest(ModuleEvents.ADD_PRODUCT, addProduct),
];
