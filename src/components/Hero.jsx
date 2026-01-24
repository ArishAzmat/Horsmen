import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="hero">
            {/* Background with glow effects */}
            <div className="hero-glow hero-glow-1"></div>
            <div className="hero-glow hero-glow-2"></div>
            <div className="hero-glow hero-glow-3"></div>

            <div className="container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="hero-title">
                            Privacy-Ready Software Engineering for{' '}
                            <span className="text-gradient">Global SaaS & Startup Companies</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-subtitle"
                    >
                        Engineering & Development + Global Privacy Compliance (GDPR, DPDPA, UAE PDPA, CCPA, HIPAA, etc.) + Security & Privacy by Design. We build secure, compliant and scalable software from day one for early-stage startups and bussiness in Fintech, Healthcare, E-Commerce, AI & IoT etc.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="hero-cta"
                    >
                        <button
                            onClick={scrollToContact}
                            className="btn btn-primary btn-large hero-btn-primary"
                        >
                            Book a Free Consultation
                            <ArrowRight size={20} />
                        </button>
                        <button
                            onClick={scrollToServices}
                            className="btn btn-secondary btn-large"
                        >
                            Our Services
                        </button>
                    </motion.div>

                    {/* <div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="hero-stats"
                    >
                        <div className="stat-item">
                            <div className="stat-value">6+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">500+</div>
                            <div className="stat-label">Clients Served</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">1000+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-value">50+</div>
                            <div className="stat-label">Team Members</div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="scroll-indicator"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="scroll-indicator-mouse"
                >
                    <div className="scroll-indicator-dot"></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
