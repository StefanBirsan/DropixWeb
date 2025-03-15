// CoolButtonThing4.jsx
import PropTypes from "prop-types";
import React, { useReducer } from "react";
import image10 from "../../assets/images/image 10.png";
import image from "../../assets/images/image 11.png";
import "../../assets/styles/CoolButtonThing4.css";

export const CoolButtonThing4 = ({ property1, className, text, onClick }) => {
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
                <img className="image" alt="Image" src={image10} />
            )}
            {state.property1 === "variant-2" && (
                <div className="overlap-group">
                    <div className="div" />
                    <img className="img" alt="Image" src={image} />
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

CoolButtonThing4.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func, // Defined onClick as a prop
};