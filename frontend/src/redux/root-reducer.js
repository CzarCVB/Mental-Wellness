import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postSlice from './post-slice';

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};
const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
  post: postSlice.reducer,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
