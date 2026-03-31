import React from "react";
import { useNavigate } from "react-router-dom";

import pic1 from "../assets/homeGallery/pic1.png";
import pic2 from "../assets/homeGallery/pic2.png";
import pic3 from "../assets/homeGallery/pic3.png";
import pic4 from "../assets/homeGallery/pic4.png";
import pic5 from "../assets/homeGallery/pic5.png";

import churchImg from "../assets/church.png";
import logoImg from "../assets/churchLogo1.png";
import clockImg from "../assets/clock.png";
import locationImg from "../assets/location.png";

import Reveal from "../components/Reveal";

export default function Home({ lang }) {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ position: "relative", height: "52vh", width: "100%" }}>
        <img
          src={churchImg}
          alt="Church Cover"
          style={{
            objectFit: "cover",
            objectPosition: "center center",
            width: "100%",
            height: "100%",
            filter: "brightness(0.75)",
            display: "block",
          }}
        />
        <img
          src={logoImg}
          alt="Church Logo"
          style={{
            objectFit: "cover",
            transform: "translate(-50%, -50%) scale(1.1)",
            transformOrigin: "center center",
            position: "absolute",
            top: "95%",
            left: "50%",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "1px solid white",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            backgroundColor: "white",
            padding: "1rem",
            zIndex: 2,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "2rem",
          backgroundColor: "transparent",
          borderRadius: "0",
          textAlign: "center",
        }}
      >
        <Reveal direction="left">
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div
              style={{
                color: "#889BAE",
                fontFamily: "'Brush Script MT', 'Dancing Script', cursive",
                fontSize: "3rem",
                marginTop: "1rem",
              }}
            >
              {lang === "en" ? "Welcome to" : "Bienvenido a"}
            </div>
            <div
              style={{
                color: "#18243a",
                fontFamily: "American Typewriter",
                fontSize: "2.5rem",
                fontWeight: "bold",
              }}
            >
              Iglesia Templo Bautista
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div
            style={{
              color: "#18243a",
              fontFamily: "Trebuchet MS",
              fontSize: "1.5rem",
              lineHeight: "1.6",
              textAlign: "center",
            }}
          >
            {lang === "en"
              ? "We are an old-fashioned Independent Baptist Church. We sing the old-time hymns and preach out of the King James Bible exclusively, believing it to be the Word of God. We are not contemporary in our worship. We strive to be a lighthouse proclaiming the Gospel of Jesus Christ both locally and abroad."
              : "Somos una iglesia Bautista Independiente. Cantamos himnos tradicionales y predicamos exclusivamente de la Biblia Reina-Valera 1960, creyendo que es la Palabra de Dios. No somos contemporáneos en nuestra adoración. Nos esforzamos por ser un faro que proclame el Evangelio de Jesucristo tanto localmente como en el extranjero."}
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <button
            onClick={() => navigate("/about")}
            style={{
              marginTop: "2rem",
              padding: "1rem 2.5rem",
              backgroundColor: "#18243a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "2.5rem",
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            {lang === "en" ? "Our Doctrine" : "Nuestra Doctrina"}
          </button>
        </Reveal>

        <Reveal direction="left" delay={0.1}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginTop: "2rem",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <img
              src={clockImg}
              alt="Clock"
              style={{ width: "200px", height: "200px" }}
            />

            <div
              style={{
                textAlign: "left",
                fontSize: "2rem",
                color: "#18243a",
                fontFamily: "Trebuchet MS",
              }}
            >
              <div style={{ fontWeight: "bold", fontSize: "3.1rem" }}>
                {lang === "en" ? "Service Hours:" : "Horas de Servicio:"}
              </div>
              <div style={{ marginTop: ".01rem" }}>
                <strong>{lang === "en" ? "Sunday" : "Domingo"}</strong>
                <div>
                  {lang === "en" ? "Sunday School" : "Escuela Dominical"} - 10:00am
                </div>
                <div>
                  {lang === "en" ? "Sunday Morning" : "Predicación"} - 11:00am
                </div>
                <div>
                  {lang === "en" ? "Evening Service" : "Predicación"} - 6:00pm
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <strong>{lang === "en" ? "Wednesday" : "Miércoles"}</strong>
                <div>
                  {lang === "en" ? "Bible Study" : "Estudio Bíblico"} - 6:00pm
                </div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <strong>{lang === "en" ? "Thursday" : "Jueves"}</strong>
                <div>{lang === "en" ? "Prayer Meeting" : "Oración"} - 6:00pm</div>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <strong>{lang === "en" ? "Saturday" : "Sábado"}</strong>
                <div>
                  {lang === "en" ? "Youth Group" : "Reunión de Jóvenes"} - 5:00pm
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                marginBottom: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <img
                src={locationImg}
                alt="Location"
                style={{ width: "200px", height: "200px" }}
              />

              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "Trebuchet MS",
                    fontSize: "3.1rem",
                    color: "#18243a",
                  }}
                >
                  <strong>
                    {lang === "en" ? "Our Location:" : "Nuestra Locación:"}
                  </strong>
                </div>
                <div
                  style={{
                    fontFamily: "Trebuchet MS",
                    fontSize: "2.1rem",
                    color: "#18243a",
                  }}
                >
                  804 S. 14th Ave <br />
                  Dodge City, KS 67801 <br />
                  620-255-3740
                </div>
              </div>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <a
                className="button"
                target="_blank"
                href="https://maps.app.goo.gl/vbZVNoeWtNqApurL6"
                rel="noreferrer"
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  padding: "1rem 3.5rem",
                  backgroundColor: "#18243a",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  fontFamily: "Trebuchet MS",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  textDecoration: "none"}}>
                
                <strong>{lang === "en" ? "Open in Maps" : "Abrir en Mapas"}</strong>
                
              </a>
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
                marginTop: "2rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.2358373031066!2d-100.03247139999999!3d37.737611099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87a71b211d5a52f5%3A0x82f74e9bb358df0d!2sIglesia%20templo%20Bautista%20fundamental%20Independiente!5e0!3m2!1sen!2sus!4v1774971327023!5m2!1sen!2sus"
                style={{
                  width: "100%",
                  height: "400px",
                  border: "5px solid #18243a",
                  borderRadius: "8px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Iglesia Templo Bautista"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal direction="up" delay={0.1}>
        <div
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          {[pic1, pic2, pic3, pic4, pic5].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              style={{
                width: "500px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
                marginRight: "1rem",
                display: "inline-block",
              }}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}