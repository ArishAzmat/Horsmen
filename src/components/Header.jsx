import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Header.css';
import horsmenLogo from '../assets/images/logo.png';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`header ${isScrolled ? 'header-scrolled' : ''}`}
        >
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="nav-logo">
                        <img src={horsmenLogo} alt="Horsmen" className="header-logo-image" />
                        <span className="logo-text">
                            <span className="logo-text-primary">Horsmen</span>
                            <span className="logo-text-accent" style={{ marginLeft: '4px', opacity: 0.9 }}>Consulting</span>
                        </span>
                    </Link>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
                        <li><a onClick={() => scrollToSection('services')}>Services</a></li>
                        <li><a onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
                        <li><a onClick={() => scrollToSection('contact')} className="btn btn-primary">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;
