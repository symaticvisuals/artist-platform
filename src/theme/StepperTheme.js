import { createTheme } from "@material-ui/core";

const StepperTheme = createTheme({
	props: {
		MuiSvgIcon: {
			color: "white",
		},
	},
	overrides: {
		// Style sheet name ⚛️
		MuiStepIcon: {
			root: {
				color: "#2D2D2D",
			},
			active: {
				fill: "#FF2B51",
				transition: "color 1s ease-in",
			},
			completed: {
				fill: "#FF493C",
				transition: "color 1s ease-in",
			},
		},
		MuiSvgIcon: {
			root: { fontSize: "35px", fontFamily: "Sora" },
		},
		MuiStepConnector: {
			lineHorizontal: {
				borderTopWidth: "2px",
				borderColor: "#FF2B51",
			},
		},
		type: "dark",
		MuiInputBase: {
			root: {
				"borderRadius": "10px",
				"outlineColor": "white",
				"background": "#0E0E0E",
				"color": "white",
				"fontSize": "1.0rem",

				"&$focused": {
					boderStyle: "inset",
					// border: "2px rgb(255, 0, 116) solid",
					transition: "0.25s",
				},
			},
			multiline: {
				"borderRadius": "10px",
				"outlineColor": "white",
				"background": "#0E0E0E",
				"color": "white",
				"fontSize": "1.0rem",

				"&$focused": {
					boderStyle: "inset",
					// border: "2px rgb(255, 0, 116) solid",
					transition: "0.25s",
				},
			},
		},
		MuiNativeSelect: {
			outlined: {
				borderRadius: "10px",
				outlineColor: "white",
				// background: "#0E0E0E",

				color: "white",

				// fontSize: "1.2rem",
			},
			select: {
				paddingTop: "20px",

				// background: "#0E0E0E",
				color: "white",
			},
			selectMenu: { marginTop: "10px" },
		},
	},
});

export default StepperTheme;
