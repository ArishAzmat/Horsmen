import React from 'react';
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
                    <div className="about-text">
                        <h2 className="section-title">Why <span className="text-gradient">Horsmen?</span></h2>
                        <p className="about-tagline">The Horsmen Difference: Code That Protects Your Business</p>
                        <p className="about-description">
                            We aren't just another dev shop. We are your technical partners who understand that in today's world,
                            privacy and security are not optional features—they are the foundation of trust.
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
