import { Typography } from "@material-ui/core";

import SessionCard from "./SessionCard";
import { sessions } from "../../data/dataSource";

export default function SessionsSection(props) {
  return (
    <div style={{ padding: "0 5vw" }}>
      <Typography
        variant="h2"
        component={"h2"}
        className={props.classes.heading}>
        Sessions
      </Typography>
      {sessions.lectures.map((session, idx) => {
        let status = session.status;
        return <SessionCard key={idx} status={status} session={session} />;
      })}
    </div>
  );
}
