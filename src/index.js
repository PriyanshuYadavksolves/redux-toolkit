import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import accountReducer from './slices/accountSlice'
import bonusReducer from './slices/bonusSlice'

const store = configureStore({
  reducer : {
    account : accountReducer,
    bonus : bonusReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
  </Provider>
  </React.StrictMode>
);

reportWebVitals();