import { useLocation, useNavigate } from "react-router-dom";
import "./assets/styles/SecondPage.css";
import { NavbarButton } from './components/navbar/ NavbarButton.jsx';
import logoitfesttransparent1 from './assets/images/LogoITFestTransparent.png';
import React from "react";
import {ButtonSmall} from "./components/buttons/buttonsmall";

const SecondPage = () => {
    const query = new URLSearchParams(useLocation().search);
    const awb = query.get("awb");
    const navigate = useNavigate();

    return (
        <div className="second-page">
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <img className="img-2" alt="Logo" src={logoitfesttransparent1} />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-8" />
            <ButtonSmall className="back-button" text="<- Back" onClick={() => navigate("/")}/>
            <div className="awb-container">
                <h2>Tracking Information</h2>
                <p><strong>AWB Number:</strong> {awb}</p>

                <div className="tracking-container">
                    <div className="tracking-step completed">📍 Package Received</div>
                    <div className="tracking-step in-progress">🚚 In Transit</div>
                    <div className="tracking-step">🏠 Out for Delivery</div>
                    <div className="tracking-step">✅ Delivered</div>
                </div>
            </div>
        </div>
    );
};

export default SecondPage;
