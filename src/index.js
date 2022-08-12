import React from 'react';
import ReactDOM from 'react-dom/client';
// import Routes from './routes';
import { Provider } from 'react-redux';
import store from  './store';
import './index.css';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <Routes/> */}
    <App />
  </Provider>
);


