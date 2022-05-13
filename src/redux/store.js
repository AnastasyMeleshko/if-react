import { createStore } from "redux";
import rootReducer from "./rootReducer.js";
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const persistConfig = {
    key: 'root',
    storage: localStorage,
    whitelist: ['user'],
    blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store =  createStore(
    persistedReducer,
    composeEnhancer()
)

export const persistor = persistStore(store);

export default store;
