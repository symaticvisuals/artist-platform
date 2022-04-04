import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./Slices/loginStatusSlice";
import userReducer from "./Slices/userSlice";
import publishReducer from "./Slices/publishDetails";
import  newUserReducer from "./Slices/newUserSlice";
export default configureStore({
	reducer: {
		user: userReducer,
		loginStatus: loginStatusReducer,
		publish: publishReducer,
		newUser : newUserReducer,
	},
});
