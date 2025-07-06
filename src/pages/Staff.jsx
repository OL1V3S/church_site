import youthPastor from "../assets/youthPastor.png";
import pastor from "../assets/pastor.png";

export default function Staff({ lang }) {
  const staffList = {
    en: [
      {
        name: "Eusebio Santana",
        title: "Pastor",
        image: pastor,
        description: "Pastor Santana has pastored Iglesia Templo Bautista since Month of Year. Before becoming the pastor, he served at Iglesia El Peregrino for years. He and his wife Rosa have been married since Month of Year.",
      },
      {
        name: "Jhonny Santana",
        title: "Youth Pastor",
        image: youthPastor,
        description: "Brother Jhonny has served as the youth pastor at Iglesia Templo Bautista since Month of Year. He is a graduate of Hyles-Anderson College and oversees the youth ministry and other areas of service within the church.",
      },
    ],
    es: [
      {
        name: "Eusebio Santana",
        title: "Pastor",
        image: pastor,
        description: "El Pastor Santana ha pastoreado la Iglesia Templo Bautista desde Mes de Año. Antes de ser pastor, sirvió en la Iglesia El Peregrino por años. El y su esposa Rosa han estado casados desde Mes de Año",
      },
      {
        name: "Jhonny Santana",
        title: "Pastor de Jovenes",
        image: youthPastor,
        description: "El Hermano Jhonny Santana ha servido como pastor de jóvenes en la Iglesia Templo Bautista desde Mes de Año. Es graduado de Hyles-Anderson College y dirige el ministerio de jóvenes y otras áreas de servicio dentro de la iglesia.",
      },
    ],
  };

  return (
    <div className="page">
      <h1
        style={{
          fontFamily: "American Typewriter",
          color: "#18243a",
          fontSize: "2.5rem",
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
            alignItems: "center",
            gap: "2rem",
            maxWidth: "900px",
            margin: "2rem auto",
            padding: "2rem",
            backgroundColor: "#dcdcdc",
            borderRadius: "12px",
          }}
        >
          <img
            src={person.image}
            alt={person.name}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div
            style={{
              fontFamily: "American Typewriter",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              color: "#18243a",
            }}
          >
            <p>
              <strong>{person.name}</strong> — {person.title}
            </p>
            <p>{person.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
