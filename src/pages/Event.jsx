import calendarImg from "../assets/calendar.png"; // adjust path if needed

export default function Event({ lang }) {
  const content = {
    en: { title: "Upcoming Church Events" },
    es: { title: "Próximos Eventos" },
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
          fontWeight: "bold",
        }}
      >
        {content[lang].title}
      </div>

      {/* Calendar image */}
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <img
          src={calendarImg}
          alt="Church Calendar"
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            padding: "1rem",
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
          margin: "0 auto",
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
          <div>{lang === "en" ? "Missionary Trip: August 1-5" : "Viaje Misionero: Agosto 1-5"}</div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "September" : "Septiembre"}</strong>
          <div>{lang === "en" ? "Family Camp: September 1" : "Campamento de Familia: Septiembre 1"}</div>
          <div>{lang === "en" ? "Missions Conference: September 5-7" : "Conferencia Misionera: Septiembre 5-7"}</div>
        </div>

        <div>
          <strong>{lang === "en" ? "October" : "Octubre"}</strong>
          <div>{lang === "en" ? "Cesia's XV: October 25" : "Quinceañera de Cesia: Octubre 25"}</div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "November" : "Noviembre"}</strong>
          <div>{lang === "en" ? "Thanksgiving Service: November 26" : "Servicio de Accion de Gracias: Noviembre 26"}</div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "December" : "Diciembre"}</strong>
          <div>{lang === "en" ? "Men's Banquet: December 13" : "Banquete de Hombres: Diciembre 13"}</div>
          <div>{lang === "en" ? "Teen Banquet: December 19" : "Banquete Juvenil: Diciembre 19"}</div>
          <div>{lang === "en" ? "Women's Banquet: December 20" : "Banquete de Mujeres: Diciembre 20"}</div>
          <div>{lang === "en" ? "Christmas Service: December 21" : "Servicio Navideño: Diciembre 21"}</div>
          <div>{lang === "en" ? "New Year's Service: December 31" : "Servicio de Año Nuevo: Diciembre 31"}</div>
        </div>
      </div>
    </div>
  );
}
