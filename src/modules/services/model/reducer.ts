import { combineReducers } from 'redux';
import { loading } from './reducers/loading';
import { errors } from './reducers/errors';

// @ts-ignore
export const reducer = combineReducers({
  loading,
  errors,
});
