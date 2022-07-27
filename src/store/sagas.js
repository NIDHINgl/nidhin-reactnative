import {all} from 'redux-saga/effects';
import productSagas from '../screens/redux/Sagas';

export default function* rootSaga() {
  const sagas = [
    ...productSagas,
  ];
  yield all(sagas);
}
