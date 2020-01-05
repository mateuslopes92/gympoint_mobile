import { Alert } from 'react-native';
import { takeLatest, all, put, call } from 'redux-saga/effects';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {
    const { studentId } = payload;

    const response = yield call(api.get, `/students/${studentId}`);

    console.tron.log(response.data);
    const { token, student } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    Alert.alert('Deu certo', 'Deu certo');

    yield put(signInSuccess(token, student));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
]);
