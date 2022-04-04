import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "29vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    // opacity: "1",
    maxWidth: "100vw",

    // backgroundSize: "55px 55px, 55px 55px, 27.5px 27.5px, 27.5px 27.5px",
    // background:
    //   "radial-gradient(circle, transparent 20%, #111112 20%, #111112 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #080808 20%, #080808 80%, transparent 80%, transparent) 27.5px 27.5px, linear-gradient(#a80bff 2.2px, transparent 2.2px) 0 -1.1px, linear-gradient(90deg, #a80bff 2.2px, #111112 2.2px) -1.1px 0",
    // backgroundPosition: "0 0, 0 0, 19px 33px, 19px 33px, 0 0, 19px 33px",
  },
}));
function HomePageCard(props) {
  const classes = useStyles();
  // const { title, image, content, author } = props;
  return (
    <div style={{ padding: "10px" }}>
      <div
        className={classes.root}
        style={{
          // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d23d09' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E")`,
          // backgroundColor: `${props.item.color}`,

          // backgroundImage: `url(${props.item.color})`,
          backgroundImage: `linear-gradient(180deg,rgba(8, 8, 8,0.4),rgba(8, 8, 8,0.4)), url(${props.item.image})`,
          filter: "contrast(110%)",
          backgroundSize: "cover",
          // border: `3px solid #fff`,
        }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundImage: `linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(255,66,92,0) 56%, ${props.item.color} 100%)`,
            backgroundSize: "cover",
            textAlign: "center",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            // opacity: "1",
          }}>
          <Typography variant="h3" component={"h3"}>
            {props.item.title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

HomePageCard.propTypes = {
  item: PropTypes.object,
};

export default HomePageCard;
