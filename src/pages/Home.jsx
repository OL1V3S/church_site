import { useNavigate } from "react-router-dom";

import pic1Small from "../assets/homeGallery/pic1-640.webp";
import pic1Large from "../assets/homeGallery/pic1-1200.webp";
import pic2Small from "../assets/homeGallery/pic2-640.webp";
import pic2Large from "../assets/homeGallery/pic2-1200.webp";
import pic3Small from "../assets/homeGallery/pic3-640.webp";
import pic3Large from "../assets/homeGallery/pic3-1200.webp";
import pic4Small from "../assets/homeGallery/pic4-640.webp";
import pic4Large from "../assets/homeGallery/pic4-1200.webp";
import pic5Small from "../assets/homeGallery/pic5-640.webp";
import pic5Large from "../assets/homeGallery/pic5-1200.webp";

import churchSmall from "../assets/church-960.webp";
import churchLarge from "../assets/church-1920.webp";
import logoImg from "../assets/churchLogo1.png";
import clockImg from "../assets/clock.png";
import locationImg from "../assets/location.png";

import Reveal from "../components/Reveal";

const galleryImages = [
  {
    small: pic1Small,
    large: pic1Large,
    alt: "Children and adults gathered during a church program",
  },
  {
    small: pic2Small,
    large: pic2Large,
    alt: "Church youth group gathered in the sanctuary",
  },
  {
    small: pic3Small,
    large: pic3Large,
    alt: "Church members gathered at an outdoor community event",
  },
  {
    small: pic4Small,
    large: pic4Large,
    alt: "Church families gathered with the flag of Guatemala",
  },
  {
    small: pic5Small,
    large: pic5Large,
    alt: "Church members gathered with the flag of El Salvador",
  },
];

const content = {
  en: {
    welcome: "Welcome to",
    intro:
      "We are an old-fashioned Independent Baptist Church. We sing the old-time hymns and preach out of the King James Bible exclusively, believing it to be the Word of God. We are not contemporary in our worship. We strive to be a lighthouse proclaiming the Gospel of Jesus Christ both locally and abroad.",
    doctrine: "Our Doctrine",
    visitEyebrow: "Plan Your Visit",
    visitTitle: "Join us this week",
    serviceTitle: "Service Hours",
    locationTitle: "Our Location",
    maps: "Open in Maps",
    galleryEyebrow: "Our Church Family",
    galleryTitle: "Life at Iglesia Templo Bautista",
    galleryIntro:
      "A glimpse of worship, fellowship, and special days with our church family.",
    galleryHint: "Swipe to see more photos →",
    services: [
      {
        day: "Sunday",
        times: [
          "Sunday School — 10:00am",
          "Sunday Morning — 11:00am",
          "Evening Service — 6:00pm",
        ],
      },
      { day: "Wednesday", times: ["Bible Study — 6:00pm"] },
      { day: "Thursday", times: ["Prayer Meeting — 6:00pm"] },
      { day: "Saturday", times: ["Youth Group — 5:00pm"] },
    ],
  },
  es: {
    welcome: "Bienvenido a",
    intro:
      "Somos una iglesia Bautista Independiente. Cantamos himnos tradicionales y predicamos exclusivamente de la Biblia Reina-Valera 1960, creyendo que es la Palabra de Dios. No somos contemporáneos en nuestra adoración. Nos esforzamos por ser un faro que proclame el Evangelio de Jesucristo tanto localmente como en el extranjero.",
    doctrine: "Nuestra Doctrina",
    visitEyebrow: "Planea Tu Visita",
    visitTitle: "Acompáñanos esta semana",
    serviceTitle: "Horas de Servicio",
    locationTitle: "Nuestra Locación",
    maps: "Abrir en Mapas",
    galleryEyebrow: "Nuestra Familia de la Iglesia",
    galleryTitle: "La vida en Iglesia Templo Bautista",
    galleryIntro:
      "Un vistazo a la adoración, el compañerismo y los días especiales con nuestra familia de la iglesia.",
    galleryHint: "Desliza para ver más fotos →",
    services: [
      {
        day: "Domingo",
        times: [
          "Escuela Dominical — 10:00am",
          "Predicación — 11:00am",
          "Predicación — 6:00pm",
        ],
      },
      { day: "Miércoles", times: ["Estudio Bíblico — 6:00pm"] },
      { day: "Jueves", times: ["Oración — 6:00pm"] },
      { day: "Sábado", times: ["Reunión de Jóvenes — 5:00pm"] },
    ],
  },
};

