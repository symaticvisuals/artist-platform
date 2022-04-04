import { createTheme } from "@material-ui/core";
// import theme from ".";
const userProfileInput = createTheme({
	palette: {
		secondary: {
			main: "#FF454D",
			dark: "#FF4540",
		},
	},
	overrides: {
		type: "dark",
		MuiInputBase: {
			root: {
				"borderRadius": "10px",
				"outlineColor": "white",
				"background": "#0E0E0E",
				"color": "white",
				"::-webkit-input-placeholder": { color: "red" },
				"&$focused": {
					boderStyle: "inset",
					// border: "2px rgb(255, 0, 116) solid",
					transition: "0.25s",
				},
			},
		},
	},
});
export default userProfileInput;
