import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {siteReducer,marketReducer, orderReducer} from "./";

const rootReducer = combineReducers({
    site: siteReducer,
    market: marketReducer,
    order: orderReducer
});

const persistConfig = {
    key: "context",
    storage,
    blacklist: []
};
// middleware
const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

// creating store
export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => persistStore(store);

export const wrapper = createWrapper(makeStore);