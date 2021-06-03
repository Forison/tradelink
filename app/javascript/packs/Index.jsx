import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import { PersistGate } from 'redux-persist/integration/react';
import { initialState } from '../redux/constant';
import rootReducer from '../redux/reducer/index';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, initialState, applyMiddleware(thunk));
const persistor = persistStore(store);



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </PersistGate>
   </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

