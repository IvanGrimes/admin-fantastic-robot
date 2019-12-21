import { service } from '@modules/services';

export type SignInInput = { userName: string; password: string };

export const signIn = () => service('/').then(({ data }) => data);
