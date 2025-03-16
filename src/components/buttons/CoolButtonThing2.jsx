import PropTypes from "prop-types";
import React, { useReducer } from "react";
import image6 from "../../assets/images/image 6.png";
import image7 from "../../assets/images/image 7.png";
import "../../assets/styles/CoolButtonThing2.css";

export const CoolButtonThing2 = ({ property1, className, text, onClick }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`cool-button ${state.property1} ${className}`}
            onMouseLeave={() => dispatch("mouse_leave")}
            onMouseEnter={() => dispatch("mouse_enter")}
            onClick={onClick}
        >
            <div className="text-wrapper">{text}</div>
            <img
                className="image"
                alt="Image"
                src={state.property1 === "variant-2" ? image7 : image6}
            />
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

CoolButtonThing2.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func, // Added onClick prop
};
