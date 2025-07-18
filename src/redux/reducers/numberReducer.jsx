export const numberReducer = (state = 1, action) => {
  //primitive value (string, number)
  if (action.type == "CHANGE_QUANTITY") {
    state += action.payload;
  }
  return state; //trả state mới
};
