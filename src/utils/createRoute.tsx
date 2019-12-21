import React, { lazy, ReactNode } from 'react';
import { RouteProps, Route } from 'react-router-dom';

type RouteSettings = Omit<
  Omit<Omit<RouteProps, 'component'>, 'children'>,
  'render'
>;

type CreateRouteInput = RouteSettings & {
  factory: () => Promise<{ readonly default: () => any }>;
};

type Route = ReactNode;

export const createRoute = ({ factory, ...route }: CreateRouteInput): Route => {
  const Component = lazy(factory);

  return (
    <Route key={route.path} {...route}>
      <Component />
    </Route>
  );
};
