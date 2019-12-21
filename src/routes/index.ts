import { createRoute } from '@utils/createRoute';
import * as auth from '@modules/auth';

export const routes = [
  createRoute({ factory: auth.pages.Login, path: '/', exact: true }),
];
