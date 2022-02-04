import {createStore} from "redux";
import rootReducer from "../reducers/cartReducer";

const store=createStore(rootReducer)

export default store;