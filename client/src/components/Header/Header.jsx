import { useState } from "react";
import { Link, useLocation } from "wouter";
import logo from "@/assets/icon/logo.svg";
import "./Header.css";

const NAV_LINKS = [
  { href: "/", label: "INICIO" },
  { href: "/about", label: "ACERCA DE" },
  { href: "/contact", label: "CONTACTO" },
  { href: "/news", label: "NOTICIAS" },
  { href: "/terms", label: "TÉRMINOS" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  const handleVerIslas = (e) => {
    e.preventDefault();
    closeMenu();
    const scrollToIslands = () =>
      document.getElementById("islands-section")?.scrollIntoView({ behavior: "smooth" });

    if (location === "/" || location === "/home") {
      scrollToIslands();
    } else {
      navigate("/");
      setTimeout(scrollToIslands, 100);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="NookPlaza Logo" className="logo" />
        </Link>

        <button
          className={`hamburger-btn ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
          <ul className="nav-list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="nav-link" onClick={closeMenu}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-buttons">
          <a href="#islands-section" className="island-uploader-btn" onClick={handleVerIslas}>
            ¡VER ISLAS!
          </a>
        </div>
      </div>
    </header>
  );
}
