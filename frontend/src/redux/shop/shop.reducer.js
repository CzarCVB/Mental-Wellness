import { ShopData } from "./shopdata";

const INIITIAL_STATE = {
  collections: ShopData,
};

const shopReducer = (state = INIITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
