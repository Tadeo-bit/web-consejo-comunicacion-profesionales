import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        
        {/* Badge interactivo como ancla */}
        <a href="#anteproyecto" className="hero-badge">
          <span className="badge-dot"></span>
          Anteproyecto de Ley en marcha
          <span className="badge-arrow">→</span>
        </a>

        {/* Encabezado e impacto */}
        <h1 className="hero-title">
          Hacia la jerarquización de los <span className="text-highlight">Profesionales de la Comunicación</span> en Córdoba
        </h1>

        <p className="hero-subtitle">
          Impulsamos la creación del Consejo Profesional para garantizar el marco legal, la ética y el reconocimiento del ejercicio comunicacional en toda la provincia.
        </p>

        {/* Acciones principales */}
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Sumate a la iniciativa</a>
          <a href="#anteproyecto" className="btn-secondary">Conocé el Anteproyecto</a>
        </div>

        {/* Banner horizontal full-width */}
        <div className="hero-banner-wrapper">
          <img 
            src="/banner-consejo.png" 
            alt="Consejo de Profesionales de la Comunicación Córdoba" 
            className="hero-banner-img" 
          />
        </div>

      </div>
    </section>
  );
}