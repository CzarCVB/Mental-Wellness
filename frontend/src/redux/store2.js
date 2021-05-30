import { configureStore } from "@reduxjs/toolkit";

import postSlice from './post-slice';
import searchSlice from "./search-slice";

const store2 = configureStore({
  reducer: { post: postSlice.reducer, search: searchSlice.reducer},
});

export default store2;
