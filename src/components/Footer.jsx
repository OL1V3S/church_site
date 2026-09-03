import { NavLink } from "react-router-dom";

export default function Footer({ lang }) {
  const content = {
    en: {
      navigation: "Explore",
      visit: "Visit Us",
      schedule: "Weekly Services",
      home: "Home",
      about: "About",
      staff: "Staff",
      events: "Events",
      sunday: "Sunday: 10:00am, 11:00am & 6:00pm",
      wednesday: "Wednesday Bible Study: 6:00pm",
      rights: "All rights reserved.",
    },
    es: {
      navigation: "Explorar",
      visit: "Visítanos",
      schedule: "Servicios Semanales",
      home: "Inicio",
      about: "Sobre Nosotros",
      staff: "Personal",
      events: "Eventos",
      sunday: "Domingo: 10:00am, 11:00am y 6:00pm",
      wednesday: "Estudio Bíblico del Miércoles: 6:00pm",
      rights: "Todos los derechos reservados.",
    },
  };

  const copy = content[lang] || content.en;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div>
            <strong>Iglesia Templo Bautista</strong>
            <p>804 S. 14th Ave</p>
            <p>Dodge City, KS 67801</p>
            <a href="tel:+16202553740">620-255-3740</a>
          </div>
        </div>

        <nav className="footer-nav" aria-label={copy.navigation}>
          <h2>{copy.navigation}</h2>
          <NavLink to="/">{copy.home}</NavLink>
          <NavLink to="/about">{copy.about}</NavLink>
          <NavLink to="/staff">{copy.staff}</NavLink>
          <NavLink to="/event">{copy.events}</NavLink>
        </nav>

        <div className="footer-schedule">
          <h2>{copy.schedule}</h2>
          <p>{copy.sunday}</p>
          <p>{copy.wednesday}</p>
          <a
            href="https://maps.app.goo.gl/vbZVNoeWtNqApurL6"
            target="_blank"
            rel="noreferrer"
          >
            {copy.visit}
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} Iglesia Templo Bautista. {copy.rights}
      </div>
    </footer>
  );
}
