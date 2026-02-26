import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./Terms.css";

const LAST_UPDATED = "1 de enero de 2024";

const SECTIONS = [
  {
    id: "aceptacion",
    title: "1. Aceptación de los Términos",
    content:
      "Al acceder y utilizar Nook Plaza, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder al servicio. Nook Plaza se reserva el derecho de actualizar estos términos en cualquier momento.",
  },
  {
    id: "uso",
    title: "2. Uso de la Plataforma",
    content:
      "Nook Plaza es una plataforma comunitaria dedicada a los jugadores de Animal Crossing: New Horizons. Puedes usarla para compartir tu isla, descubrir las islas de otros jugadores y conectar con la comunidad. Está prohibido publicar contenido ofensivo, spam o cualquier material que viole los derechos de terceros.",
  },
  {
    id: "contenido",
    title: "3. Contenido del Usuario",
    content:
      "Al subir contenido a Nook Plaza (imágenes, descripciones, comentarios), confirmas que tienes los derechos necesarios sobre dicho contenido. Conservas la propiedad de tu contenido, pero nos concedes una licencia no exclusiva para mostrarlo dentro de la plataforma con el fin de prestar el servicio.",
  },
  {
    id: "privacidad",
    title: "4. Política de Privacidad",
    content:
      "Nook Plaza recopila únicamente la información necesaria para el funcionamiento del servicio: nombre de usuario, correo electrónico y el contenido que compartes voluntariamente. No vendemos tus datos a terceros. Puedes solicitar la eliminación de tu cuenta y tus datos en cualquier momento escribiéndonos a info@nookplaza.com.",
  },
  {
    id: "cookies",
    title: "5. Política de Cookies",
    content:
      "Utilizamos cookies propias para mantener tu sesión activa y mejorar tu experiencia de navegación. No usamos cookies de terceros con fines publicitarios. Puedes deshabilitar las cookies desde la configuración de tu navegador, aunque algunas funciones de la plataforma podrían verse afectadas.",
  },
  {
    id: "propiedad",
    title: "6. Propiedad Intelectual",
    content:
      "Nook Plaza es un proyecto de fans sin ánimo de lucro. Animal Crossing: New Horizons y todos sus personajes, nombres e imágenes son propiedad de Nintendo Co., Ltd. Este sitio no está afiliado, respaldado ni patrocinado por Nintendo. Las imágenes del juego se usan con fines ilustrativos dentro del ámbito del fair use.",
  },
  {
    id: "responsabilidad",
    title: "7. Limitación de Responsabilidad",
    content:
      "Nook Plaza se ofrece «tal cual», sin garantías de ningún tipo. No nos hacemos responsables de interrupciones del servicio, pérdida de datos ni de los contenidos publicados por los usuarios. Nos reservamos el derecho de eliminar cualquier contenido o cuenta que incumpla estas condiciones.",
  },
  {
    id: "contacto",
    title: "8. Contacto",
    content:
      "Si tienes dudas sobre estos Términos y Condiciones, puedes contactarnos en info@nookplaza.com o a través del formulario de la página de Contacto. Haremos todo lo posible por responderte en un plazo de 48 horas.",
  },
];

export default function Terms() {
  return (
    <div className="terms-container">
      <Header />
      <main className="terms-main">
        <section className="terms-hero">
          <div className="terms-hero-badge">Documento legal</div>
          <h1>Términos y Condiciones</h1>
          <p className="terms-subtitle">
            Lee atentamente antes de usar Nook Plaza
          </p>
          <p className="terms-date">Última actualización: {LAST_UPDATED}</p>
        </section>

        <div className="terms-layout">
          <aside className="terms-index">
            <h2>Índice</h2>
            <ul className="terms-index-list">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="terms-index-link">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <article className="terms-content">
            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="terms-section">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}

            <div className="terms-acceptance">
              <p>
                Al usar Nook Plaza confirmas que has leído y aceptado estos
                Términos y Condiciones en su totalidad.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
