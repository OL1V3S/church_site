export default function Event({ lang }) {
  const content = {
    en: {
      title: "Upcoming Church Events",},
    es: {
      title: "Proximos Eventos",},
  };

  return (
    <div className="page">
  {/* Title */}
  <div
    style={{
      textAlign: "center",
      marginBottom: "1.5rem",
      color: "#18243a",
      fontFamily: "American Typewriter",
      fontSize: "3rem",
      fontWeight: "bold"
    }}
  >
    {content[lang].title}
  </div>

  {/* Calendar image as header */}
  <div style={{ textAlign: "center", marginBottom: "1rem" }}>
    <img
      src="/pictures/calendar.png"
      alt="Church Calendar"
      style={{
        width: "250px",
        height: "250px",
        objectFit: "cover",
        padding: "1rem"
      }}
    />
  </div>

  {/* Event schedule */}
  <div
    style={{
      textAlign: "center",
      color: "black",
      fontFamily: "American Typewriter",
      fontSize: "1.5rem",
      lineHeight: "1.8",
      maxWidth: "800px",
      margin: "0 auto"
    }}
  >
    <div>
      <strong>{lang === "en" ? "June" : "Junio"}</strong>
      <div>{lang === "en" ? "Couples Retreat: June 5-7" : "Retiro de Parejas: Junio 5-7"}</div>
      <div>{lang === "en" ? "Vacation Bible School: June 16-20" : "Escuela Bíblica de Vacaciones: Junio 16-20"}</div>
    </div>

    <div style={{ marginTop: "1rem" }}>
      <strong>{lang === "en" ? "July" : "Julio"}</strong>
      <div>{lang === "en" ? "Family Conference: July 10-12" : "Conferencia de Familia: Julio 10-12"}</div>
    </div>

    <div style={{ marginTop: "1rem" }}>
      <strong>{lang === "en" ? "August" : "Agosto"}</strong>
      <div>{lang === "en" ? "English" : "Spanish"}</div>
    </div>

    <div style={{ marginTop: "1rem" }}>
      <strong>{lang === "en" ? "September" : "Septiembre"}</strong>
      <div>{lang === "en" ? "English" : "Spanish"}</div>
    </div>
  </div>
</div>

  );
}
