import React from 'react';
import './Footer.css';

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
                        <div className="footer-logo">
                            <img src="/logo.png" alt="Horsmen Logo" className="footer-logo-image" />
                            <span className="footer-logo-text">Horsmen</span>
                        </div>
                        <p className="footer-description">
                            Bridging Technology and Legal Excellence. Empowering businesses to thrive in the digital age.
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
                            <li><a href="#">Software Development</a></li>
                            <li><a href="#">Data Privacy & Security</a></li>
                            <li><a href="#">IT Consulting</a></li>
                            <li><a href="#">Legal Compliance</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li>📧 contact@horsmen.com</li>
                            <li>📞 +1 (555) 123-4567</li>
                            <li>📍 123 Business Avenue<br />Tech District, CA 94000</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Horsmen. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
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