export default function Home({ lang }) {
  const navigate = useNavigate();
  const copy = content[lang] || content.en;

  return (
    <main>
      <div className="home-hero">
        <img
          className="home-hero-image"
          src={churchLarge}
          srcSet={`${churchSmall} 960w, ${churchLarge} 1920w`}
          sizes="100vw"
          alt="Iglesia Templo Bautista church building at sunset"
          width="1920"
          height="913"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <img
          className="home-logo"
          src={logoImg}
          alt="Iglesia Templo Bautista logo"
          width="160"
          height="160"
          decoding="async"
        />
      </div>

      <section className="home-section home-welcome" aria-labelledby="welcome-title">
        <Reveal direction="up">
          <p className="script-eyebrow">{copy.welcome}</p>
          <h1 className="display-title" id="welcome-title">
            Iglesia Templo Bautista
          </h1>
          <p className="home-intro">{copy.intro}</p>
          <button
            className="primary-button doctrine-action"
            onClick={() => navigate("/about")}
          >
            {copy.doctrine}
          </button>
        </Reveal>
      </section>

      <section className="home-section visit-section" aria-labelledby="visit-title">
        <Reveal direction="up">
          <header className="section-heading">
            <p className="section-eyebrow">{copy.visitEyebrow}</p>
            <h2 id="visit-title">{copy.visitTitle}</h2>
          </header>
        </Reveal>

        <div className="visit-grid">
          <Reveal direction="left" delay={0.05}>
            <article className="info-card service-card">
              <div className="info-card-header">
                <img
                  className="info-icon"
                  src={clockImg}
                  alt=""
                  width="120"
                  height="120"
                  loading="lazy"
                  decoding="async"
                />
                <h3>{copy.serviceTitle}</h3>
              </div>

              <div className="service-list">
                {copy.services.map((service) => (
                  <div className="service-day" key={service.day}>
                    <strong>{service.day}</strong>
                    {service.times.map((time) => (
                      <span key={time}>{time}</span>
                    ))}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal direction="right" delay={0.05}>
            <article className="info-card location-card">
              <div className="info-card-header">
                <img
                  className="info-icon"
                  src={locationImg}
                  alt=""
                  width="120"
                  height="120"
                  loading="lazy"
                  decoding="async"
                />
                <h3>{copy.locationTitle}</h3>
              </div>

              <address className="location-address">
                804 S. 14th Ave
                <br />
                Dodge City, KS 67801
                <br />
                <a href="tel:+16202553740">620-255-3740</a>
              </address>

              <a
                className="primary-button compact-button"
                target="_blank"
                href="https://maps.app.goo.gl/vbZVNoeWtNqApurL6"
                rel="noreferrer"
              >
                {copy.maps}
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.05}>
          <div className="map-shell">
            <iframe
              className="map-frame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.2358373031066!2d-100.03247139999999!3d37.737611099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a71b211d5a52f5%3A0x82f74e9bb358df0d!2sIglesia%20templo%20Bautista%20fundamental%20Independiente!5e0!3m2!1sen!2sus!4v1774971327023!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Iglesia Templo Bautista"
            />
          </div>
        </Reveal>
      </section>

      <section className="home-section gallery-section" aria-labelledby="gallery-title">
        <Reveal direction="up">
          <header className="section-heading">
            <p className="section-eyebrow">{copy.galleryEyebrow}</p>
            <h2 id="gallery-title">{copy.galleryTitle}</h2>
            <p>{copy.galleryIntro}</p>
            <span className="gallery-hint">{copy.galleryHint}</span>
          </header>
        </Reveal>

        <Reveal direction="up" delay={0.05}>
          <div
            className="gallery-strip"
            aria-label={copy.galleryTitle}
            role="region"
            tabIndex="0"
          >
            {galleryImages.map((image) => (
              <figure className="gallery-item" key={image.large}>
                <img
                  className="gallery-image"
                  src={image.small}
                  srcSet={`${image.small} 640w, ${image.large} 1200w`}
                  sizes="(max-width: 700px) 84vw, (max-width: 1100px) 46vw, 31vw"
                  alt={image.alt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </figure>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
