import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
import horsmenLogo from '../assets/images/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <Link to="/" className="footer-logo-link">
                            <div className="footer-logo">
                                <img src={horsmenLogo} alt="Horsmen Logo" className="footer-logo-image" />
                                <span className="footer-logo-text">Horsmen Consulting</span>
                            </div>
                        </Link>
                        <p className="footer-description">
                            The Value of Vanguard.
                        </p>
                        <p className="footer-description">
                            Building secure, scalable systems for a privacy-first world.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                            <li><a onClick={() => scrollToSection('about')}>About Us</a></li>
                            <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
                            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a onClick={() => scrollToSection('services')}>End-to-End Engineering & Compliance</a></li>
                            <li><a onClick={() => scrollToSection('services')}>End-to-End Software Engineering</a></li>
                            <li><a onClick={() => scrollToSection('services')}>End-to-End Privacy Compliance</a></li>
                            {/* <li><a href="#">Legal Compliance</a></li> */}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={18} style={{ flexShrink: 0 }} />
                                horsmenconsulting@gmail.com
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={18} style={{ flexShrink: 0 }} />
                                +91 9720660741
                            </li>
                            {/* <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                <MapPin size={18} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                                <span>123 Business Avenue<br />Tech District, CA 94000</span>
                            </li> */}
                        </ul>
                        <div className="footer-social" style={{ marginTop: '1rem' }}>
                            <a
                                href="https://www.linkedin.com/company/horsmenconsulting/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--color-text-light)', transition: 'color 0.3s' }}
                                onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Horsmen Consulting. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span>•</span>
                        <a href="#">Terms of Service</a>
                        <span>•</span>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
