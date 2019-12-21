import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { signIn } from './services';
import { signInAsync } from './actions';

function* signInFlow() {
  try {
    yield call(signIn);

    yield put(signInAsync.success(undefined));
  } catch (e) {
    yield put(signInAsync.failure(e));
  }
}

export const saga = [takeLatest(getType(signInAsync.request), signInFlow)];
