import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Isotipo / Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <img 
            src="/perfil-consejo.png" 
            alt="Consejo de Profesionales de la Comunicación Córdoba" 
            className="navbar-logo-icon" 
          />
      
        </a>

        {/* Botón Hamburguesa para Mobile */}
        <button 
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links de navegación */}
        <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" className="navbar-link" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#about" className="navbar-link" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a href="#anteproyecto" className="navbar-link" onClick={() => setMenuOpen(false)}>Proyecto de Ley</a>
          <a href="#updates" className="navbar-link" onClick={() => setMenuOpen(false)}>Novedades</a>
          <a href="#contact" className="navbar-btn" onClick={() => setMenuOpen(false)}>Sumate</a>
        </nav>
      </div>
    </header>
  );
}