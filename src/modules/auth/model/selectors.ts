import {
  createRequestLoadingSelector,
  createRequestErrorSelector,
} from '@modules/services';
import { getType } from 'typesafe-actions';
import { signInAsync } from './actions';

export const getSignInLoading = createRequestLoadingSelector([
  getType(signInAsync.request),
]);

export const getSignInError = createRequestErrorSelector(
  getType(signInAsync.request)
);
