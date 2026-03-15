import "./NewsCard.css";

export default function NewsCard({ newsItem }) {
  return (
    <article className="news-card">
      <div className="news-card-image">
        <img src={newsItem.image} alt={newsItem.title} />
      </div>
      <div className="news-card-body">
        <span className="news-card-category">{newsItem.category}</span>
        <h3 className="news-card-title">{newsItem.title}</h3>
        <p className="news-card-summary">{newsItem.summary}</p>
      </div>
    </article>
  );
}
