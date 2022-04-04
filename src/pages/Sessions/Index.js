import React from "react";
import { Box, InputAdornment, InputBase, makeStyles } from "@material-ui/core";
import searchTheme from "../../theme/input";
import { ThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchBar: { marginTop: "5vh", display: "flex", marginBottom: "5vh" },
  filterBox: {
    width: "75px",
    height: "auto",
    background: "white",
    borderRadius: "10px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",

    "&:after": {
      border: "2px red solid",
    },
  },
  popper: {
    padding: "15px",
    margin: "10px",
    background: "white",
    borderRadius: "10px",
  },
  heading: {
    marginTop: "30px",
    color: "#FF454D",
  },
}));

export default function Index() {
  const classes = useStyles();
  // const [anchorE1, setAnchorE1] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorE1(anchorE1 ? null : event.currentTarget);

  // };
  // const open = Boolean(anchorE1);
  // const id = open ? "simple-popper" : undefined;
  return (
    <Box style={{ padding: "0em 4vw 4vh 4vw" }} className={classes.root}>
      <Box className={classes.searchBar}>
        <ThemeProvider theme={searchTheme}>
          <InputBase
            variant="outlined"
            placeholder="What do you want to learn?"
            fullWidth="true"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon fontSize="large" style={{ fontSize: "1.9rem" }} />
              </InputAdornment>
            }
            style={{ marginRight: ".4rem", padding: "20px 25px" }}
          />
          {/* <Box
            className={classes.filterBox}
            onClick={handleClick}
            aria-describedby={id}
            type="button"
          >
            <FilterListIcon size="large" />
            <Popper
              id={id}
              open={open}
              anchorEl={anchorE1}
              placement="bottom-end"
            >
              <div className={classes.popper}>
                <SortComponent />
              </div>
            </Popper>
          </Box> */}
        </ThemeProvider>
      </Box>
    </Box>
  );
}
