import { RootAction } from '@model/types';
import { parseRequestType } from '../../utils/parseRequestType';

type LoadingState = {
  [key: string]: boolean;
};

const initialState: LoadingState = {};

export const loading = (state = initialState, { type }: RootAction) => {
  const matches = parseRequestType(type);

  if (matches) {
    const [requestName, requestState] = matches;

    return {
      ...state,
      [requestName]: requestState === 'REQUEST',
    };
  }

  return state;
};
