import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  hasError: false,
  pageNumber: 0,
};

// const getRandomUser = createAction('getRandomUser')
// takeEvery(getRandomUser().type)
const randomUserSlice = createSlice({
  name: "randomUser",
  initialState: initialState,
  reducers: {
    requestRandomUser(state) {
      state.isLoading = true;
    },
    requestRandomUserSuccess(state, action) {
      state.users.push(...action.payload);
      state.pageNumber++;
      state.isLoading = false;
    },
    requestRandomUserFailure(state) {
      state.users = [];
      state.isLoading = false;
      state.hasError = true;
    },
    removeUser(state, action){
        state.users.splice(action.payload, 1)
        state.pageNumber--
    },
  },
});

export const { requestRandomUser, requestRandomUserSuccess, requestRandomUserFailure, removeUser} = randomUserSlice.actions;

export default randomUserSlice.reducer;
