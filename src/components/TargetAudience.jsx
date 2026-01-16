import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Database, Users } from 'lucide-react';
import './TargetAudience.css';

const TargetAudience = () => {
    const audience = [
        {
            title: "SaaS Startups",
            description: "Launch MVPs that are enterprise-ready from Day 1. Scale without technical debt.",
            icon: Rocket
        },
        {
            title: "Fintech & Healthtech",
            description: "Navigate complex regulations (GDPR, HIPAA) with code that complies by default.",
            icon: ShieldCheck
        },
        {
            title: "AI Platforms",
            description: "Robust architecture for data-intensive applications with strict privacy controls.",
            icon: Database
        },
        {
            title: "Founders & CTOs",
            description: "Scale your team with senior engineers who understand business logic, not just syntax.",
            icon: Users
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
        <section id="who-we-help" className="section target-audience-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-header text-center"
                >
                    <h2 className="section-title">
                        Who We <span className="text-gradient">Help</span>
                    </h2>
                    <p className="section-subtitle">
                        Built for Founders Who Can't Afford Technical Debt or Data Leaks
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="audience-grid"
                >
                    {audience.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div key={index} variants={item} className="audience-card">
                                <div className="audience-icon-wrapper">
                                    <Icon size={32} />
                                </div>
                                <h3 className="audience-title">{item.title}</h3>
                                <p className="audience-description">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TargetAudience;
