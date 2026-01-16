import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Zap, Globe } from 'lucide-react';
import './About.css';

const About = () => {
    const differentiators = [
        {
            title: "AI-Driven Engineering Leadership",
            description: "We use AI-assisted workflows and senior engineering judgment to solve real product and scalability challenges—not just close tickets.",
            icon: Award
        },
        {
            title: "In-House Legal & Privacy Expert",
            description: "Every line of code is reviewed through a privacy lens. Our team includes a dedicated IT law professional to ensure compliance.",
            icon: Shield
        },
        {
            title: "Zero \"Agency Bloat\"",
            description: "No account managers, no layers. You talk directly to the engineers and experts building your product.",
            icon: Zap
        },
        {
            title: "Global Standard, Smart Economics",
            description: "Premium engineering from India, delivering US/EU quality without the onshore price tag.",
            icon: Globe
        }
    ];

    return (
        <section id="about" className="section section-dark">
            <div className="container">
                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="about-text"
                    >
                        <h2 className="section-title">Why <span className="text-gradient">Horsmen?</span></h2>
                        <p className="about-tagline">The Horsmen Difference: Code That Protects Your Business</p>
                        <p className="about-description">
                            We aren't just another dev shop. We are your technical partners who understand that in today's world,
                            privacy and security are not optional features—they are the foundation of trust.
                        </p>
                    </motion.div>

                    <div className="values-grid">
                        <div className="grid grid-2">
                            {differentiators.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="value-card card-glass"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                    >
                                        <div className="value-icon-wrapper">
                                            <Icon size={24} className="text-gradient-icon" />
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
