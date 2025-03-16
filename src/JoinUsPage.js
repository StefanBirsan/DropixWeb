import { useNavigate } from "react-router-dom";
import "./assets/styles/JoinUsPage.css";
import logoitfesttransparent1 from "./assets/images/LogoITFestTransparent.png";
import image1 from './assets/images/bus.jpg'; // Background image import - change path later
import React, { useState } from "react";
import { ButtonSmall } from "./components/buttons/buttonsmall";

const JoinUsPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        cv: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            cv: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        // Currently just logging the data since we're not sending it anywhere
        console.log("Form Data:", formData);
        alert("Application submitted successfully!");
        // Reset form
        setFormData({
            fullName: "",
            email: "",
            cv: null
        });
    };

    return (
        <div className="second-page" style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Header */}
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <img className="img-2" alt="Logo" src={logoitfesttransparent1} />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <ButtonSmall className="back-button" text="<- Back" onClick={() => navigate("/")} />

            {/* Content */}
            <div className="content-container" style={{ marginTop: "100px", textAlign: "center" }}>
                <h2>Join Our Team</h2>

                <div className="form-container" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", backgroundColor: "rgba(255, 255, 255, 0.8)", borderRadius: "8px" }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: "15px", textAlign: "left" }}>
                            <label htmlFor="fullName" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: "15px", textAlign: "left" }}>
                            <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: "15px", textAlign: "left" }}>
                            <label htmlFor="cv" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Upload CV (PDF only)</label>
                            <input
                                type="file"
                                id="cv"
                                name="cv"
                                accept=".pdf"
                                onChange={handleFileChange}
                                style={{ width: "100%" }}
                            />
                            {formData.cv && (
                                <p style={{ margin: "5px 0 0", fontSize: "14px" }}>Selected file: {formData.cv.name}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#4CAF50",
                                color: "white",
                                padding: "10px 15px",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontWeight: "bold"
                            }}
                        >
                            Submit Application
                        </button>
                    </form>
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
    );
};

export default JoinUsPage;