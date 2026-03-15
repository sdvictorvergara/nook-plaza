import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import IslandCard from "@/components/IslandCard/IslandCard";
import IslandForm from "@/components/IslandForm/IslandForm";
import homeText from "@/data/homeText.json";
import nookPlazaLogo from "@/assets/icon/nookPlazaLogo.png";
import whoImage from "@/assets/card/whoCard.svg";
import aboutImage from "@/assets/card/aboutCard.svg";
import backgroundImage from "@/assets/bg/Background.svg";
import { subscribeToIslands, addIsland, updateIsland, deleteIsland } from "@/firebase/islandsService";
import "./Home.css";

const ALL_CATEGORIES = ["all", "rural", "oriental", "costera", "fantasía"];

export default function Home() {
  const [islands, setIslands] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingIsland, setEditingIsland] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    return subscribeToIslands((data) => {
      setIslands(data);
      setIsLoading(false);
      setError(null);
    });
  }, []);

  const filteredIslands = islands.filter((island) => {
    return selectedCategory === "all" || island.category === selectedCategory;
  });

  const withSaving = async (fn) => {
    try {
      setIsSaving(true);
      await fn();
    } catch {
      setError("No se pudo completar la operación. Inténtalo de nuevo.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleSave = (formData) =>
    withSaving(async () => {
      if (editingIsland) {
        await updateIsland(editingIsland.id, formData);
      } else {
        await addIsland(formData);
      }
      setIsFormVisible(false);
      setEditingIsland(null);
    });

  const handleEdit = (island) => {
    setEditingIsland(island);
    setIsFormVisible(true);
  };

  const handleDelete = (id) =>
    withSaving(() => deleteIsland(id));

  const handleCancelForm = () => {
    setIsFormVisible(false);
    setEditingIsland(null);
  };

  return (
    <div className="home-container">
      <Header />
      <main>
        <section
          className="intro-card"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="intro-card-content">
            <figure>
              <img src={nookPlazaLogo} alt="NookPlaza Logo" />
              <figcaption>Foro para subir tus islas y que todos lo vean!</figcaption>
            </figure>
            <div className="eslogan">
              <p>Lista para visitar otros pueblos?</p>
              <a href="#islands-section" className="island-viewer-btn">VER ISLAS</a>
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
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "all" ? "Todas" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <button className="add-island-btn" onClick={() => { setEditingIsland(null); setIsFormVisible(true); }}>
              + Añadir isla
            </button>
          </div>

          {error && (
            <p className="islands-error" role="alert">
              {error}
              <button onClick={() => setError(null)} className="islands-error-close">✕</button>
            </p>
          )}

          {isFormVisible && (
            <div className="islands-form-overlay">
              <IslandForm
                initialData={editingIsland}
                onSave={handleSave}
                onCancel={handleCancelForm}
                saving={isSaving}
              />
            </div>
          )}

          {isLoading ? (
            <p className="islands-loading">Cargando islas…</p>
          ) : filteredIslands.length === 0 ? (
            <p className="islands-empty">No se encontraron islas con ese criterio.</p>
          ) : (
            <div className="islands-container">
              {filteredIslands.map((island) => (
                <IslandCard key={island.id} island={island} onEdit={handleEdit} onDelete={handleDelete} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}