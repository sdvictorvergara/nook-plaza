import { Link } from "wouter";
import githubIcon from "@/assets/icon/github.svg";
import figmaIcon from "@/assets/icon/figma.svg";
import instagramIcon from "@/assets/icon/instagram.svg";
import "./Footer.css";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Acerca De" },
  { href: "/contact", label: "Contacto" },
  { href: "/news", label: "Noticias" },
  { href: "/terms", label: "Términos y Condiciones" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/sdvictorvergara/nook-plaza", icon: githubIcon, label: "GitHub" },
  { href: "https://www.instagram.com/", icon: instagramIcon, label: "Instagram" },
  { href: "https://www.figma.com/design/Fcv2dHPlrm3rj43PLI6jal/Nook-Plaza?node-id=0-1&t=Bl3awkTRxpKaWd8x-1", icon: figmaIcon, label: "Figma" },
];

const LEGAL_LINKS = ["Política de Privacidad", "Condiciones de Venta", "Cookies"];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nook Plaza</h3>
            <p>© 2024 Nook Plaza. Todos los derechos reservados.</p>
            <div className="footer-links">
              {LEGAL_LINKS.map((label, i) => (
                <span key={label}>
                  {i > 0 && <span className="divider">|</span>}
                  <Link href="/terms" className="footer-link">{label}</Link>
                </span>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul className="footer-nav-list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-nav-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Encuéntranos</h4>
            <div className="social-links">
              {SOCIAL_LINKS.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-link" title={label}>
                  <img src={icon} alt={label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Hecho con amor para la comunidad de Animal Crossing 🍃</p>
        </div>
      </div>
    </footer>
  );
}
