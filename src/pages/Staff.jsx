import youthPastor from "../assets/youthPastor-480.webp";
import pastor from "../assets/pastor-480.webp";

export default function Staff({ lang }) {
  const content = {
    en: {
      eyebrow: "Church Leadership",
      title: "Our Staff",
      intro: "Meet the pastors who serve Iglesia Templo Bautista and its ministries.",
      people: [
        {
          name: "Eusebio Santana",
          title: "Pastor",
          image: pastor,
          alt: "Pastor Eusebio Santana and his wife Rosa",
          description:
            "Pastor Santana has pastored Iglesia Templo Bautista since 2013. Before becoming the pastor, he served at Iglesia El Peregrino for years. He and his wife Rosa have been married since March of 1994.",
        },
        {
          name: "Jhonny Santana",
          title: "Youth Pastor",
          image: youthPastor,
          alt: "Jhonny Santana and his wife Abigail",
          description:
            "Brother Jhonny has served as the youth pastor at Iglesia Templo Bautista since 2023. He is a graduate of Hyles-Anderson College and oversees the youth ministry and other areas of service within the church. He and his wife Abigail have been married since December of 2025.",
        },
      ],
    },
    es: {
      eyebrow: "Liderazgo de la Iglesia",
      title: "Nuestro Personal",
      intro: "Conoce a los pastores que sirven a Iglesia Templo Bautista y sus ministerios.",
      people: [
        {
          name: "Eusebio Santana",
          title: "Pastor",
          image: pastor,
          alt: "El Pastor Eusebio Santana y su esposa Rosa",
          description:
            "El Pastor Santana ha pastoreado la Iglesia Templo Bautista desde el 2013. Antes de ser pastor, sirvió en la Iglesia El Peregrino por años. Él y su esposa Rosa han estado casados desde marzo de 1994.",
        },
        {
          name: "Jhonny Santana",
          title: "Pastor de Jóvenes",
          image: youthPastor,
          alt: "Jhonny Santana y su esposa Abigail",
          description:
            "El Hermano Jhonny Santana ha servido como pastor de jóvenes en la Iglesia Templo Bautista desde 2023. Es graduado de Hyles-Anderson College y dirige el ministerio de jóvenes y otras áreas de servicio dentro de la iglesia. Él y su esposa Abigail han estado casados desde diciembre de 2025.",
        },
      ],
    },
  };

  const copy = content[lang] || content.en;

  return (
    <div className="staff-page">
      <header className="page-header staff-page-header">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
      </header>

      <div className="staff-list">
        {copy.people.map((person, index) => (
          <article className="staff-card" key={person.name}>
            <img
              className="staff-photo"
              src={person.image}
              alt={person.alt}
              width="220"
              height="220"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />

            <div className="staff-copy">
              <span className="staff-role">{person.title}</span>
              <h2>{person.name}</h2>
              <p>{person.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
