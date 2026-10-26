import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        
        {/* Encabezado */}
        <div className="contact-header">
          <span className="section-badge">Participación</span>
          <h2 className="contact-title">Sumate a la iniciativa</h2>
          <p className="contact-intro">
            ¿Querés ser parte del Consejo, tenés dudas sobre la matriculación o querés aportar al Anteproyecto de Ley? Déjanos tu mensaje.
          </p>
        </div>

        {/* Formulario */}
        <form 
          action="https://formsubmit.co/cordobacomunicadores@gmail.com" 
          method="POST" 
          className="contact-form"
        >
          {/* Configuraciones ocultas de FormSubmit */}
          <input type="hidden" name="_subject" value="¡Nuevo mensaje desde la Web del Consejo!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellido</label>
              <input 
                type="text" 
                id="nombre" 
                name="Nombre" 
                placeholder="Ej. Fernanda González" 
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="Email" 
                placeholder="ejemplo@correo.com" 
                required 
              />
            </div>
          </div>

          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="telefono">Teléfono / WhatsApp</label>
              <input 
                type="tel" 
                id="telefono" 
                name="Telefono" 
                placeholder="351 1234567" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="perfil">Perfil Profesional</label>
              <select id="perfil" name="Perfil_Profesional" required>
                <option value="">Seleccioná tu perfil...</option>
                <option value="Licenciado en Comunicación">Lic. en Comunicación / Periodismo</option>
                <option value="Técnico en Comunicación">Técnico/a en Comunicación</option>
                <option value="Estudiante Avanzado">Estudiante Avanzado/a</option>
                <option value="Docente / Investigador">Docente / Investigador/a</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje o Consulta</label>
            <textarea 
              id="mensaje" 
              name="Mensaje" 
              rows="5" 
              placeholder="Escribí tu consulta o comentarios aquí..." 
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Enviar Consulta →
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;