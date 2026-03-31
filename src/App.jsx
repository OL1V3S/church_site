import { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

import ScrollToTop from "./components/ScrollToTop";
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
    en: {
      home: "Home",
      about: "About",
      staff: "Staff",
      event: "Events",
      toggle: "Español",
      brand: "Iglesia Templo Bautista",
    },
    es: {
      home: "Inicio",
      about: "Sobre Nosotros",
      staff: "Personal",
      event: "Eventos",
      toggle: "English",
      brand: "Iglesia Templo Bautista",
    },
  };

  const toggleLang = () => setLanguage((lang) => (lang === "en" ? "es" : "en"));
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: navText[language].home, end: true },
    { to: "/about", label: navText[language].about },
    { to: "/staff", label: navText[language].staff },
    { to: "/event", label: navText[language].event },
  ];

  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <nav className="site-nav">
          <div className="nav-inner">
          <NavLink to="/" end className="brand" onClick={closeMenu}>
            <span className="brand-text">{navText[language].brand}</span>
          </NavLink>

            <div className="desktop-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <button onClick={toggleLang} className="lang-button">
                {navText[language].toggle}
              </button>
            </div>

            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  toggleLang();
                  closeMenu();
                }}
                className="lang-button mobile-lang"
              >
                {navText[language].toggle}
              </button>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home lang={language} />} />
          <Route
            path="/about"
            element={
              <main className="page-content">
                <About lang={language} />
              </main>
            }
          />
          <Route
            path="/staff"
            element={
              <main className="page-content">
                <Staff lang={language} />
              </main>
            }
          />
          <Route
            path="/event"
            element={
              <main className="page-content">
                <Event lang={language} />
              </main>
            }
          />
          <Route
            path="/gospel"
            element={
              <main className="page-content">
                <Gospel lang={language} />
              </main>
            }
          />
        </Routes>

        <GospelInvite lang={language} />
      </div>
    </Router>
  );
}