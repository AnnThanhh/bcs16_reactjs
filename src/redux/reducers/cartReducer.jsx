//rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartDefault: [
    {
      id: 1,
      name: "product 1",
      price: 1000,
      quantityCart: 2,
      image: "https://picsum.photos/200/300",
    },
  ],
};

const cartReducer = createSlice({
  name: "cartReducer", //tên reducer
  initialState, //giá trị default ban đầu
  reducers: {
    addProductAction: (state, action) => {
      const { type, payload } = action;
      const cartItem = state.cartDefault.find((item) => item.id == payload.id);
      if (cartItem) {
        cartItem.quantityCart += 1;
      } else {
        state.cartDefault.push(payload);
      }
      //tự động xử lý immutable
    },
    deleteProductionAction: (state, action) => {
      const { payload } = action;

      state.cartDefault = state.cartDefault.filter(
        (item) => item.id !== payload
      );
    },

    changeQuantityCartAction: (state, action) => {
      const { payload } = action;

      let itemCart = state.cartDefault.find((item) => item.id === payload.id);
      if (itemCart) {
        itemCart.quantityCart += payload.quantity;
      }
    },
  }, // hàm xử lý action
});

export const {
  addProductAction,
  deleteProductionAction,
  changeQuantityCartAction,
} = cartReducer.actions; //bóc tách hàm xử lý action

export default cartReducer.reducer;
