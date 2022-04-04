import { createTheme } from "@material-ui/core";
import theme from "../";
const InputTheme = createTheme({
	overrides: {
		type: "dark",
		MuiInputBase: {
			root: {
				"background": "white",
				"borderRadius": "15px",
				"padding": theme.spacing(2),
				"border": "2px #222225 solid",
				"margin": "1.5vh 0",
				"fontSize": "20px",
				"&$focused": {
					boderStyle: "inset",
					borderRadius: "15px",
					border: "2px rgb(255, 0, 116) solid",
					transition: "0.25s",
				},
			},
			inputMultiline: {
				padding: theme.spacing(2),
			},
		},
		MuiButton: {
			text: {
				border: "2px black solid",
				borderRadius: 10,
				margin: "1.5vh 0",
				color: "black",
				fontFamily: "Montserrat",
				fontWeight: "bold",
				textTransform: "none",
				width: "180px",
				height: "50px",
			},
		},
	},
});
export default InputTheme;
