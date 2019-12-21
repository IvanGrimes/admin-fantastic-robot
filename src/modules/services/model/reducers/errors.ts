import { RootAction } from '@model/types';
import { parseRequestType } from '../../utils/parseRequestType';

export type ErrorsState = {
  [key: string]: {
    appError?: string;
    serverError?: string;
    networkError?: string;
  };
};

const initialState: ErrorsState = {};

export const errors = (state = initialState, { type, payload }: RootAction) => {
  const matches = parseRequestType(type);

  if (matches) {
    const [requestName, requestState] = matches;

    if (requestState === 'REQUEST' || requestState === 'FAIL') {
      return {
        ...state,
        [requestName]: requestState === 'FAIL' ? { networkError: payload } : {},
      };
    }

    return state;
  }

  return state;
};
