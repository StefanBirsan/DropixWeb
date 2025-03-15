import { useNavigate } from "react-router-dom";
import "./assets/styles/RiseAndChallengesPage.css";
import logoitfesttransparent1 from "./assets/images/LogoITFestTransparent.png";
import React, { useState, useEffect } from "react";
import { ButtonSmall } from "./components/buttons/buttonsmall";

// Carousel component that will handle the background images
const BackgroundCarousel = ({ images, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="background-carousel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="carousel-image"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: index === currentIndex ? 1 : 0,
                    }}
                />
            ))}
        </div>
    );
};

const RiseAndChallengesPage = () => {
    const navigate = useNavigate();

    // Add your image URLs here
    const backgroundImages = [
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745",
        "https://images.unsplash.com/photo-1597733336794-12d05021d510",
        "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1"
    ];

    return (
        <div className="second-page">
            {/* Background Carousel */}
            <BackgroundCarousel images={backgroundImages} interval={7000} />

            {/* Overlay to make content more readable */}
            <div className="background-overlay" />

            {/* Header */}
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <img className="img-2" alt="Logo" src={logoitfesttransparent1} />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <ButtonSmall className="back-button" text="<- Back" onClick={() => navigate("/")} />

            {/* Text Background Rectangle on the right */}
            <div className="text-background-rectangle" />

            {/* Content positioned over the rectangle */}
            <div className="content-container">
                <h2 className="page-title">Rise and Challenges</h2>
                <p className="page-description">
                    Five computer science students created DropX to solve problems found in the current delivery system regarding waste and carbon emissions.
                    Their smart container system faced challenges in hardware durability and cellular connectivity implementation.
                    Despite initially working from a garage with minimal funding, their breakthrough came when a major delivery company ran a successful pilot, leading to their first significant investment.
                    Thought all of this is mostly fake, we hope that it might become true.
                </p>
            </div>

            <div className="rectangle-10" />

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

export default RiseAndChallengesPage;