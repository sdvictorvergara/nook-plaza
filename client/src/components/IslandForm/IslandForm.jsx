import { useState, useEffect } from "react";
import "./IslandForm.css";

const EMPTY_FORM = { name: "", description: "", category: "rural", image: "" };
const CATEGORIES = ["rural", "oriental", "costera", "fantasía"];

export default function IslandForm({ initialData, onSave, onCancel, saving = false }) {
  const [formData, setFormData] = useState(EMPTY_FORM);

  useEffect(() => {
    setFormData(initialData ?? EMPTY_FORM);
  }, [initialData]);

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.description.trim()) return;
    onSave(formData);
    setFormData(EMPTY_FORM);
  };

  return (
    <form className="island-form" onSubmit={handleSubmit}>
      <h3 className="island-form-title">{initialData ? "Editar isla" : "Nueva isla"}</h3>

      <div className="island-form-group">
        <label htmlFor="island-name">Nombre *</label>
        <input id="island-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre de la isla" required />
      </div>

      <div className="island-form-group">
        <label htmlFor="island-description">Descripción *</label>
        <textarea id="island-description" name="description" value={formData.description} onChange={handleChange} placeholder="Describe tu isla..." rows={3} required />
      </div>

      <div className="island-form-group">
        <label htmlFor="island-category">Categoría</label>
        <select id="island-category" name="category" value={formData.category} onChange={handleChange}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>

      <div className="island-form-group">
        <label htmlFor="island-image">URL de imagen (opcional)</label>
        <input id="island-image" type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
      </div>

      <div className="island-form-actions">
        <button type="submit" className="island-form-save-btn" disabled={saving}>
          {saving ? "Guardando…" : initialData ? "Guardar cambios" : "Añadir isla"}
        </button>
        <button type="button" className="island-form-cancel-btn" onClick={onCancel} disabled={saving}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
