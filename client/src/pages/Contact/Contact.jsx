import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Map from "@/components/Map/Map";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <Header />
      <main className="contact-main">
        <section className="contact-hero">
          <h1>Contacto</h1>
          <p className="contact-subtitle">
            Tienes preguntas? Nos encantaría escucharte
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <h2>Información de Contacto</h2>
            <div className="info-card">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@nookplaza.com">info@nookplaza.com</a>
              </p>
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
              <Map />
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Envíanos un Mensaje</h2>
            {isSubmitted && (
              <div className="success-message">
                Gracias por tu mensaje! Nos pondremos en contacto pronto.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tu mensaje aquí..."
                  rows={6}
                />
              </div>

              <button type="submit" className="submit-btn">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
