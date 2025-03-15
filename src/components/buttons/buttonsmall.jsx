import React from "react";
import "../../assets/styles/buttonsmall.css";

export const ButtonSmall = ({ className, text, onClick }) => {
    return (
        <button className={`button-small ${className}`} onClick={onClick}>  {/* ✅ Change div to button and add onClick */}
            <div className="text-wrapper">{text}</div>
        </button>
    );
};
