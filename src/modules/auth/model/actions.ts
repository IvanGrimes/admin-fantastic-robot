import { createAsyncAction } from 'typesafe-actions';
import { SignInInput } from './services';

export const signInAsync = createAsyncAction(
  'auth/SIGN_IN_REQUEST',
  'auth/SIGN_IN_SUCCESS',
  'auth/SIGN_IN_FAIL'
)<SignInInput, any, any>();
