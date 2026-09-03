import calendarImg from "../assets/calendar.png";

const events = [
  {
    startDate: "2026-01-18",
    endDate: "2026-01-18",
    en: { month: "January", date: "January 18", title: "Ministry Fair" },
    es: { month: "Enero", date: "Enero 18", title: "Feria de Ministerios" },
  },
  {
    startDate: "2026-02-14",
    endDate: "2026-02-14",
    en: { month: "February", date: "February 14", title: "Couples' Get-together" },
    es: { month: "Febrero", date: "Febrero 14", title: "Convivio de Parejas" },
  },
  {
    startDate: "2026-03-02",
    endDate: "2026-03-06",
    en: { month: "March", date: "March 2–6", title: "Revival Conference in Honduras" },
    es: { month: "Marzo", date: "Marzo 2–6", title: "Conferencia de Avivamiento en Honduras" },
  },
  {
    startDate: "2026-03-07",
    endDate: "2026-03-08",
    en: {
      month: "March",
      date: "March 7–8",
      title: "Primera Iglesia Bautista Fundamental de Wichita's Anniversary",
    },
    es: {
      month: "Marzo",
      date: "Marzo 7–8",
      title: "Aniversario de Primera Iglesia Bautista Fundamental de Wichita",
    },
  },
  {
    startDate: "2026-03-19",
    endDate: "2026-03-21",
    en: { month: "March", date: "March 19–21", title: "Family Conference in Lewisville, TX" },
    es: { month: "Marzo", date: "Marzo 19–21", title: "Conferencia de Familia en Lewisville, TX" },
  },
  {
    startDate: "2026-04-10",
    endDate: "2026-04-11",
    en: { month: "April", date: "April 10–11", title: "Revival Conference in California" },
    es: { month: "Abril", date: "Abril 10–11", title: "Conferencia de Avivamiento en California" },
  },
  {
    startDate: "2026-04-18",
    endDate: "2026-04-19",
    en: { month: "April", date: "April 18–19", title: "Church's 25th Anniversary" },
    es: { month: "Abril", date: "Abril 18–19", title: "Vigésimo Quinto Aniversario de la Iglesia" },
  },
  {
    startDate: "2026-05-10",
    endDate: "2026-05-10",
    en: { month: "May", date: "May 10", title: "Mother's Day" },
    es: { month: "Mayo", date: "Mayo 10", title: "Día de las Madres" },
  },
  {
    startDate: "2026-05-17",
    endDate: "2026-05-17",
    en: { month: "May", date: "May 17", title: "Cowboy Day" },
    es: { month: "Mayo", date: "Mayo 17", title: "Día del Vaquero" },
  },
  {
    startDate: "2026-06-04",
    endDate: "2026-06-06",
    en: { month: "June", date: "June 4–6", title: "Couples Retreat" },
    es: { month: "Junio", date: "Junio 4–6", title: "Retiro de Parejas" },
  },
  {
    startDate: "2026-06-21",
    endDate: "2026-06-21",
    en: { month: "June", date: "June 21", title: "Father's Day" },
    es: { month: "Junio", date: "Junio 21", title: "Día de los Padres" },
  },
  {
    startDate: "2026-06-22",
    endDate: "2026-06-26",
    en: { month: "June", date: "June 22–26", title: "Vacation Bible School" },
    es: { month: "Junio", date: "Junio 22–26", title: "Escuela Bíblica de Vacaciones" },
  },
  {
    startDate: "2026-07-04",
    endDate: "2026-07-04",
    en: { month: "July", date: "July 4", title: "Hyles-Anderson College Tour Group" },
    es: { month: "Julio", date: "Julio 4", title: "Grupo Turístico de Hyles-Anderson College" },
  },
  {
    startDate: "2026-07-16",
    endDate: "2026-07-18",
    en: { month: "July", date: "July 16–18", title: "Family Conference" },
    es: { month: "Julio", date: "Julio 16–18", title: "Conferencia de Familia" },
  },
  {
    startDate: "2026-08-14",
    endDate: "2026-08-16",
    en: { month: "August", date: "August 14–16", title: "Missions Conference" },
    es: { month: "Agosto", date: "Agosto 14–16", title: "Conferencia Misionera" },
  },
  {
    startDate: "2026-09-13",
    endDate: "2026-09-20",
    en: { month: "September", date: "September 13 & 20", title: "Outreach Competition" },
    es: { month: "Septiembre", date: "Septiembre 13 y 20", title: "Competencia de Rutas" },
  },
  {
    startDate: "2026-11-25",
    endDate: "2026-11-25",
    en: { month: "November", date: "November 25", title: "Thanksgiving Service" },
    es: { month: "Noviembre", date: "Noviembre 25", title: "Servicio de Acción de Gracias" },
  },
];

function EventCard({ event, lang }) {
  const copy = event[lang] || event.en;

  return (
    <article className="event-card">
      <div className="event-month">{copy.month}</div>
      <div>
        <time className="event-date" dateTime={event.startDate}>
          {copy.date}, 2026
        </time>
        <h3>{copy.title}</h3>
      </div>
    </article>
  );
}

export default function Event({ lang }) {
  const content = {
    en: {
      eyebrow: "2026 Church Calendar",
      title: "Upcoming Church Events",
      intro: "Save the date and join us for these upcoming services and gatherings.",
      upcoming: "Coming Up",
      earlier: "Earlier in 2026",
      noUpcoming: "There are no remaining events on the published 2026 calendar.",
    },
    es: {
      eyebrow: "Calendario de la Iglesia 2026",
      title: "Próximos Eventos",
      intro: "Aparta la fecha y acompáñanos en estos próximos servicios y reuniones.",
      upcoming: "Próximamente",
      earlier: "Eventos Anteriores de 2026",
      noUpcoming: "No quedan eventos en el calendario publicado de 2026.",
    },
  };

  const copy = content[lang] || content.en;
  const now = new Date();
  const upcomingEvents = events.filter(
    (event) => new Date(`${event.endDate}T23:59:59`) >= now,
  );
  const pastEvents = events.filter(
    (event) => new Date(`${event.endDate}T23:59:59`) < now,
  );

  return (
    <div className="events-page">
      <header className="page-header events-header">
        <img
          src={calendarImg}
          alt=""
          width="112"
          height="112"
          decoding="async"
        />
        <div>
          <p className="section-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.intro}</p>
        </div>
      </header>

      <section className="events-section" aria-labelledby="upcoming-events-title">
        <h2 id="upcoming-events-title">{copy.upcoming}</h2>
        {upcomingEvents.length > 0 ? (
          <div className="event-grid">
            {upcomingEvents.map((event) => (
              <EventCard event={event} lang={lang} key={event.startDate} />
            ))}
          </div>
        ) : (
          <p className="empty-events">{copy.noUpcoming}</p>
        )}
      </section>

      {pastEvents.length > 0 && (
        <details className="past-events">
          <summary>{copy.earlier}</summary>
          <div className="event-grid">
            {pastEvents.map((event) => (
              <EventCard event={event} lang={lang} key={event.startDate} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
