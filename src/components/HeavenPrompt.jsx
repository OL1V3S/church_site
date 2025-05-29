// components/HeavenPrompt.jsx
import { useNavigate } from "react-router-dom";

export default function HeavenPrompt({ lang }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "4rem",
        padding: "2rem",
        backgroundColor: "#fefefe",
        textAlign: "center",
        borderTop: "2px solid #ccc",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          color: "#0a3b4c",
          fontFamily: "American Typewriter",
          fontSize: "2rem",
        }}
      >
        {lang === "en"
          ? "Do You Have A Home in Heaven?"
          : "¿Tiene un Hogar en el Cielo?"}
      </h2>
      <p
        style={{
          fontFamily:"American Typewriter",
          fontStyle: "italic",
          fontSize: "1.3rem",
          marginTop: "1rem",
        }}
      >
        {lang === "en"
          ? "Nothing is more important than knowing that you have made your reservation in Heaven for all eternity."
          : "Nada es más importante que saber que ha hecho su reservación en el Cielo por toda la eternidad."}
      </p>
      <button
        onClick={() => navigate("/gospel")}
        style={{
          marginTop: "2rem",
          padding: "0.8rem 2rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          border: "2px solid #0a3b4c",
          borderRadius: "999px",
          backgroundColor: "transparent",
          color: "#0a3b4c",
          cursor: "pointer",
        }}
      >
        {lang === "en" ? "READ MORE" : "LEER MÁS"}
      </button>
    </div>
  );
}
