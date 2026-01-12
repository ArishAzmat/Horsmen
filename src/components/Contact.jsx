import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import mockApi from '../api/mockApi';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await mockApi.submitContactForm(formData);
            setStatus({ type: 'success', message: response.data.message });
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Failed to submit form. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section section-dark">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <h2 className="section-title">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Ready to transform your business? Let's start a conversation.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <div className="contact-info">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="info-card card-glass"
                        >
                            <div className="info-icon-wrapper">
                                <Mail className="info-icon-lucide" size={28} />
                            </div>
                            <h3>Email Us</h3>
                            <p>contact@horsmen.com</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="info-card card-glass"
                        >
                            <div className="info-icon-wrapper">
                                <Phone className="info-icon-lucide" size={28} />
                            </div>
                            <h3>Call Us</h3>
                            <p>+1 (555) 123-4567</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="info-card card-glass"
                        >
                            <div className="info-icon-wrapper">
                                <MapPin className="info-icon-lucide" size={28} />
                            </div>
                            <h3>Visit Us</h3>
                            <p>123 Business Avenue<br />Tech District, CA 94000</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="social-links"
                        >
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="#" className="social-icon" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="social-icon" aria-label="Twitter">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="social-icon" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <form className="contact-form card" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@company.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Your Company"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        {status.message && (
                            <div className={`form-status ${status.type}`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn btn-primary btn-large"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
