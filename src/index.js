import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import SearchPage from './components/searchPage';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import { render } from 'react-dom';
import Header from './components/common/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Header />
    <SearchPage />
  </ReduxProvider>,
  document.getElementById('app')
);
