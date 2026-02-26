import { Link } from "wouter";
import githubIcon from "@/assets/icon/github.svg";
import figmaIcon from "@/assets/icon/figma.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nook Plaza</h3>
            <p>© 2024 Nook Plaza. Todos los derechos reservados.</p>
            <div className="footer-links">
              <Link href="/terms" className="footer-link">
                Política de Privacidad
              </Link>
              <span className="divider">|</span>
              <Link href="/terms" className="footer-link">
                Condiciones de Servicio
              </Link>
              <span className="divider">|</span>
              <Link href="/terms" className="footer-link">
                Cookies
              </Link>
            </div>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul className="footer-nav-list">
              <li>
                <Link href="/" className="footer-nav-link">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-nav-link">
                  Acerca De
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-nav-link">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terms" className="footer-nav-link">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Encuéntranos</h4>
            <div className="social-links">
              <a
                href="https://github.com/sdvictorvergara/nook-plaza"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.figma.com/design/Fcv2dHPlrm3rj43PLI6jal/Nook-Plaza?node-id=0-1&t=Bl3awkTRxpKaWd8x-1"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Figma"
              >
                <img src={figmaIcon} alt="Figma" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Hecho con amor para la comunidad de Animal Crossing</p>
        </div>
      </div>
    </footer>
  );
}
