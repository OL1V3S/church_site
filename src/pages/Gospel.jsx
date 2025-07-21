export default function Gospel({ lang }) {
    const verses = {
      en: [
        {
          title: "All Have Sinned",
          reference: "Romans 3:23",
          text: "For all have sinned, and come short of the glory of God.",
          body:
            "Every person has sinned. No one is perfect. We have all broken God's law in one way or another — whether in action, thought, or heart."
        },
        {
          title: "Sin Has a Penalty",
          reference: "Romans 6:23a & Revelation 21:8",
          text:
            "For the wages of sin is death... The fearful, and unbelieving... and all liars, shall have their part in the lake which burneth with fire and brimstone.",
          body:
            "Sin brings spiritual death — separation from God in a real place called the Lake of Fire. This is the just punishment for sin."
        },
        {
          title: "God Loves You",
          reference: "Romans 5:8",
          text:
            "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
          body:
            "God didn’t want to leave us in our sin. He showed His love by sending Jesus Christ, who lived a perfect life and died in our place."
        },
        {
          title: "Jesus Paid the Price",
          reference: "Romans 3:24–25",
          text:
            "Christ Jesus: Whom God hath set forth to be a propitiation through faith in his blood...",
          body:
            "Jesus’ blood is the payment for sin. When He died on the cross, He made it possible for you to be forgiven and reconciled to God."
        },
        {
          title: "Salvation Is a Gift",
          reference: "Romans 6:23b",
          text:
            "...but the gift of God is eternal life through Jesus Christ our Lord.",
          body:
            "Salvation isn’t something we can earn — it’s a free gift that we receive by faith."
        },
        {
          title: "Believe and Call Upon Him",
          reference: "Romans 10:9,13",
          text:
            "That if thou shalt confess with thy mouth the Lord Jesus... For whosoever shall call upon the name of the Lord shall be saved.",
          body:
            "To be saved, believe in your heart that Jesus died and rose again — and call out to Him in faith, asking Him to save you."
        },
        {
          title: "God Will Keep You",
          reference: "1 Peter 5:10",
          text:
            "...after that ye have suffered a while, make you perfect, stablish, strengthen, settle you.",
          body:
            "God wants you to be saved and secure. Once saved, you're His child forever."
        }
      ],
      es: [
        {
          title: "Todos Han Pecado",
          reference: "Romanos 3:23",
          text: "Por cuanto todos pecaron, y están destituidos de la gloria de Dios.",
          body:
            "Cada persona ha pecado. Nadie es perfecto. Todos hemos quebrantado la ley de Dios de alguna manera — ya sea en acción, pensamiento o corazón."
        },
        {
          title: "El Pecado Tiene Pena",
          reference: "Romanos 6:23a y Apocalipsis 21:8",
          text:
            "Porque la paga del pecado es muerte... los cobardes e incrédulos... y todos los mentirosos tendrán su parte en el lago que arde con fuego y azufre.",
          body:
            "El pecado trae muerte espiritual — separación de Dios en un lugar real llamado el Lago de Fuego. Este es el castigo justo por el pecado."
        },
        {
          title: "Dios Te Ama",
          reference: "Romanos 5:8",
          text:
            "Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.",
          body:
            "Dios no quiso dejarnos en nuestro pecado. Él mostró Su amor enviando a Jesucristo, quien vivió una vida perfecta y murió en nuestro lugar."
        },
        {
          title: "Jesús Pagó el Precio",
          reference: "Romanos 3:24–25",
          text:
            "Cristo Jesús, a quien Dios puso como propiciación por medio de la fe en su sangre...",
          body:
            "La sangre de Jesús es el pago por el pecado. Cuando murió en la cruz, hizo posible que fuéramos perdonados y reconciliados con Dios."
        },
        {
          title: "La Salvación es un Regalo",
          reference: "Romanos 6:23b",
          text:
            "...mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.",
          body:
            "La salvación no es algo que podamos ganar — es un regalo gratuito que recibimos por fe."
        },
        {
          title: "Cree y Clama a Él",
          reference: "Romanos 10:9,13",
          text:
            "Que si confesares con tu boca que Jesús es el Señor... Porque todo aquel que invocare el nombre del Señor, será salvo.",
          body:
            "Para ser salvo, cree en tu corazón que Jesús murió y resucitó — y clama a Él con fe, pidiéndole que te salve."
        },
        {
          title: "Dios Te Guardará",
          reference: "1 Pedro 5:10",
          text:
            "...después que hayáis padecido un poco de tiempo, él mismo os perfeccione, afirme, fortalezca y establezca.",
          body:
            "Dios quiere que seas salvo y seguro. Una vez salvo, eres Su hijo para siempre."
        }
      ]
    };
  
    return (
      <div className="page" style={{ paddingBottom: "100px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontFamily: "American Typewriter",
            color: "#18243a",
            marginBottom: "2rem"
          }}
        >
          {lang === "en" ? "Do You Have a Home in Heaven?" : "¿Tienes un hogar en el cielo?"}
        </h1>
  
        <div
          style={{
            fontSize: "1.3rem",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "auto",
            fontFamily: "Trebuchet MS",
          }}
        >
          {(verses[lang] || verses.en).map((section, idx) => (
            <div key={idx} style={{ marginBottom: "2rem" }}>
              <h2 style={{ color: "#18243a" }}>{section.title}</h2>
              <p style={{ fontStyle: "italic" }}>{section.reference}</p>
              <p style={{ fontWeight: "bold" }}>
                “{section.text}”
              </p>
              <p>{section.body}</p>
            </div>
          ))}
  
          <div style={{ marginTop: "2rem", fontWeight: "bold" }}>
            {lang === "en"
              ? "Would you like to trust Christ today? Say this prayer:"
              : "¿Te gustaría confiar en Cristo hoy? Di esta oracion:"}
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p>
              {lang === "en"
                ? (
                  <em>
                    Dear God, I know I’m a sinner. I believe Jesus died for my sins and
                    rose again. I ask You now to forgive me, save me, and give me a home
                    in Heaven. I trust only in You. In Jesus’ name, Amen.
                  </em>
                ) : (
                  <em>
                    Querido Dios, sé que soy un pecador. Creo que Jesús murió por mis pecados y
                    resucitó. Te pido ahora que me perdones, me salves y me des un hogar
                    en el cielo. Confío solo en Ti. En el nombre de Jesús, Amén.
                  </em>
                )}
            </p>
          </div>
        </div>
      </div>
    );
  }
  