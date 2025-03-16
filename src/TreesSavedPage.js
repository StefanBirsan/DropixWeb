import { useNavigate } from "react-router-dom";
import "./assets/styles/TreesSavedPage.css";
import logoitfesttransparent1 from "./assets/images/LogoITFestTransparent.png";
import React from "react";
import image1 from './assets/images/forest.jpg';
import { ButtonSmall } from "./components/buttons/buttonsmall";

const TreesSavedPage = () => {
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
            <div className="content-container" style={{ marginTop: "100px", display: "flex", justifyContent: "space-between", padding: "0 40px" }}>
                {/* Left side - Cardboard box with tree */}
                <div className="visual-container" style={{ flex: "1", maxWidth: "1%" }}>
                    {/* Cardboard box */}
                    <div className="cardboard-box" style={{
                        left: "200px",
                        top: "500px",
                        width: "240px",
                        height: "180px",
                        backgroundColor: "#C19A6B",
                        borderRadius: "8px",
                        position: "fixed",
                        margin: "0 auto",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        border: "2px solid #8B4513",
                        display: "flex",
                        justifyContent: "center",
                        overflow: "visible"
                    }}>
                        {/* Box top flaps */}
                        <div style={{
                            position: "absolute",
                            top: "-20px",
                            left: "20px",
                            width: "90px",
                            height: "40px",
                            backgroundColor: "#C19A6B",
                            borderRadius: "8px 8px 0 0",
                            transform: "rotate(-15deg)",
                            transformOrigin: "bottom left",
                            border: "2px solid #8B4513",
                            borderBottom: "none"
                        }}></div>
                        <div style={{
                            position: "absolute",
                            top: "-20px",
                            right: "20px",
                            width: "90px",
                            height: "40px",
                            backgroundColor: "#C19A6B",
                            borderRadius: "8px 8px 0 0",
                            transform: "rotate(15deg)",
                            transformOrigin: "bottom right",
                            border: "2px solid #8B4513",
                            borderBottom: "none"
                        }}></div>

                        {/* Tree */}
                        <div className="tree" style={{ position: "absolute", top: "-160px" }}>
                            {/* Tree trunk */}
                            <div style={{
                                width: "30px",
                                height: "120px",
                                backgroundColor: "#8B4513",
                                margin: "0 auto"
                            }}></div>

                            {/* Tree foliage */}
                            <div style={{
                                width: "0",
                                height: "0",
                                borderLeft: "90px solid transparent",
                                borderRight: "90px solid transparent",
                                borderBottom: "120px solid #2E8B57",
                                position: "absolute",
                                top: "-120px",
                                left: "-75px"
                            }}></div>
                            <div style={{
                                width: "0",
                                height: "0",
                                borderLeft: "70px solid transparent",
                                borderRight: "70px solid transparent",
                                borderBottom: "100px solid #3CB371",
                                position: "absolute",
                                top: "-180px",
                                left: "-55px"
                            }}></div>
                            <div style={{
                                width: "0",
                                height: "0",
                                borderLeft: "50px solid transparent",
                                borderRight: "50px solid transparent",
                                borderBottom: "80px solid #228B22",
                                position: "absolute",
                                top: "-240px",
                                left: "-35px"
                            }}></div>
                        </div>
                    </div>
                </div>
                {/* Right side - Text with transparent background */}
                <div className="content-container-cool" style={{ marginLeft:"-200px" ,marginTop: "-120px", textAlign: "center" }}>
                    <div style={{
                        backgroundColor: "rgba(255, 255, 255, 0.7)",
                        padding: "30px",
                        borderRadius: "10px",
                        width: "100%",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                    }}>
                        <h2>Statistics</h2>
                        <p>
                            Cardboard packaging is widely used in industries, leading to signifi-
                            cant deforestation. By improving manufacturing processes and adopting efficient designs, we can mitigate environmental damage while maintaining economic viability. The packaging industry heavily relies on cardboard, primarily derived from wood pulp. According to studies, millions of trees are cut down annually to meet global demand. However, inefficient box designs contribute to excessive material use, leading to unnecessary deforestation.
                            Cardboard is typically made from virgin or recycled paper fibers. Estimates
                            suggest that producing one ton of virgin cardboard requires approximately 17 trees. Given that the global cardboard production reaches over 400 million tons annually, this translates to billions of trees felled for packaging purposes.
                            If companies reduce cardboard consumption by even 10%, the number of trees saved could be immense. Assuming 400 million tons of cardboard are produced yearly, a 10% reduction would save approximately 680 million trees annually.
                            Adopting efficient box designs can significantly impact environmental conservation. Companies and consumers alike should push for sustainable packaging solutions, reducing deforestation and preserving ecosystems
                        </p>
                    </div>
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
        </div>
    );
};

export default TreesSavedPage;