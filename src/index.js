import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './globalStyles';
import 'normalize.css'
import Provider from './context/provider';

ReactDOM.render(
  <>
    <Provider>
        <GlobalStyles />
        <App />
    </Provider>
  </>,
  document.getElementById('root')
);



