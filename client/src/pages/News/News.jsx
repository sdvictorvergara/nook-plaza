import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NewsCard from "@/components/NewsCard/NewsCard";
import "./News.css";

const NEWS = [
  { id: 1, title: "Animal Crossing: New Horizons alcanza 44 millones de copias vendidas", summary: "Nintendo confirma que el juego sigue siendo uno de los títulos más vendidos de Switch, con millones de jugadores activos en todo el mundo.", category: "Ventas", image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero" },
  { id: 2, title: "Nueva actualización gratuita trae eventos de temporada", summary: "Los jugadores podrán disfrutar de nuevas decoraciones, personajes especiales y misiones limitadas durante las próximas semanas.", category: "Actualización", image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/screenshot02" },
  { id: 3, title: "Los mejores diseños de islas de la comunidad", summary: "Repasamos las islas más creativas del mes: desde diseños medievales hasta paraísos tropicales modernos.", category: "Comunidad", image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/screenshot03" },
  { id: 4, title: "Guía: cómo conseguir a los aldeanos más raros", summary: "Los métodos más efectivos para invitar a los personajes más buscados de Animal Crossing a tu isla.", category: "Guía", image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/screenshot04" },
  { id: 5, title: "Tom Nook celebra el aniversario con regalos especiales", summary: "En el cuarto aniversario del lanzamiento, Tom Nook ha preparado sorpresas para todos los habitantes de las islas.", category: "Evento", image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/screenshot05" },
  { id: 6, title: "Torneo de diseño de islas: ¡inscríbete ahora!", summary: "La comunidad de Nook Plaza organiza su primer torneo de diseño. Los ganadores verán su isla destacada en portada.", category: "Comunidad", image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/screenshot-gallery/screenshot06" },
];

const CATEGORIES = ["Todas", "Ventas", "Actualización", "Comunidad", "Guía", "Evento"];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filteredNews = NEWS.filter(
    (item) => selectedCategory === "Todas" || item.category === selectedCategory
  );

  return (
    <div className="news-container">
      <Header />
      <main className="news-main">
        <section className="news-hero">
          <h1>Noticias</h1>
          <p className="news-subtitle">Últimas novedades del mundo de Animal Crossing</p>
          <a href="/news.xml" target="_blank" rel="noopener noreferrer" className="rss-link" title="Ver feed RSS">
            <span className="rss-icon">📡</span> Feed RSS
          </a>
        </section>

        <section className="news-content">
          <div className="news-filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`news-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="news-grid">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} newsItem={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
