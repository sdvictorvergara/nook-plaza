import "./IslandCard.css";

export default function IslandCard({ island, onEdit, onDelete }) {
  return (
    <div className="island-card">
      <div
        className="island-card-image"
        style={{ backgroundImage: island.image ? `url(${island.image})` : "none" }}
      />
      <div className="island-card-body">
        <span className="island-card-category">{island.category}</span>
        <h3 className="island-card-title">{island.name}</h3>
        <p className="island-card-description">{island.description}</p>
      </div>
      <div className="island-card-actions">
        <button
          className="island-card-edit-btn"
          onClick={() => onEdit(island)}
          aria-label={`Editar ${island.name}`}
        >
          Editar
        </button>
        <button
          className="island-card-delete-btn"
          onClick={() => onDelete(island.id)}
          aria-label={`Borrar ${island.name}`}
        >
          Borrar
        </button>
      </div>
    </div>
  );
}
