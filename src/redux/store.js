import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer.js";
import initialState from "./initialState";
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import {createLogger} from 'redux-logger';

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const middlewares = [sagaMiddleware, logger];
const enhancers = [devToolsExtension()];


const composedEnhencers = compose(
    applyMiddleware(...middlewares),
    ...enhancers,
);

const persistConfig = {
    key: 'root',
    storage: localStorage,
    blacklist: [],
    whitelist: ["user"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, initialState, composedEnhencers);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;
