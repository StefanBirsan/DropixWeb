// NavbarButton.jsx
import React from "react";
import "../../assets/styles/NavbarButton.css";

export const NavbarButton = ({ className, text }) => {  // Added text prop
    return (
        <div className={`navbar-button ${className}`}>
            <div className="text-wrapper">{text}</div> {/* Render 'text' prop */}
        </div>
    );
};
