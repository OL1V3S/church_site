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
          color: "#18243a",
          fontFamily: "Trebuchet MS",
          fontSize: "1.5rem",
          lineHeight: "1.8",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >

        <div>
          <strong>{lang === "en" ? "January" : "Enero"}</strong>
          <div>{lang === "en" ? "Ministry Fair: January 18" : "Feria de Ministerios: Enero 18"}</div>
        </div>

        <div>
          <strong>{lang === "en" ? "February" : "Febrero"}</strong>
          <div>{lang === "en" ? "Couples' Get-together: February 14" : "Convivio de Parejas: Febrero 14"}</div>
        </div>

        <div>
          <strong>{lang === "en" ? "March" : "Marzo"}</strong>
          <div>{lang === "en" ? "Revival Conference in Honduras: March 2-6" : "Conferencia de Avivamiento en Honduras: Marzo 2-6"}</div>
          <div>{lang === "en" ? "Primera Iglesia Bautista Fundamental de Wichita's Anniversary: March 7-8" : "Aniversario de Primera Iglesia Bautista Fundamental de Wichita: Marzo 7-8"}</div>
          <div>{lang === "en" ? "Family Conference in Lewisville, TX: March 19-21" : "Conferencia de Familia en Lewisville, TX: Marzo 19-21"}</div>
        </div>

        <div>
          <strong>{lang === "en" ? "April" : "Abril"}</strong>
          <div>{lang === "en" ? "Revival Conference in California: April 10-11" : "Conferencia de Avivamiento en California: Abril 10-11"}</div>
          <div>{lang === "en" ? "Church's 25th Anniversary: April 18-19" : "Vigesimo Quinto Aniversario de la Iglesia: Abril 18-19"}</div>
        </div>

        <div>
          <strong>{lang === "en" ? "May" : "Mayo"}</strong>
          <div>{lang === "en" ? "Mother's Day: May 10" : "Dia de las Madres: Mayo 10"}</div>
          <div>{lang === "en" ? "Cowboy Day: May 17" : "Dia del Vaquero: Mayo 17"}</div>
        </div>

        <div>
          <strong>{lang === "en" ? "June" : "Junio"}</strong>
          <div>{lang === "en" ? "Couples Retreat: June 4-6" : "Retiro de Parejas: Junio 4-6"}</div>
          <div>{lang === "en" ? "Father's Day: June 21" : "Dia de los Padres: Junio 21"}</div>
          <div>{lang === "en" ? "Vacation Bible School: June 22-26" : "Escuela Bíblica de Vacaciones: Junio 22-26"}</div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "July" : "Julio"}</strong>
          <div>{lang === "en" ? "Hyles-Anderson College Tour Group: July 4" : "Hyles-Anderson College Grupo Turistico: Julio 4"}</div>
          <div>{lang === "en" ? "Family Conference: July 16-18" : "Conferencia de Familia: Julio 16-18"}</div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "August" : "Agosto"}</strong>
          <div>{lang === "en" ? "Missions Conferece: August 14-16" : "Conferencia Misionera: Agosto 14-16"}</div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "September" : "Septiembre"}</strong>
          <div>{lang === "en" ? "Outreach Competition: September 13, 20" : "Competencia de Rutas: Septiembre 13, 20"}</div>
        </div>

      {/*

        <div>
          <strong>{lang === "en" ? "October" : "Octubre"}</strong>
          <div>{lang === "en" ? "Cesia's XV: October 25" : "Quinceañera de Cesia: Octubre 25"}</div>
        </div>

      */}

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "November" : "Noviembre"}</strong>
          <div>{lang === "en" ? "Thanksgiving Service: November 25" : "Servicio de Accion de Gracias: Noviembre 25"}</div>
        </div>

      {/*

        <div style={{ marginTop: "1rem" }}>
          <strong>{lang === "en" ? "December" : "Diciembre"}</strong>
          <div>{lang === "en" ? "Men's Banquet: December 13" : "Banquete de Hombres: Diciembre 13"}</div>
          <div>{lang === "en" ? "Teen Banquet: December 19" : "Banquete Juvenil: Diciembre 19"}</div>
          <div>{lang === "en" ? "Women's Banquet: December 20" : "Banquete de Mujeres: Diciembre 20"}</div>
          <div>{lang === "en" ? "Christmas Service: December 21" : "Servicio Navideño: Diciembre 21"}</div>
          <div>{lang === "en" ? "New Year's Service: December 31" : "Servicio de Año Nuevo: Diciembre 31"}</div>
        </div>

      */}

      </div>
    </div>
  );
}
