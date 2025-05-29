import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Image imports
import churchImg from "../assets/church.png";
import logoImg from "../assets/logo.png";
import clockImg from "../assets/clock.png";
import locationImg from "../assets/location.png";
import HeavenPrompt from "../components/HeavenPrompt";
;

export default function Home({ lang }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Cover section with logo */}
      <div style={{ position: "relative", height: "60vh", width: "100%" }}>
        <img
          src={churchImg}
          alt="Church Cover"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "brightness(0.6)",
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
          }}
        />
      </div>

      {/* Text content section */}
      <div
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "2rem",
          backgroundColor: "#DaDaDa",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div
            style={{
              color: "#889BAE",
              fontFamily: "Brush Script MT",
              fontSize: "3rem",
              marginTop: "2rem",
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

        {/* Description */}
        <div
          style={{
            color: "black",
            fontFamily: "American Typewriter",
            fontSize: "1.5rem",
            lineHeight: "1.6",
            textAlign: "center",
          }}
        >
          {lang === "en"
            ? "We are an old-fashioned Independent Baptist Church. We sing the old-time hymns and preach out of the King James Bible exclusively, believing it to be the Word of God. We are not contemporary in our worship, we are not Calvinistic in our doctrine. We strive to be a lighthouse proclaiming the Gospel of Jesus Christ both locally and abroad."
            : "Somos una iglesia Bautista Independiente. Cantamos himnos tradicionales y predicamos exclusivamente de la Biblia Reina-Valera 1960, creyendo que es la Palabra de Dios. No somos contemporáneos en nuestra adoración, ni somos calvinistas en nuestra doctrina. Nos esforzamos por ser un faro que proclame el Evangelio de Jesucristo tanto localmente como en el extranjero."}
        </div>

        {/* Statement of Faith Button */}
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
            fontFamily:"American Typewriter",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
       {lang === "en" ? "Our Doctrine" : "Nuestra Doctrina"}
        </button>

        {/* Clock Picture and Hours */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <img
            src={clockImg}
            alt="Clock"
            style={{ width: "200px", height: "200px", marginTop: "6px" }}
          />

          <div
            style={{
              textAlign: "left",
              fontSize: "2rem",
              color: "#18243a",
              fontFamily: "American Typewriter",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "3.1rem" }}>
              {lang === "en" ? "Service Hours:" : "Horas de Servicio:"}
            </div>

            <div style={{ marginTop: ".01rem" }}>
              <strong>{lang === "en" ? "Sunday" : "Domingo"}</strong>
              <div>
                {lang === "en"
                  ? "Sunday School"
                  : "Escuela Dominical"} - 10:00am
              </div>
              <div>{lang === "en" ? "Sunday Morning" : "Predicacion"} - 11:00am</div>
              <div>{lang === "en" ? "Evening Service" : "Predicacion"} – 6:00pm</div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <strong>{lang === "en" ? "Wednesday" : "Miércoles"}</strong>
              <div>{lang === "en" ? "Bible Study" : "Estudio Bíblico"} - 6:00pm</div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <strong>{lang === "en" ? "Thursday" : "Jueves"}</strong>
              <div>{lang === "en" ? "Prayer Meeting" : "Oración"} - 6:00pm</div>
            </div>

            <div style={{ marginTop: "1rem" }}>
              <strong>{lang === "en" ? "Saturday" : "Sábado"}</strong>
              <div>{lang === "en" ? "Youth Group" : "Reunión de Jóvenes"} - 5:00pm</div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2rem",
            gap: "1rem",
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
                fontFamily: "American Typewriter",
                fontSize: "3.1rem",
                color: "#18243a",
              }}
            >
              <strong>{lang === "en" ? "Our Location:" : "Nuestra Locación:"}</strong>
              <br />
            </div>

            <div
              style={{
                fontFamily: "American Typewriter",
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
      </div>

   
    </div>
  );
}
