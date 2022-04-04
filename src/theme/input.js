import { createTheme } from "@material-ui/core";
import theme from ".";
const searchTheme = createTheme({
	overrides: {
		type: "dark",
		MuiInputBase: {
			root: {
				"background": "#1D1E22",
				"borderRadius": "10px",
				"padding": theme.spacing(1),
				"paddingLeft": "2vw",
				"color": "white",
				// "fontSize": "25px",
				"&$focused": {
					boderStyle: "inset",
					transition: "0.25s",
					background: "#17181B",
				},
			},
		},
	},
});
export default searchTheme;
