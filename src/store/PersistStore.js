import rootReducer from '../reducers/cartReducer'
import {persistStore,persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { createStore } from 'redux';
const persistConfig={
    key:'root',
    storage,
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=createStore(persistedReducer)
let persistor=persistStore(store)
export default store;
