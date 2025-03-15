import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SecondPage from "./SecondPage";
import RiseAndChallengesPage from "./RiseAndChallengesPage";
import TreesSavedPage from "./TreesSavedPage";
import StatisticsPage from "./StatisticsPage";
import JoinUsPage from "./JoinUsPage";
import { ButtonSmall } from './components/buttons/buttonsmall.jsx';
import { CoolButtonThing } from './components/buttons/CoolButtonThing.jsx';
import { CoolButtonThing2 } from './components/buttons/CoolButtonThing2.jsx';
import { CoolButtonThing3 } from './components/buttons/CoolButtonThing3.jsx';
import { CoolButtonThing4 } from './components/buttons/CoolButtonThing4.jsx';
import { CoolThingyElement } from './components/elements/CoolThingyElement.jsx';
import { NavbarButton } from './components/navbar/ NavbarButton.jsx';
import { Input } from "./components/elements/input.jsx";
import AWBSearch from "./AWBSearch";
import deliveryvanwallp1 from './assets/images/deliveryvanwallp 1.jpg';
import happyPerson1 from './assets/images/happy person 1.png';
import image1 from './assets/images/image 1.png';
import image2 from './assets/images/image 2.png';
import image3 from './assets/images/image 3.png';
import logoitfesttransparent1 from './assets/images/LogoITFestTransparent.png';
import './assets/styles/index.css';

const MainPage = () => {
  const [awb, setAwb] = useState("");
  const navigate = useNavigate();

  return (
      <div className="desktop">
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="rectangle-2" />
            <img className="happy-person" alt="Happy person" src={happyPerson1} />
            <img className="deliveryvanwallp" alt="Delivery van" src={deliveryvanwallp1} />
            <div className="rectangle-3" />
            <>
              <input
                  className="input"
                  placeholder="Enter AWB"
                  value={awb}
                  onChange={(e) => setAwb(e.target.value)}
              />
              <ButtonSmall
                  className="button-small-instance"
                  text="Search"
                  onClick={() => {
                    if (awb.trim()) {
                      console.log("Navigating to /second with AWB:", awb);
                      navigate(`/second?awb=${encodeURIComponent(awb)}`);
                    }
                  }}
              />
            </>

            <CoolThingyElement
                className="cool-thingy-element-instance"
                divClassName="design-component-instance-node"
                divClassNameOverride="cool-thingy-element-2"
                polygon="Polygon 1.svg"
                property1="default"
                text="Ecosystem"
                text1="With DropX, each company has access to our SmartBox technology, as well as our app and this website"
            />
            <CoolThingyElement
                className="cool-thingy-element-3"
                divClassName="design-component-instance-node"
                divClassNameOverride="cool-thingy-element-2"
                polygon="Polygon 1.svg"
                property1="default"
                text="SmartBox"
                text1="A simple box that helps reduce waste, all the while helping couriers reach their targets faster"
            />
            <CoolThingyElement
                className="cool-thingy-element-4"
                divClassName="design-component-instance-node"
                divClassNameOverride="cool-thingy-element-2"
                polygon="Polygon 1.svg"
                property1="default"
                text="DropX"
                text1="The brand new delivery company ecosystem that includes all the needs of a company in one convenient place"
            />
            <div className="rectangle-4" />
            <img className="img-2" alt="Logo" src={logoitfesttransparent1} />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <img className="image-8" alt="Image" src={image1} />
            <img className="image-9" alt="Image" src={image2} />
            <img className="image-10" alt="Image" src={image3} />
            <div className="rectangle-7" />
            <div className="text-wrapper-3">QUICK ACTIONS</div>
            <NavbarButton
                className="navbar-button-instance"
                divClassName="navbar-button-2"
                text="RO"
            />
            <NavbarButton
                className="navbar-button-3"
                divClassName="navbar-button-4"
                text="Contact us"
            />
            <NavbarButton
                className="navbar-button-5"
                divClassName="navbar-button-6"
                text="Find out more"
            />
            <NavbarButton
                className="navbar-button-7"
                divClassName="navbar-button-6"
                text="Business"
            />
            <CoolButtonThing
                className="cool-button-thing-instance"
                image="image4.png"
                property1="default"
                text="RISE AND CHALLENGES"
                onClick={() => navigate('/rise-and-challenges')}
            />
            <CoolButtonThing2
                className="cool-button-thing2"
                image="image6.png"
                property1="default"
                text="TREES SAVED"
                onClick={() => navigate('/trees-saved')}
            />
            <CoolButtonThing3
                className="cool-button-thing3"
                image="image8.png"
                property1="default"
                text="STATISTICS"
                onClick={() => navigate('/statistics')}
            />
            <CoolButtonThing4
                className="cool-button-instance"
                image="image10.png"
                property1="default"
                text="JOIN US"
                onClick={() => navigate('/join-us')}
            />
            <div className="rectangle-8" />
            <p className="regulamente-ANPC">
              <a href="https://www.cargus.ro/regulamente/" rel="noopener noreferrer" target="_blank">
                <span className="span">Regulamente</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://anpc.ro/" rel="noopener noreferrer" target="_blank">
                <span className="span">ANPC</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/wp-content/uploads/Cargus-Oferta-Comerciala-Clienti-Contract.pdf" rel="noopener noreferrer" target="_blank">
                <span className="span">Oferta comerciala</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/index-de-combustibil/" rel="noopener noreferrer" target="_blank">
                <span className="span">Index de combustibil</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/blog/" rel="noopener noreferrer" target="_blank">
                <span className="span">Știri și articole</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/personal/intrebari-frecvente/" rel="noopener noreferrer" target="_blank">
                <span className="span">FAQ</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/cariere/" rel="noopener noreferrer" target="_blank">
                <span className="span">Cariere</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/contacteaza-ne/" rel="noopener noreferrer" target="_blank">
                <span className="span">Contact Center</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/documente-oficiale-persoane-fizice/" rel="noopener noreferrer" target="_blank">
                <span className="span">Documente oficiale persoane fizice</span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/documente-oficiale-persoane-juridice/" rel="noopener noreferrer" target="_blank">
                <span className="span">Documente oficiale persoane juridice</span>
              </a>
              <span className="text-wrapper-4">
              {" "}
                <br />
            </span>
              <a href="https://www.cargus.ro/politica-de-prelucrare-a-datelor-cu-caracter-personal/" rel="noopener noreferrer" target="_blank">
              <span className="span">
                Politica de prelucrare a datelor cu caracter personal
              </span>
              </a>
              <span className="text-wrapper-4">&nbsp;</span>
              <a href="https://www.cargus.ro/politica-de-confidentialitate/" rel="noopener noreferrer" target="_blank">
                <span className="span">Politica de confidențialitate</span>
              </a>
              <span className="text-wrapper-4"> Preferinte cookie</span>
            </p>
            <div className="rectangle-9" />
          </div>
        </div>
      </div>
  );
};

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/rise-and-challenges" element={<RiseAndChallengesPage />} />
        <Route path="/trees-saved" element={<TreesSavedPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/join-us" element={<JoinUsPage />} />
      </Routes>
  );
};

export default App;