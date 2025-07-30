import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/interceptor";
const initialState = {
  arrProduct: [], // state product
  prodDetail: {
    
  }, // state product detail
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setProductionAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductDetailAction: (state, action) => {
      state.prodDetail = action.payload;
    },
  },
});

export const { setProductionAction, setProductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;

//----action thunk----
export const getAllProductApiActionThunk = () => {
  return async (dispatch) => {
    //    if(keywork){
    //      //cho phép thực thi logic api
    //      const res = await http.get(`/api/Product?keyword=${keyword}`);
    //      //sau khi thực thi logic api xong thì có được dữ liệu -> đưa lên trên store
    //      const actionPayload = setProductionAction(res.data.content);
    //      dispatch(actionPayload);
    //    }

    //cho phép thực thi logic api
    const res = await http.get(`/api/Product`);
    //sau khi thực thi logic api xong thì có được dữ liệu -> đưa lên trên store
    const actionPayload = setProductionAction(res.data.content);
    dispatch(actionPayload);
  };
};

export const getProductDetailByIDActionThunk = (id) => {
  return async (dispatch) => {
    const res = await http.get(`/api/Product/getbyid?id=${id}`);

    const action = setProductDetailAction(res.data.content);
    dispatch(action);
  };
};
