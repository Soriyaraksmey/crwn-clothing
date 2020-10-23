import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import Cartreducer from "./cart/cart.reducer";
import directoryreducer from "../redux/directory/directory.reducer";
import Shopreducer from "../redux/shop/shop.reducer";

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["cart"]
}

const rootReducer = combineReducers({
  user: userReducer,
  directory: directoryreducer,
  cart: Cartreducer,
  shop: Shopreducer
});

export default  persistReducer(persistConfig,rootReducer);