import PropTypes from "prop-types";
import React, { useReducer } from "react";
import image8 from "../../assets/images/image 8.png";
import image9 from "../../assets/images/image 9.png";
import "../../assets/styles/CoolButtonThing3.css";

export const CoolButtonThing3 = ({ property1, className, text, onClick }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`cool-button ${state.property1} ${className}`}
            onMouseLeave={() => dispatch("mouse_leave")}
            onMouseEnter={() => dispatch("mouse_enter")}
            onClick={onClick} // Added onClick
        >
            <div className="text-wrapper">{text}</div>
            {state.property1 === "default" && (
                <img className="image" alt="Image" src={image8} />
            )}
            {state.property1 === "variant-2" && (
                <div className="overlap-group">
                    <div className="div" />
                    <img className="img" alt="Image" src={image9} />
                </div>
            )}
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return { ...state, property1: "variant-2" };
        case "mouse_leave":
            return { ...state, property1: "default" };
        default:
            return state;
    }
}

CoolButtonThing3.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func, // Added onClick prop
};
