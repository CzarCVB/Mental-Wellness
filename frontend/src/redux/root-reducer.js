import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   whiteList: ["cart"],
// };
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
// export default persistReducer(persistConfig, rootReducer);
