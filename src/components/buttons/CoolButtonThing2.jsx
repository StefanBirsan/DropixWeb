import PropTypes from "prop-types";
import React, { useReducer } from "react";
import image6 from "../../assets/images/image 6.png";
import image7 from "../../assets/images/image 7.png";
import "../../assets/styles/CoolButtonThing2.css";

export const CoolButtonThing2 = ({ property1, className, text }) => {  // Added text prop
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`cool-button ${state.property1} ${className}`}
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
                src={state.property1 === "variant-2" ? image7 : image6}
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

CoolButtonThing2.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    text: PropTypes.string.isRequired,  // Define 'text' as a required prop
};
