import { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Event from "./pages/Event";
import Staff from "./pages/Staff";
import Gospel from "./pages/Gospel";
import GospelInvite from "./components/HeavenPrompt";


export default function App() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const navText = {
    en: { home: "Home", about: "About", staff: "Staff", event: "Events", toggle: "Español" },
    es: { home: "Inicio", about: "Sobre Nosotros", staff: "Personal", event: "Eventos", toggle: "English" },
  };

  const toggleLang = () => setLanguage((lang) => (lang === "en" ? "es" : "en"));

  return (
    <Router>
      <nav>
        {/* Hamburger Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {navText[language].home}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {navText[language].about}
          </NavLink>
          <NavLink to="/staff" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {navText[language].staff}
          </NavLink>
          <NavLink to="/event" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            {navText[language].event}
          </NavLink>
          <button onClick={toggleLang} style={buttonStyle}>
            {navText[language].toggle}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="mobile-menu">
            <NavLink to="/" end className="nav-link" onClick={() => setMenuOpen(false)}>
              {navText[language].home}
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              {navText[language].about}
            </NavLink>
            <NavLink to="/staff" className="nav-link" onClick={() => setMenuOpen(false)}>
              {navText[language].staff}
            </NavLink>
            <NavLink to="/event" className="nav-link" onClick={() => setMenuOpen(false)}>
              {navText[language].event}
            </NavLink>
            <button onClick={() => { toggleLang(); setMenuOpen(false); }} style={buttonStyle}>
              {navText[language].toggle}
            </button>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home lang={language} />} />
        <Route path="/about" element={<About lang={language} />} />
        <Route path="/staff" element={<Staff lang={language} />} />
        <Route path="/event" element={<Event lang={language} />} />
        <Route path="/gospel" element={<Gospel lang={language} />} />
      </Routes>

      <GospelInvite lang={language} />
    </Router>
  );
}

const buttonStyle = {
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#A0FFD1",
  color: "#18243a",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
};
