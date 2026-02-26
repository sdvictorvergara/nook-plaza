import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import homeText from "@/data/homeText.json";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <Header />
      <main className="about-main">
        <section className="about-hero">
          <h1>Acerca de Nook Plaza</h1>
          <p className="about-subtitle">
            Un proyecto dedicado a la comunidad de Animal Crossing
          </p>
        </section>

        <section className="about-content">
          <div className="about-text">
            <h2>¿Qué es Nook Plaza?</h2>
            {homeText.about.map((paragraph, index) => (
              <p key={index} className="about-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about-features">
            <h2>Características Principales</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Comparte tus Islas</h3>
                <p>
                  Sube fotos y detalles de tu isla para que otros jugadores la
                  conozcan y se inspiren en tu diseño.
                </p>
              </div>
              <div className="feature-card">
                <h3>Descubre Pueblos</h3>
                <p>
                  Explora las islas de otros jugadores y encuentra inspiración
                  para mejorar la tuya.
                </p>
              </div>
              <div className="feature-card">
                <h3>Comunidad Activa</h3>
                <p>
                  Conecta con otros jugadores de Animal Crossing y forma parte
                  de una comunidad vibrante.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
