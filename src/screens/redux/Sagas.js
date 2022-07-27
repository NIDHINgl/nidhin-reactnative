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
    const data = yield call(fetchCategoriesApi);
    console.log('sfsdfsdfcategories11',data)
    yield put(Actions.setProductsState({categories:data}));
    
  } catch (e) {
    alert('er')
    yield put(Actions.setProductsState({categories: []}));
  }
}

function* fetchProducts() {
  try {
    const data = yield call(fetchProductsApi);
    if (data?.length > 0) {
      yield put(Actions.setProductsState({products:data}));
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
    console.log('fetchProductsDetailsApi',data,id)
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


function* addProduct() {
  try {
   
  } catch (e) {
    yield put(
      Actions.setRecentDeals({recentDeals: [], recentDealsLoading: false}),
    );
  }
}


// export default [takeLatest(constants.SIGNUP, handleSignUp)];
export default [
  takeLatest(ModuleEvents.FETCH_CATEGORIES, fetchCategories),
  takeLatest(ModuleEvents.FETCH_PRODUCTS, fetchProducts),
  takeLatest(ModuleEvents.FETCH_PRODUCT_DETAILS, fetchProductDetails),
  takeLatest(ModuleEvents.ADD_PRODUCT, addProduct),
];
