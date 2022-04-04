import { createTheme } from "@material-ui/core";
const courseOutlineStyle = createTheme({
	overrides: {
		type: "dark",
		MuiButton: {
			text: {
				// Some CSS
				background: "#007FFF",
				borderRadius: 4,
				border: 0,
				color: "black",
				fontFamily: "Montserrat",
				fontWeight: "bold",
				textTransform: "none",
				width: "180px",
				height: "50px",
			},
		},
		MuiTypography: {
			h1: {
				color: "white",
				fontFamily: "Montserrat, sans-serif",
				fontWeight: "700",
			},
			h3: {
				color: "white",
				fontFamily: "Montserrat, sans-serif",
				fontWeight: "700",
			},
			h4: {
				color: "white",
				fontFamily: "Sora, sans-serif",
				fontWeight: "700",
			},
			h5: {
				color: "white",
				fontFamily: "Montserrat, sans-serif",
				fontWeight: "600",
			},
			h6: {
				color: "white",
				fontFamily: "Sora, sans-serif",
				fontWeight: "400",
			},
		},
		MuiCard: {
			root: {
				borderRadius: "20px",
				background: "#1D1E22",
			},
		},
	},
});
export default courseOutlineStyle;
