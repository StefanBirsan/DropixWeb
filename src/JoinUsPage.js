import { useNavigate } from "react-router-dom";
import "./assets/styles/JoinUsPage.css";
import logoitfesttransparent1 from "./assets/images/LogoITFestTransparent.png";
import React from "react";
import { ButtonSmall } from "./components/buttons/buttonsmall";

const JoinUsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="second-page">
            {/* Header */}
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <img className="img-2" alt="Logo" src={logoitfesttransparent1} />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <ButtonSmall className="back-button" text="<- Back" onClick={() => navigate("/")} />

            {/* Content */}
            <div className="content-container" style={{ marginTop: "100px", textAlign: "center" }}>
                <h2>Join Us</h2>
                <p>
                    Welcome to the Join Us page. Learn more about how to become part of our community and explore exciting opportunities.
                    This is placeholder text—feel free to update it.
                </p>
            </div>

            {/* Footer */}
            <div className="footer-links">
                <p className="regulamente-ANPC">
                    <a href="https://www.cargus.ro/regulamente/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Regulamente</span>
                    </a>
                    <a href="https://anpc.ro/" rel="noopener noreferrer" target="_blank">
                        <span className="span">ANPC</span>
                    </a>
                    <a href="https://www.cargus.ro/wp-content/uploads/Cargus-Oferta-Comerciala-Clienti-Contract.pdf" rel="noopener noreferrer" target="_blank">
                        <span className="span">Oferta comerciala</span>
                    </a>
                    <a href="https://www.cargus.ro/index-de-combustibil/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Index de combustibil</span>
                    </a>
                    <a href="https://www.cargus.ro/blog/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Știri și articole</span>
                    </a>
                    <a href="https://www.cargus.ro/personal/intrebari-frecvente/" rel="noopener noreferrer" target="_blank">
                        <span className="span">FAQ</span>
                    </a>
                    <a href="https://www.cargus.ro/cariere/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Cariere</span>
                    </a>
                    <a href="https://www.cargus.ro/contacteaza-ne/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Contact Center</span>
                    </a>
                    <a href="https://www.cargus.ro/documente-oficiale-persoane-fizice/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Documente oficiale persoane fizice</span>
                    </a>
                    <a href="https://www.cargus.ro/documente-oficiale-persoane-juridice/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Documente oficiale persoane juridice</span>
                    </a>
                    <a href="https://www.cargus.ro/politica-de-prelucrare-a-datelor-cu-caracter-personal/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Politica de prelucrare a datelor cu caracter personal</span>
                    </a>
                    <a href="https://www.cargus.ro/politica-de-confidentialitate/" rel="noopener noreferrer" target="_blank">
                        <span className="span">Politica de confidențialitate</span>
                    </a>
                    <span className="text-wrapper-4"> Preferinte cookie</span>
                </p>
            </div>
        </div>
    );
};

export default JoinUsPage;
