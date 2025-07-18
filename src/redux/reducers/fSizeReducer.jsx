export const fSizeReducer = (state = 17, action) => {
  if (action.type == "CHANGE_FONTSIZE") {
    state += action.payload;
  }
  return state; //trả state mới - immutable -> tính bất biến
};
