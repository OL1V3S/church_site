export default function About({ lang }) {
  const content = {
    en: {
      title: "What We Believe",
      paragraphs: [
        "We are an old-fashioned Independent Baptist Church. We hold to the authority of Scripture, using the King James Bible exclusively in our preaching and teaching.",
        "Our worship is traditional, featuring classic hymns and reverent music that honors the Lord.",
        "We believe in the death, burial, and resurrection of Jesus Christ for the salvation of sinners by grace through faith.",
        "Our mission is to glorify God, edify believers, and preach the Gospel to the world — both locally and globally."
      ]
    },
    es: {
      title: "Lo Que Creemos",
      paragraphs: [
        "Somos una iglesia Bautista Independiente. Sostenemos la autoridad de las Escrituras y usamos exclusivamente la Biblia Reina-Valera 1960 para predicar y enseñar.",
        "Nuestra adoración es tradicional, con himnos clásicos y música reverente que honra al Señor.",
        "Creemos en la muerte, sepultura y resurrección de Jesucristo para la salvación de los pecadores por gracia mediante la fe.",
        "Nuestra misión es glorificar a Dios, edificar a los creyentes y predicar el Evangelio al mundo — tanto local como globalmente."
      ]
    }
  };

  return (
    <article className="about-card">
      <header className="page-header about-header">
        <p className="section-eyebrow">
          {lang === "en" ? "Our Faith" : "Nuestra Fe"}
        </p>
        <h1>
        {content[lang].title}
        </h1>
      </header>

      <div className="about-copy">
        {content[lang].paragraphs.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </article>
  );
}
