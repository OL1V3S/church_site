import { useState, useEffect } from "react";
import youthPastor from "../assets/youthPastor.png";
import pastor from "../assets/pastor.png";

export default function Staff({ lang }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const staffList = {
    en: [
      {
        name: "Eusebio Santana",
        title: "Pastor",
        image: pastor,
        description:
          "Pastor Santana has pastored Iglesia Templo Bautista since 2013. Before becoming the pastor, he served at Iglesia El Peregrino for years. He and his wife Rosa have been married since March of 1994.",
      },
      {
        name: "Jhonny Santana",
        title: "Youth Pastor",
        image: youthPastor,
        description:
          "Brother Jhonny has served as the youth pastor at Iglesia Templo Bautista since 2023. He is a graduate of Hyles-Anderson College and oversees the youth ministry and other areas of service within the church. He and his wife Abigail have been married since December of 2025.",
      },
    ],
    es: [
      {
        name: "Eusebio Santana",
        title: "Pastor",
        image: pastor,
        description:
          "El Pastor Santana ha pastoreado la Iglesia Templo Bautista desde el 2013. Antes de ser pastor, sirvió en la Iglesia El Peregrino por años. Él y su esposa Rosa han estado casados desde marzo de 1994.",
      },
      {
        name: "Jhonny Santana",
        title: "Pastor de Jóvenes",
        image: youthPastor,
        description:
          "El Hermano Jhonny Santana ha servido como pastor de jóvenes en la Iglesia Templo Bautista desde 2023. Es graduado de Hyles-Anderson College y dirige el ministerio de jóvenes y otras áreas de servicio dentro de la iglesia. Él y su esposa Abigail han estado casados desde diciembre de 2025.",
      },
    ],
  };

  return (
    <div style={{ padding: isMobile ? "1rem" : "2rem" }}>
      <h1
        style={{
          fontFamily: "American Typewriter",
          color: "#18243a",
          fontSize: isMobile ? "2rem" : "2.5rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        {lang === "en" ? "Our Staff" : "Nuestro Personal"}
      </h1>

      {staffList[lang].map((person, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            textAlign: isMobile ? "center" : "left",
            gap: isMobile ? "1.25rem" : "2rem",
            maxWidth: "900px",
            margin: "2rem auto",
            padding: isMobile ? "1.25rem" : "2rem",
            backgroundColor: "#dcdcdc",
            borderRadius: "12px",
          }}
        >
          <img
            src={person.image}
            alt={person.name}
            style={{
              width: isMobile ? "180px" : "200px",
              height: isMobile ? "180px" : "200px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              flexShrink: 0,
            }}
          />

          <div
            style={{
              fontFamily: "Trebuchet MS",
              fontSize: isMobile ? "1rem" : "1.2rem",
              lineHeight: "1.6",
              color: "#18243a",
              maxWidth: "600px",
            }}
          >
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>{person.name}</strong> — {person.title}
            </p>
            <p style={{ margin: 0 }}>{person.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}