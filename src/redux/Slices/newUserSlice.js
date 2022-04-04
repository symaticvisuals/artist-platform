import { createSlice } from "@reduxjs/toolkit";

const newUserSlice = createSlice({
    name: "newUser",
    initialState: {
        email: null,
        name: null,
        isVerified: false,
    },
    reducers: {
        setNewUser: (state, action) => {
            const newUser = {
                ...action.payload,
            };
            state.email = newUser.email;
            state.name = newUser.name;
        }
    }
});
export const {setNewUser} = newUserSlice.actions;
export default newUserSlice.reducer;