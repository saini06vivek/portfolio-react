import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  MapPin,
  ExternalLink,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      );

      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <span className="contact-subtitle">GET IN TOUCH</span>

        <h1>Let's Work Together</h1>

        <p>
          Have an opportunity or a project in mind?
          I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <span className="contact-eyebrow">
            CONTACT INFORMATION
          </span>

          <h2>Let's start a conversation</h2>

          <p className="contact-description">
            I'm open to frontend development opportunities,
            internships, and collaborations. Feel free to reach out!
          </p>

          <div className="contact-methods">
            <a
              className="contact-method"
              href="mailto:saini06vivek@gmail.com"
            >
              <span className="contact-icon">
                <Mail size={20} />
              </span>

              <span className="contact-method-text">
                <strong>Email</strong>
                <span>saini06vivek@gmail.com</span>
              </span>
            </a>

            <div className="contact-method">
              <span className="contact-icon">
                <MapPin size={20} />
              </span>

              <span className="contact-method-text">
                <strong>Location</strong>
                <span>Pune</span>
              </span>
            </div>

            <a
              className="contact-method"
              href="https://github.com/saini06vivek"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <ExternalLink size={20} />
              </span>

              <span className="contact-method-text">
                <strong>GitHub</strong>
                <span>View my projects</span>
              </span>
            </a>

            <a
              className="contact-method"
              href="https://www.linkedin.com/in/saini06vivek/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon">
                <ExternalLink size={20} />
              </span>

              <span className="contact-method-text">
                <strong>LinkedIn</strong>
                <span>Connect with me</span>
              </span>
            </a>
          </div>

          <div className="contact-note">
            <span className="contact-note-dot"></span>
            Open to opportunities
          </div>
        </div>

        <div className="contact-form-card">
          <h2>Send me a message</h2>

          <p className="contact-form-description">
            Fill out the form below and I'll get back to you.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>

                <input
                  id="contact-name"
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Your Email</label>

                <input
                  id="contact-email"
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>

              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What would you like to discuss?"
                maxLength={150}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                maxLength={5000}
                required
              />
            </div>

            {status === 'success' && (
              <div
                className="contact-status success"
                role="status"
              >
                <CheckCircle size={18} />
                Message sent successfully!
              </div>
            )}

            {status === 'error' && (
              <div
                className="contact-status error"
                role="alert"
              >
                <AlertCircle size={18} />
                Couldn't send the message. Please try again.
              </div>
            )}

            <button
              className="contact-submit"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
