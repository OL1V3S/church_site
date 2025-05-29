import React from "react";

export default function About({ lang }) {
  const content = {
    en: {
      title: "What We Believe",
      paragraphs: [
        "We are an old-fashioned Independent Baptist Church. We hold to the authority of Scripture, using the King James Bible exclusively in our preaching and teaching.",
        "Our worship is traditional, featuring classic hymns and reverent music that honors the Lord.",
        "We believe in the death, burial, and resurrection of Jesus Christ for the salvation of sinners by grace through faith.",
        "We are not Calvinistic in doctrine, nor do we embrace modern, contemporary church trends.",
        "Our mission is to glorify God, edify believers, and preach the Gospel to the world — both locally and globally."
      ]
    },
    es: {
      title: "Lo Que Creemos",
      paragraphs: [
        "Somos una iglesia Bautista Independiente. Sostenemos la autoridad de las Escrituras y usamos exclusivamente la Biblia Reina-Valera 1960 para predicar y enseñar.",
        "Nuestra adoración es tradicional, con himnos clásicos y música reverente que honra al Señor.",
        "Creemos en la muerte, sepultura y resurrección de Jesucristo para la salvación de los pecadores por gracia mediante la fe.",
        "No seguimos doctrinas calvinistas ni adoptamos las tendencias modernas y contemporáneas de la iglesia.",
        "Nuestra misión es glorificar a Dios, edificar a los creyentes y predicar el Evangelio al mundo — tanto local como globalmente."
      ]
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "2rem auto",
        padding: "2rem",
        backgroundColor: "#DaDaDa",
        borderRadius: "12px",
        textAlign: "center"
      }}
    >
      {/* Title */}
      <div
        style={{
          marginBottom: "1.5rem",
          color: "#18243a",
          fontFamily: "American Typewriter",
          fontSize: "2.5rem",
          fontWeight: "bold"
        }}
      >
        {content[lang].title}
      </div>

      {/* Paragraphs */}
      <div
        style={{
          color: "black",
          fontFamily: "American Typewriter",
          fontSize: "1.3rem",
          lineHeight: "1.8",
          textAlign: "left"
        }}
      >
        {content[lang].paragraphs.map((text, idx) => (
          <p key={idx} style={{ marginBottom: "1.2rem" }}>{text}</p>
        ))}
      </div>
    </div>
  );
}
