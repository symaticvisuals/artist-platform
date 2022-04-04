import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState: {
    isLoggedIn: false,
    formStatus: 0,
    jwt: null,
    newuser: 0,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      Cookies.remove("jwt");
      Cookies.remove("user");
      state.isLoggedIn = false;
      state.jwt = null;
    },
    setForm: (state) => {
      state.formStatus = 1;
    },
    setFormLogin: (state) => {
      state.formStatus = 0;
    },
    setJwt: (state, action) => {
      state.jwt = action.payload;
    },
    setNewUser: (state) => {
      state.newuser = 1;
    },
  },
});
export const { login, logout, setForm, setFormLogin, setJwt } =
  loginStatusSlice.actions;
export default loginStatusSlice.reducer;
