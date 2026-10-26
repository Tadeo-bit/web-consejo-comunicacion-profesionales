import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        
        {/* Badge interactivo como ancla */}
        <a href="#porque-un-consejo" className="hero-badge">
          <span className="badge-dot"></span>
          Potenciá la profesión
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
          <a href="#contacto" className="btn-primary">Sumate a la iniciativa</a>
          <a href="#porque-un-consejo" className="btn-secondary">¿Por qué un Consejo?</a>
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