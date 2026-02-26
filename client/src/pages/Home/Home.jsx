import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import IslandCard from "@/components/IslandCard/IslandCard";
import homeText from "@/data/homeText.json";
import nookPlazaLogo from "@/assets/icon/nookPlazaLogo.png";
import whoImage from "@/assets/card/whoCard.svg";
import aboutImage from "@/assets/card/aboutCard.svg";
import backgroundImage from "@/assets/bg/Background.svg";
import "./Home.css";

const BACKGROUND_IMAGE = backgroundImage;

const islandsData = [
  {
    id: 1,
    name: "Pueblos Integrantes",
    description: "Esto es un proyecto con la finalidad de dar visibilidad a las islas de los jugadores y darles una forma de no perder los recuerdos de sus islas.",
    image: "../../assets/pj/Casas.png",
  },
  {
    id: 2,
    name: "Vecinos",
    description: "Esto es un proyecto con la finalidad de dar visibilidad a las islas de los jugadores y darles una forma de no perder los recuerdos de sus islas.",
    image: "../../assets/pj/vecinos.png",
  },
  {
    id: 3,
    name: "Por qué unirse",
    description: "Esto es un proyecto con la finalidad de dar visibilidad a las islas de los jugadores y darles una forma de no perder los recuerdos de sus islas.",
    image: "../../assets/pj/aldeanos.png",
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="home-container">
      <Header />
      <main>
        <section
          className="intro-card"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="intro-card-content">
            <figure>
              <img src={nookPlazaLogo} alt="NookPlaza Logo" />
              <figcaption>Foro para subir tus islas y que todos lo vean!</figcaption>
            </figure>
            <div className="eslogan">
              <p>Lista para visitar otros pueblos?</p>
              <a href="#islands-section" className="island-viewer-btn">
                VER ISLAS
              </a>
            </div>
          </div>
        </section>

        <div className="apple-border" />

        <section className="who-section">
          <figure className="who-card">
            <img src={whoImage} alt="Quiénes somos" />
            <figcaption>
              <p className="who-card-title">Quiénes somos</p>
              <p>{homeText.whoText[1]}</p>
            </figcaption>
          </figure>
        </section>

        <section className="about-section">
          <figure className="about-card">
            <img src={aboutImage} alt="Qué hacemos" />
            <figcaption>
              <p className="about-card-title">Qué hacemos</p>
              <p>{homeText.about[1]}</p>
            </figcaption>
          </figure>
        </section>

        <section id="islands-section" className="islands-section">
          <div className="islands-header">
            <h2>Nuestras Islas</h2>
            <div className="category-filter">
              <button
                className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                Todas
              </button>
              <button
                className={`filter-btn ${selectedCategory === "pueblos" ? "active" : ""}`}
                onClick={() => setSelectedCategory("pueblos")}
              >
                Pueblos
              </button>
              <button
                className={`filter-btn ${selectedCategory === "vecinos" ? "active" : ""}`}
                onClick={() => setSelectedCategory("vecinos")}
              >
                Vecinos
              </button>
            </div>
          </div>

          <div className="islands-container">
            {islandsData.map((island) => (
              <IslandCard key={island.id} island={island} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
