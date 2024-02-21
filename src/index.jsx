import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';

import { Provider } from 'react-redux';
import giphyStore from './redux/store.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={giphyStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
