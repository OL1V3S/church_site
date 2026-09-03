import { useLocation, useNavigate } from "react-router-dom";

export default function HeavenPrompt({ lang }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === "/gospel") return null;

  return (
    <section className="gospel-invite" aria-labelledby="gospel-invite-title">
      <p className="section-eyebrow">
        {lang === "en" ? "The Gospel" : "El Evangelio"}
      </p>
      <h2 id="gospel-invite-title">
        {lang === "en"
          ? "Do you have a home in heaven?"
          : "¿Tiene un hogar en el cielo?"}
      </h2>
      <p className="gospel-invite-copy">
        {lang === "en"
          ? "Nothing is more important than knowing that you have made your reservation in heaven for all eternity."
          : "Nada es más importante que saber que ha hecho su reservación en el cielo por toda la eternidad."}
      </p>
      <button
        className="outline-button"
        onClick={() => navigate("/gospel")}
      >
        {lang === "en" ? "READ MORE" : "LEER MÁS"}
      </button>
    </section>
  );
}
