export default function IslandCard({ island }) {
  return (
    <div className="island-card">
      <div 
        className="island-card-image" 
        style={{ backgroundImage: `url(${island.image})` }} 
      />
      <h3 className="island-card-title">{island.name}</h3>
      <p className="island-card-description">{island.description}</p>
    </div>
  );
}
