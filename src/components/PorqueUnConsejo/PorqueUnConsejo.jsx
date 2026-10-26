import React from 'react';
import './PorqueUnConsejo.css';

const PorqueUnConsejo = () => {
  const beneficios = [
    {
      id: 1,
      tag: "Aranceles y Costos",
      title: "Nomenclador de Honorarios",
      desc: "Herramienta orientativa basada en costos para presupuestar y fundamentar el valor real de tu trabajo ante empresas y clientes."
    },
    {
      id: 2,
      tag: "Inserción Laboral",
      title: "Banco de Profesionales",
      desc: "Catálogo digital público con títulos validados ante la Bolsa de Comercio, cámaras empresariales y el sector público."
    },
    {
      id: 3,
      tag: "Incumbencias",
      title: "Categorías Profesional A y B",
      desc: "Reconocimiento y complementariedad entre Licenciados (Estrategia) y Técnicos (Ejecución táctica) sin trabas para el mercado."
    },
    {
      id: 4,
      tag: "Desarrollo",
      title: "Formación e Innovación",
      desc: "Acceso a capacitaciones de vanguardia en IA aplicada, analítica digital, certificaciones y sellos de calidad ética."
    }
  ];

  return (
    <section id="porque-un-consejo" className="benefits-section">
      <div className="benefits-container">
        
        {/* Encabezado de la Sección */}
        <div className="benefits-header">
          <span className="section-badge">Garantía e Inserción</span>
          <h2 className="benefits-title">¿Por qué un Consejo?</h2>
          <p className="benefits-intro">
            A diferencia de una asociación civil, un Consejo creado por ley representa una figura de derecho público que nos otorga interlocución directa ante el Estado, universidades y cámaras, bajo un esquema de <strong>matrícula voluntaria</strong> que respeta la libertad de expresión.
          </p>
        </div>

        {/* Grilla de Tarjetas (2x2) */}
        <div className="benefits-grid">
          {beneficios.map((b) => (
            <div key={b.id} className="benefit-card">
              <div className="card-top">
                <span className="card-number">0{b.id}</span>
                <span className="card-tag">{b.tag}</span>
              </div>
              <h3 className="card-title">{b.title}</h3>
              <p className="card-desc">{b.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PorqueUnConsejo;