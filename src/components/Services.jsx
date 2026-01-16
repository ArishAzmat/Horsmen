import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    ShieldCheck,
    Search,
    Users
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Secure MVP Development",
            description: "Go from concept to compliant code in weeks. We build scalable frontends and secure backends designed for audit readiness.",
            icon: Rocket,
            features: [
                "Rapid prototyping",
                "Audit-ready architecture",
                "Frontend & Backend scaling"
            ]
        },
        {
            id: 2,
            title: "Compliance-Ready Architecture",
            description: "Refactoring and system design that integrates GDPR/CCPA requirements directly into your codebase. Stop bolting on privacy later.",
            icon: ShieldCheck,
            features: [
                "GDPR/CCPA compliance",
                "Privacy by design",
                "Security audits"
            ]
        },
        {
            id: 3,
            title: "Technical Due Diligence",
            description: "Code quality assessments, security vulnerability scans, and privacy gap analysis for startups preparing for funding or acquisition.",
            icon: Search,
            features: [
                "Code quality assessment",
                "Vulnerability scanning",
                "Privacy gap analysis"
            ]
        },
        {
            id: 4,
            title: "Dedicated Engineering Teams",
            description: "Senior-led squads with in-house legal oversight. We act as your fractional engineering arm, fully integrated with your workflow.",
            icon: Users,
            features: [
                "Senior leadership",
                "Legal oversight",
                "Fractional engineering"
            ]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="section services-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <h2 className="section-title">
                        What We <span className="text-gradient">Do</span>
                    </h2>
                    <p className="section-subtitle">
                        Engineering + Compliance. No Fluff.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="services-grid"
                >
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={item}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="service-card"
                            >
                                <div className="service-card-content">
                                    <div className="service-card-glow"></div>

                                    <div className="service-icon-wrapper">
                                        <IconComponent className="service-icon-lucide" size={28} />
                                    </div>

                                    <h3 className="service-title">{service.title}</h3>

                                    <p className="service-description">{service.description}</p>

                                    <ul className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="feature-check">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
