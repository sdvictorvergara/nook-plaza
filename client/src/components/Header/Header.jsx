import { Link } from "wouter";
import logo from "@/assets/icon/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-link">
          <img src={logo} alt="NookPlaza Logo" className="logo" />
        </Link>

        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link href="/" className="nav-link">
                INICIO
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                ACERCA DE
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link">
                CONTACTO
              </Link>
            </li>
            <li>
              <Link href="/terms" className="nav-link">
                TÉRMINOS
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-buttons">
          <a href="#islands-section" className="island-uploader-btn">
            ¡VER ISLAS!
          </a>
        </div>
      </div>
    </header>
  );
}
