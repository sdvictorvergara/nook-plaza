import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./Contact.css";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target: { name, value } }) =>
    setFormData((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData(EMPTY_FORM);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <Header />
      <main className="contact-main">
        <section className="contact-hero">
          <h1>Contacto</h1>
          <p className="contact-subtitle">¿Tienes preguntas? Nos encantaría escucharte</p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <div className="info-card">
              <h3>Email</h3>
              <p><a href="mailto:info@nookplaza.com">info@nookplaza.com</a></p>
            </div>
            <div className="info-card">
              <h3>Redes Sociales</h3>
              <p>Síguenos en GitHub para las últimas actualizaciones</p>
            </div>
            <div className="info-card">
              <h3>Ubicación</h3>
              <p>Comunidad Global de Animal Crossing</p>
            </div>

            <div className="map-wrapper">
              <h3 className="map-title">Encuéntranos</h3>
              <iframe
                className="map-iframe"
                title="Nook Plaza Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6!2d-3.6938!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI1JzAwLjUiTiAzwrA0MSczNy43Ilc!5e0!3m2!1ses!2ses!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="map-caption">Madrid, España — Sede de la comunidad de Nook Plaza</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Envíanos un Mensaje</h2>
            {isSubmitted && (
              <div className="success-message">¡Gracias por tu mensaje! Nos pondremos en contacto pronto.</div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              {[
                { id: "name", type: "text", label: "Nombre", placeholder: "Tu nombre" },
                { id: "email", type: "email", label: "Email", placeholder: "tu@email.com" },
                { id: "subject", type: "text", label: "Asunto", placeholder: "Asunto del mensaje" },
              ].map(({ id, type, label, placeholder }) => (
                <div className="form-group" key={id}>
                  <label htmlFor={id}>{label} *</label>
                  <input type={type} id={id} name={id} value={formData[id]} onChange={handleChange} required placeholder={placeholder} />
                </div>
              ))}
              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tu mensaje aquí..." rows={6} />
              </div>
              <button type="submit" className="submit-btn">Enviar Mensaje</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
