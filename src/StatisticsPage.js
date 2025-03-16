import { useNavigate } from "react-router-dom";
import "./assets/styles/StatisticsPage.css";
import logoitfesttransparent1 from "./assets/images/LogoITFestTransparent.png";
import React from "react";
import image1 from './assets/images/office.jpg';
import DeliveryComparisonChart from './components/elements/DeliveryComparisonChart.jsx';
import { ButtonSmall } from "./components/buttons/buttonsmall";

const StatisticsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="second-page">
            <div className="second-page" style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Header */}
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <img className="img-2" alt="Logo" src={logoitfesttransparent1} />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <ButtonSmall className="back-button" text="<- Back" onClick={() => navigate("/")} />

            {/* Content */}
            <DeliveryComparisonChart/>
            <div className="content-container">
                <h2 className="page-title">Statistics</h2>
                <p className="page-description">
                    We work with the biggest deliver companies from Romania like FAN Curier, DHL, GLS, FedEX, UPS, Cargus and Sameday. So far there have been no complaints and just amazing collaboration. By using our services our clients managed up to a 30% increase in packages delivered in the same time, all while using less cardboard boxes resulting in up to 4 trees saved per day.
                    As you can see on the left, all companies have seen not only an increase in profits, since the boxes are reusable, but all have them have seen an increase in Sales overall, due to this Green-Tech alternative.
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
        </div>
    );
};

export default StatisticsPage;