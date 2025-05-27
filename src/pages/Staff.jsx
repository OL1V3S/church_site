export default function Staff({ lang }) {
  const staffList = {
    en: [
      {
        name: "Eusebio Santana",
        title: "Pastor",
        image: "/pictures/church.png",
        description:
          "Description",
      },
      {
        name: "Jhonny Santana",
        title: "Youth Pastor",
        image: "/pictures/church.png",
        description:
          "Description",
      },
    ],
    es: [
      {
        name: "Eusebio Santana",
        title: "Pastor",
        image: "/pictures/church.png",
        description:
          "Descripcion",
      },
      {
        name: "Jhonny Santana",
        title: "Pastor de Jovenes",
        image: "/pictures/church.png",
        description:
        "Descripcion",
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
              width: "200px",
              height: "200px",
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            }}
          />
          <div
            style={{
              fontFamily: "Georgia",
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
