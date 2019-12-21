import * as services from '@modules/services';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  services: services.reducer,
});
