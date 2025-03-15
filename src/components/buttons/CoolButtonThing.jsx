// CoolButtonThing.jsx
import PropTypes from "prop-types";
import React, { useReducer } from "react";
import image4 from "../../assets/images/image 4.png";
import image5 from "../../assets/images/image 5.png";
import "../../assets/styles/CoolButtonThing.css";

export const CoolButtonThing = ({ property1, className, text }) => {   // Added text prop
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`cool-button-thing ${state.property1} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div className="text-wrapper">{text}</div> {/* Render 'text' prop */}

            <img
                className="image"
                alt="Image"
                src={state.property1 === "variant-2" ? image5 : image4}
            />
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "variant-2",
            };

        case "mouse_leave":
            return {
                ...state,
                property1: "default",
            };
    }

    return state;
}

CoolButtonThing.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    text: PropTypes.string.isRequired,  // Define 'text' as a required prop
};
