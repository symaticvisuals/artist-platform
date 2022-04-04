import React from "react";
import {TiArrowRightThick} from "react-icons/ti";

function RightArrow(props) {
    const {className, style, onClick} = props;
    return (
        <React.Fragment>
            <TiArrowRightThick
                style={onClick
                    ? {...style, color: "white"}
                    : {...style, display: "none"}}
                onClick={onClick}
                className={className}
                fontSize="large"
            />
        </React.Fragment>
    );
}

export default RightArrow;
