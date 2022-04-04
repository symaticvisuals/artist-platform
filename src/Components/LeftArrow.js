import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";

function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <React.Fragment>
      <TiArrowLeftThick
        style={
          onClick ? { ...style, color: "white" } : { ...style, display: "none" }
        }
        onClick={onClick}
        className={className}
        fontSize="large"
      />
    </React.Fragment>
  );
}

export default LeftArrow;
