import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
	name: "user",
	initialState: {
		id: undefined,
		phone: null,
		username: null,
		email: null,
		name: null,
		countryCode: null,
		localeCode: null,
		roles: [],
		updatedAt: null,
		createdAt: null,
		image: null,
		inActive: undefined,
		syncContact: undefined,
		nameSlug: null,
		countryId: null,
		isEmailVerified: undefined,
		deletedAt: null,
	},
	reducers: {
		
		setUser: (state, action) => {
			const user = {
				...action.payload,
			};
			state.id = user.id;
			state.phone = user.phone;
			state.username = user.username;
			state.countryCode = user.countryCode;
			state.localeCode = user.localeCode;
			state.roles = user.roles;
			state.updatedAt = user.updatedAt;
			state.createdAt = user.createdAt;
			state.image = user.image;
			state.inActive = user.inActive;
			state.syncContact = user.syncContact;
			state.nameSlug = user.nameSlug;
			state.countryId = user.countryId;
			state.isEmailVerified = user.isEmailVerified;
			state.deletedAt = user.deletedAt;
		},
		setLoggedUser: (state, action) => {
			const loggedUser = {
				...action.payload,
			};
			state.phone = loggedUser.phone;
			state.username = loggedUser.username;
			state.email = loggedUser.email;
			state.name = loggedUser.name;
			state.countryCode = loggedUser.countryCode;
			state.localeCode = loggedUser.localeCode;
			state.roles = loggedUser.roles;
			state.updatedAt = loggedUser.updatedAt;
			state.createdAt = loggedUser.createdAt;
			state.image = loggedUser.image;
			state.inActive = loggedUser.inActive;
			state.syncContact = loggedUser.syncContact;
			state.nameSlug = loggedUser.nameSlug;
			state.countryId = loggedUser.countryId;
			state.isEmailVerified = loggedUser.isEmailVerified;
			state.deletedAt = loggedUser.deletedAt;

			// console.log("loggedUser", loggedUser);
		},
		setProfile: (state, action) => {
			state.image = action.payload.image;
		},
	},
});

export const { setLoggedUser, setUser, setProfile } =
	userSlice.actions;
export default userSlice.reducer;
