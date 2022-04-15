import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './src/app';
import store, { history } from './src/store/index';

import 'antd/dist/antd.css';
import { ConnectedRouter } from 'connected-react-router';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
);
