import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Hours";
import Contact from "./pages/Contact";

export default function App() {
  const [language, setLanguage] = useState("en");
  const navText = {
    en: { home: "Home", about: "About", hours: "Hours", contact: "Contact", toggle: "Español" },
    es: { home: "Inicio", about: "Sobre Nosotros", hours: "Horarios", contact: "Contacto", toggle: "English" },

  };

  const toggleLang = () => setLanguage(lang => lang === "en" ? "es" : "en");

  return (
    <Router>
      <nav
        style={{
          backgroundColor: "#18243a",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {navText[language].home}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {navText[language].about}
        </NavLink>
        <NavLink
          to="/hours"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {navText[language].hours}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {navText[language].contact}
        </NavLink>
        <button
          onClick={() =>
            setLanguage((prev) => (prev === "en" ? "es" : "en"))
          }
          style={{
            marginLeft: "1rem",
            padding: "0.5rem 1rem",
            backgroundColor: "#A0FFD1",
            color: "#18243a",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {navText[language].toggle}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Home lang={language} />} />
        <Route path="/about" element={<About lang={language} />} />
        <Route path="/hours" element={<Events lang={language} />} />
        <Route path="/contact" element={<Contact lang={language} />} />
      </Routes>
    </Router>
  );
}
