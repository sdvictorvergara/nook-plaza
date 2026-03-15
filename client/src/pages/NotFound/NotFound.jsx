import { Link } from "wouter";

const styles = {
  page: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#FFFDDB", textAlign: "center", padding: "2rem" },
  h1: { fontSize: "4rem", color: "#D24E42", marginBottom: "1rem" },
  h2: { fontSize: "1.5rem", color: "#2B2B2B", marginBottom: "1rem" },
  p: { fontSize: "1rem", color: "#3a2e1e", marginBottom: "2rem" },
  link: { backgroundColor: "#E3AD3B", color: "#2B2B2B", border: "2px solid #CA9A35", padding: "0.75rem 1.5rem", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" },
};

export default function NotFound() {
  return (
    <div style={styles.page}>
      <h1 style={styles.h1}>404</h1>
      <h2 style={styles.h2}>Página no encontrada</h2>
      <p style={styles.p}>Lo sentimos, la página que buscas no existe en Nook Plaza.</p>
      <Link href="/" style={styles.link}>Volver al Inicio</Link>
    </div>
  );
}
