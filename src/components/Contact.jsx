import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './contact.css'; // Importa el archivo CSS

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const PUBLIC_KEY = "e8O1W419SxmdXAcUr";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please complete all fields');
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      await emailjs.send(
        'yendo-service-email', // Replace with your EmailJS Service ID
        'yendo-template1', // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Yendo!',
        },
        PUBLIC_KEY // Replace with your EmailJS Public Key
      );
  
      toast.success('Message sent! I’ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="section-contact">
      <Toaster position="top-center" />
      <div className="contact-container">
        <h2 className="contact-title">Let's get in touch</h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="nombre" className="contact-label">Name</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="contact-input"
              placeholder="Your name"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-label">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="yourmail@example.com"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="contact-label">Message</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
              className="contact-textarea"
              placeholder=""
              disabled={isSubmitting}
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="contact-button"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
