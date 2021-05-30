import { createSlice } from "@reduxjs/toolkit";
import { questions } from "../asset/data/data";



const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        filteredArr: []
    },
    reducers: {
        makeQuery (state, action) {
          state.query = action.payload
        },
        makeArray (state) {
          if (state.query === "")
          {
            state.filteredArr = questions;
          }
          else
          {
            state.filteredArr = questions.filter((item) => item.q.toLowerCase().includes(state.query.toLowerCase()));
          }
        }
    },
  });
  
  export const searchActions = searchSlice.actions;
  
  export default searchSlice;