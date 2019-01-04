import * as React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const Root: React.FunctionComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
