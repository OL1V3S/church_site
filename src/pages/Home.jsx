import React from "react";

export default function Home({ lang }) {
  const content = {
    en: {
      title: "Welcome to Iglesia Templo Bautista",
      subtitle: "",
      description: `We are an old-fashioned Independent Baptist Church. We sing the old-time hymns and preach out of the old King James Bible exclusively, believing it to be the Word of God. We are not contemporary in our worship, we are not Calvinistic in our doctrine. We strive to be a lighthouse proclaiming the Gospel of Jesus Christ both locally and abroad.`,
    },
    es: {
      title: "Bienvenido a Iglesia Templo Bautista",
      subtitle: "",
      description: `Somos una iglesia Bautista Independiente de la antigua escuela. Cantamos himnos tradicionales y predicamos exclusivamente de la Biblia Reina-Valera 1960, creyendo que es la Palabra de Dios. No somos contemporáneos en nuestra adoración, ni somos calvinistas en nuestra doctrina. Nos esforzamos por ser un faro que proclame el Evangelio de Jesucristo tanto localmente como en el extranjero.`,
    },
  };

  return (
    <div>
      {/* Cover section with logo */}
      <div style={{ position: "relative", height: "60vh", width: "100%" }}>
        <img
          src="/pictures/church.png"
          alt="Church Cover"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            filter: "brightness(0.6)",
            
          }}
        />
        <img
          src="/pictures/logo1.png"
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
          backgroundColor: "#D3D3D3",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        {/* Title */} 
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ color: "#889BAE", fontFamily: "Arial", fontSize: "1.8rem", marginTop: "2rem" }}>
                {lang === "en" ? "Welcome to" : "Bienvenido a"}
            </div>
            <div style={{ color: "#18243a", fontFamily: "Georgia", fontSize: "2.5rem", fontWeight: "bold" }}>
                Iglesia Templo Bautista
            </div>
            </div>


        <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          {content[lang].subtitle}
        </p>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          {content[lang].description}
        </p>
      </div>
    </div>
  );
}
