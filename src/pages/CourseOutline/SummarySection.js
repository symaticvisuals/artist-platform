import { Typography } from "@material-ui/core";

export default function SummarySection(props) {
  return (
    <div style={{ padding: "0 5vw 8vh 5vw" }}>
      <Typography
        variant="h2"
        component={"h2"}
        className={props.classes.heading}>
        Summary
      </Typography>
      <Typography
        variant="h6"
        component={"h6"}
        className={props.classes.subHeading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </Typography>
    </div>
  );
}
