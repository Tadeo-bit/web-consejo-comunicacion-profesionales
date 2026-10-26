import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Fila Principal: Branding, Menú y Contacto */}
        <div className="footer-grid">
          
          {/* Columna 1: Branding */}
          <div className="footer-brand">
            <div className="footer-logo-wrapper">
              <img 
                src="/perfil-consejo.png" 
                alt="Consejo de Profesionales de la Comunicación Córdoba" 
                className="footer-logo" 
              />
              <span className="footer-brand-title">Consejo Profesional de la Comunicación</span>
            </div>
            <p className="footer-brand-desc">
              Impulsando la jerarquización y regulación del ejercicio profesional en la Provincia de Córdoba.
            </p>
          </div>

          {/* Columna 2: Navegación Rápida */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#nosotros">Quiénes Somos</a></li>
              <li><a href="#porque-un-consejo">¿Por qué un Consejo?</a></li>
              <li><a href="#novedades">Novedades</a></li>
              <li><a href="#contacto">Sumate / Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Información Oficial */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-contact-list">
              <li>📍 Córdoba, Argentina</li>
              <li>
                ✉️ <a href="mailto:cordobacomunicadores@gmail.com">cordobacomunicadores@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra Inferior: Copyright y Firma de Desarrollo */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Consejo de Profesionales de la Comunicación de Córdoba. Todos los derechos reservados.
          </p>
          <p className="footer-developer">
            Desarrollado por <span className="developer-name">Tadeo Otaola</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;