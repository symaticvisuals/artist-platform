import { createTheme } from "@material-ui/core";
const navTheme = createTheme({
  overrides: {
    type: "dark",
    MuiButton: {
      text: {
        // Some CSS
        width: "90px",
        background: "linear-gradient(135deg,#FF416C 30%,#FF4B2B 100% )",
        borderRadius: 4,
        border: 0,
        color: "white",
        fontFamily: "Sora",
        fontWeight: "600",
        fontSize: "10px",
        textTransform: "none",
        padding: "10px 0",
        "&:hover": {
          background: "#linear-gradient(135deg,#FF416C 30%,#FF4B2B 100% )",
        },
      },
    },
    MuiTypography: {
      h1: {
        color: "white",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "700",
      },
      body1: {
        color: "white",
        fontFamily: "Sora, sans-serif",
        fontWeight: "400",
      },
      body2: { fontFamily: "Sora, sans-serif" },
    },
  },
});
export default navTheme;
