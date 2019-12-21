import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@model/configureStore';
import { routes } from '../../routes';

const store = configureStore();

export const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>{routes}</Switch>
      </Suspense>
    </Router>
  </Provider>
);
