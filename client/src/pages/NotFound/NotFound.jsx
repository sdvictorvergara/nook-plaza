import { Link } from "wouter";

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: '#FFFDDB',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#D24E42', marginBottom: '1rem' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#2B2B2B', marginBottom: '1rem' }}>
        Página no encontrada
      </h2>
      <p style={{ fontSize: '1rem', color: '#3a2e1e', marginBottom: '2rem' }}>
        Lo sentimos, la página que buscas no existe en Nook Plaza.
      </p>
      <Link href="/" style={{
        backgroundColor: '#E3AD3B',
        color: '#2B2B2B',
        border: '2px solid #CA9A35',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        textDecoration: 'none',
        transition: 'all 0.3s ease'
      }}>
        Volver al Inicio
      </Link>
    </div>
  );
}
