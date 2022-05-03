import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/Fonts.css';
import App from './view/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "../src/redux/store";

ReactDOM.render(
     <Provider store={store}>
         <App />
     </Provider>,
  document.getElementById('root')
);

reportWebVitals();
