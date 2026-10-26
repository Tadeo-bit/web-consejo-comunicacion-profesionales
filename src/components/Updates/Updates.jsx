import React from 'react';
import './Updates.css';

const Updates = () => {
  const redes = [
    {
      id: 'instagram',
      nombre: 'Instagram',
      usuario: '@comunicadores.cba',
      url: 'https://www.instagram.com/comunicadores.cba/',
      icono: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: 'linkedin',
      nombre: 'LinkedIn',
      usuario: 'Profesionales de la Comunicación Córdoba',
      url: 'https://www.linkedin.com/in/profesionales-de-la-comunicaci%C3%B3n-c%C3%B3rdoba-aa489343b/',
      icono: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      id: 'facebook',
      nombre: 'Facebook',
      usuario: 'Comunicadores.Cba',
      url: 'https://www.facebook.com/Comunicadores.Cba',
      icono: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="novedades" className="updates-section">
      <div className="updates-container">
        
        {/* Encabezado */}
        <div className="updates-header">
          <span className="section-badge">Comunidad & Difusión</span>
          <h2 className="updates-title">Novedades</h2>
          <p className="updates-intro">
            Conocé las últimas novedades y seguí el avance del Anteproyecto de Ley día a día a través de nuestros canales oficiales.
          </p>
        </div>

        {/* Tarjetas de Redes */}
        <div className="social-grid">
          {redes.map((red) => (
            <a
              key={red.id}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="social-icon-wrapper">
                {red.icono}
              </div>
              <div className="social-info">
                <h3 className="social-name">{red.nombre}</h3>
                <span className="social-user">{red.usuario}</span>
              </div>
              <span className="social-arrow">→</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Updates;