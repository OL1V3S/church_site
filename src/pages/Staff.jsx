import youthPastor from "../assets/youthPastor-480.webp";
import pastor from "../assets/pastor-480.webp";

export default function Staff({ lang }) {
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
    <div className="staff-page">
      <h1 className="staff-heading">
        {lang === "en" ? "Our Staff" : "Nuestro Personal"}
      </h1>

      {staffList[lang].map((person) => (
        <article className="staff-card" key={person.name}>
          <img
            className="staff-photo"
            src={person.image}
            alt={person.name}
            width="200"
            height="200"
            decoding="async"
          />

          <div className="staff-copy">
            <p style={{ marginBottom: "0.75rem" }}>
              <strong>{person.name}</strong> — {person.title}
            </p>
            <p style={{ margin: 0 }}>{person.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
