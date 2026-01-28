import React from 'react';
import { Award, Shield, Zap, Globe, MapPin, Code } from 'lucide-react';
import './About.css';
import { desc, title } from 'framer-motion/client';

const About = () => {
    const differentiators = [
        {
            title: "AI-Driven Leadership",
            description: "We use AI-assisted workflows from architecture design to testing and optimization, combining intelligent automation with experienced engineering judgment.",
            icon: Award
        },
        {
            title: "In-House Legal & Privacy Expert",
            description: "Privacy is not an afterthought. Every line of code is reviewed through a privacy lens. Our team includes a dedicated IT law professional to ensure compliance.",
            icon: Shield
        },
        {
            title: "Direct Access, Zero Bureaucracy",
            description: "No account managers. No communication layers. You work directly with the experts building your product, ensuring clarity, speed, and accountability.",
            icon: Zap
        },
        {
            title: "Remote-First, Globally Aligned",
            description: "We operate as a remote-first company, structured for global collaboration across time zones. Clear documentation, structured processes, and transparent reporting are built into how we work.",
            icon: MapPin
        },
        {
            title: "Global Standard, Smart Economics",
            description: "We deliver enterprise-grade engineering standards with operational efficiency, optimizing cost without compromising quality, security, or compliance.",
            icon: Globe
        },
        {
            title: "Architecture Before Code",
            description: "We prioritize system design, risk modeling, and scalability planning before development begins, reducing technical debt and regulatory exposure.",
            icon: Code
        }
    ];

    return (
        <section id="about" className="section section-dark">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">Why <span className="text-gradient">Horsmen?</span></h2>
                        <p className="about-tagline">Engineering Depth. Regulatory Precision. Built for Global Standards.</p>
                        <p className="about-description">
                            We aren't just another dev shop. We are your technical partners who understand that in today's world,
                            privacy and security are not optional features, they are the foundation of trust.
                        </p>
                    </div>

                    <div className="values-grid">
                        <div className="grid grid-2">
                            {differentiators.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="value-card card-glass"
                                    >
                                        <div className="value-icon-wrapper">
                                            <Icon size={24} className="text-gradient-icon" />
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
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
