import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-container">
        <h1 className="about-title">
          Quiénes Somos
        </h1>
        <p className="about-text">
          En la provincia de Córdoba, los licenciados y técnicos en comunicación 
          contamos con una sólida formación universitaria y terciaria, pero hemos 
          carecido históricamente de un ámbito institucional propio que nos represente 
          y nos ordene. Impulsamos la creación, por ley de la Legislatura provincial, 
          del Consejo Profesional de la Comunicación de la Provincia de Córdoba. 
          Nacemos para ser el interlocutor formal ante el Estado, las universidades 
          y las organizaciones que contratan nuestros servicios, jerarquizando el 
          ejercicio profesional, promoviendo buenas prácticas éticas y garantizando 
          un registro confiable de profesionales con título oficial validado.
        </p>
      </div>
    </section>
  );
};

export default About;