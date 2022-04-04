import { createTheme } from "@material-ui/core";
const theme = createTheme({
  overrides: {
    type: "dark",
    MuiButton: {
      text: {
        // Some CSS
        background: "linear-gradient(135deg,#FF416C 30%,#FF4B2B 100% )",
        borderRadius: 4,
        border: 0,
        color: "white",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        textTransform: "none",
        width: "15em",
        height: "50px",
        "&:hover": {
          background: "linear-gradient(135deg,#FF4160 30%,#FF4B20 100% )",
        },
      },
    },
    MuiTypography: {
      h1: {
        color: "white",
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "700",
        fontSize: 60,
      },
      h2: {
        color: "white",
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "700",
        fontSize: 40,
      },
      h3: {
        color: "white",
        fontFamily: "Sora, sans-serif",
        fontWeight: "500",
        fontSize: 30,
      },
      h4: {
        color: "white",
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "400",
        fontSize: 25,
      },
      h5: {
        color: "white",
        fontFamily: "Sora, sans-serif",
        fontWeight: "600",
      },
      h6: {
        color: "white",
        fontFamily: "Quicksand, sans-serif",
        fontWeight: "400",
        fontSize: "1.4rem",
      },
      body1: {
        color: "#fff",
        fontSize: "1.1rem",
        fontFamily: "Quicksand, sans-serif",
      },
      body2: {
        color: "#e5e5e5",
        fontFamily: "Quicksand, sans-serif",
      },
      subtitle1: {
        color: "#e5e5e5",
        fontFamily: "Quicksand, sans-serif",
      },
      subtitle2: {
        color: "#e5e5e5",
        fontFamily: "Quicksand, sans-serif",
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
export default theme;
