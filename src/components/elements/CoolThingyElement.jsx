import PropTypes from "prop-types";
import React, { useReducer } from "react";
import polygon1 from "../../assets/images/Polygon 1.svg";
import "../../assets/styles/CoolThingyElement.css";

export const CoolThingyElement = ({
                                      property1,
                                      className,
                                      text,   // Accepting the 'text' prop
                                      text1,  // Accepting the 'text1' prop
                                  }) => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`cool-thingy-element ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div className="overlap-group">
                <div className={`rectangle ${state.property1}`} />

                <img
                    className="polygon"
                    alt="Polygon"
                    src={state.property1 === "variant-2" ? polygon1 : polygon1}
                />

                {/* Render text and text1 props */}
                <div className="text-wrapper">{text}</div>  {/* Render 'text' prop */}
                <div className="div">{text1}</div>          {/* Render 'text1' prop */}
            </div>
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

CoolThingyElement.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
    text: PropTypes.string,   // Define 'text' prop type
    text1: PropTypes.string,  // Define 'text1' prop type
};
