import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/Fonts.css';
import App from './view/App/App';
import { Provider } from "react-redux";
import store, {persistor} from "../src/redux/store";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
     <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
             <App />
         </PersistGate>
     </Provider>,
  document.getElementById('root')
);

