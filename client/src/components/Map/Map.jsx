import "./Map.css";

export default function Map() {
  return (
    <div className="map-container">
      <h3 className="map-title">Encuéntranos</h3>
      <iframe
        className="map-iframe"
        title="Nook Plaza Location"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-3.7038%2C40.4168%2C-3.6838%2C40.4268&layer=mapnik&marker=40.4168%2C-3.6938"
        allowFullScreen
        loading="lazy"
      />
      <p className="map-caption">
        Madrid, España — Sede de la comunidad de Nook Plaza
      </p>
    </div>
  );
}
