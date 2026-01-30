import React, { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
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
            const apiUrl = 'https://dfcme5alnc.execute-api.ap-south-1.amazonaws.com/contact-form';
            console.log("API URL:", apiUrl);
            if (!apiUrl) {
                // Fallback to mock for development if URL not set
                const response = await mockApi.submitContactForm(formData);
                setStatus({ type: 'success', message: response.data.message });
            } else {
                const response = await axios.post(apiUrl, formData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.status === 200 || response.status === 201) {
                    setStatus({
                        type: 'success',
                        message: 'Thank you! Your message has been sent successfully. We will get back to you soon.'
                    });
                    setFormData({ name: '', email: '', company: '', message: '' });
                } else {
                    throw new Error('Something went wrong. Please try again.');
                }
            }
        } catch (error) {
            console.error('API Error:', error);
            setStatus({
                type: 'error',
                message: error.response?.data?.message || error.message || 'Failed to submit form. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section section-dark">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        Stop Worrying About <span className="text-gradient">Technical Debt</span>
                    </h2>
                    <p className="section-subtitle">
                        Let's build software that scales securely.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card card-glass">
                            <div className="info-icon-wrapper">
                                <Mail className="info-icon-lucide" size={28} />
                            </div>
                            <h3>Email Us</h3>
                            <p>horsmenconsulting@gmail.com</p>
                        </div>

                        <div className="info-card card-glass">
                            <div className="info-icon-wrapper">
                                <Phone className="info-icon-lucide" size={28} />
                            </div>
                            <h3>Call Us</h3>
                            <p>+91 9217670376</p>
                        </div>

                        {/* <div className="info-card card-glass">
                            <div className="info-icon-wrapper">
                                <MapPin className="info-icon-lucide" size={28} />
                            </div>
                            <h3>Visit Us</h3>
                            <p>123 Business Avenue<br />Tech District, CA 94000</p>
                        </div> */}

                        <div className="social-links">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/company/horsmenconsulting/" target="_blank" className="social-icon" aria-label="LinkedIn">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.instagram.com/horsmenconsulting/" target="_blank" className="social-icon" aria-label="Instagram">
                                    <Instagram size={20} />
                                </a>
                                {/* <a href="#" className="social-icon" aria-label="Facebook">
                                    <Facebook size={20} />
                                </a> */}
                            </div>
                        </div>
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
                                placeholder="Haider Khan"
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
                                placeholder="Haider@youremail.com"
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
                            {isSubmitting ? 'Sending...' : 'Schedule Discovery Call'}
                        </button>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default Contact;
