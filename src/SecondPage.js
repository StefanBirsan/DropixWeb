import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { database } from "./firebaseConfig";
import { ref, get } from "firebase/database";
import "./assets/styles/SecondPage.css";
import logoitfesttransparent1 from './assets/images/LogoITFestTransparent.png';
import { ButtonSmall } from "./components/buttons/buttonsmall";

const SecondPage = () => {
    const query = new URLSearchParams(useLocation().search);
    const awb = query.get("awb");
    const navigate = useNavigate();
    const mapRef = useRef(null);
    const mapInstanceRef = useRef(null);
    const markerRef = useRef(null);

    const [awbData, setAwbData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [mapLoaded, setMapLoaded] = useState(false);

    // Load Google Maps script
    useEffect(() => {
        if (!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDAeoHmakM1MP8SbyYUIEoaMuzDynNcMoc&libraries=places`;
            script.async = true;
            script.onload = () => setMapLoaded(true);
            document.head.appendChild(script);
            return () => {
                document.head.removeChild(script);
            };
        } else {
            setMapLoaded(true);
        }
    }, []);

    // Initialize map when Google Maps is loaded
    useEffect(() => {
        if (mapLoaded && mapRef.current && !mapInstanceRef.current) {
            const mapOptions = {
                center: { lat: 45.9443, lng: 25.0094 },
                zoom: 7,
                mapTypeId: 'roadmap',
                styles: [
                    {
                        featureType: "all",
                        elementType: "all",
                        stylers: [
                            { saturation: -100 },
                            { lightness: 20 }
                        ]
                    }
                ]
            };
            mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);
        }
    }, [mapLoaded]);

    // Fetch AWB data
    useEffect(() => {
        const fetchAWBData = async () => {
            if (!awb) {
                setError("No AWB provided.");
                setLoading(false);
                return;
            }

            try {
                const snapshot = await get(ref(database, `BOX/${awb}`));
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    setAwbData(data);
                } else {
                    setError("AWB not found.");
                }
            } catch (error) {
                setError("Error fetching data.");
            }
            setLoading(false);
        };

        fetchAWBData();
    }, [awb]);

    // Focus map on city when both map and data are ready
    useEffect(() => {
        if (mapLoaded && mapInstanceRef.current && awbData?.City) {
            focusMapOnCity(awbData.City);
        }
    }, [mapLoaded, awbData]);

    // Function to focus map on a specific city
    const focusMapOnCity = (cityName) => {
        if (!mapInstanceRef.current || !window.google) return;

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: `${cityName}, Romania` }, (results, status) => {
            if (status === "OK" && results && results[0]) {
                const cityLocation = results[0].geometry.location;

                // Center map on the city
                mapInstanceRef.current.setCenter(cityLocation);
                mapInstanceRef.current.setZoom(13);

                // Remove previous marker if it exists
                if (markerRef.current) {
                    markerRef.current.setMap(null);
                }

                // Add a marker for the city
                markerRef.current = new window.google.maps.Marker({
                    position: cityLocation,
                    map: mapInstanceRef.current,
                    title: cityName,
                    animation: window.google.maps.Animation.DROP
                });

                // Add info window
                const infoWindow = new window.google.maps.InfoWindow({
                    content: `<div><strong>${cityName}</strong><br>Package destination</div>`
                });

                markerRef.current.addListener('click', () => {
                    infoWindow.open(mapInstanceRef.current, markerRef.current);
                });
            }
        });
    };

    // Map statuses to tracking steps
    const trackingSteps = [
        { label: "Status: 📍 Package Received", status: "Received" },
        { label: "Status: 🚚 In Transit", status: "In Transit" },
        { label: "Status: 🏠 Out for Delivery", status: "Out for Delivery" },
        { label: "Status:   ✅ Delivered", status: "Delivered" }
    ];

    return (
        <div className="second-page">
            {/* Map background */}
            <div ref={mapRef} className="map-background"></div>

            <div className="content-overlay">
                <div className="rectangle-3" />
                <div className="rectangle-4" />
                <img className="img-2" alt="Logo" src={logoitfesttransparent1} />
                <div className="rectangle-5" />
                <div className="rectangle-6" />
                <div className="rectangle-8" />
                <ButtonSmall className="back-button" text="<- Back" onClick={() => navigate("/")} />

                <div className="awb-container">
                    <h2>Tracking Information</h2>
                    <p><strong>AWB Number:</strong> {awb}</p>

                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p style={{ color: "red" }}>{error}</p>
                    ) : awbData ? (
                        <>
                            <p><strong>Address:</strong> {awbData.Address}</p>
                            <p><strong>City:</strong> {awbData.City}</p>
                            <p><strong>Product:</strong> {awbData.productName}</p>

                            <div className="tracking-container">
                                {trackingSteps
                                    .filter((step) => step.status === awbData.Status)
                                    .map((step, index) => (
                                        <div key={index} className="tracking-step in-progress">
                                            {step.label}
                                        </div>
                                    ))}
                            </div>
                        </>
                    ) : null}
                </div>
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

export default SecondPage;