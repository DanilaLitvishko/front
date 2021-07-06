import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
=======
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
>>>>>>> added popup and autocomplete
  document.getElementById('root')
);

reportWebVitals();
