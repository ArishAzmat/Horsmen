import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lock, Code } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const trustSignals = [
        {
            title: "100% Senior Oversight",
            description: "Every project is led by a senior engineer. No junior-only teams.",
            icon: Users
        },
        {
            title: "Privacy by Design",
            description: "Privacy isn't an afterthought; it's our foundation. GDPR compliant by default.",
            icon: Lock
        },
        {
            title: "Transparent Code",
            description: "Full access to repositories from Day 1. You own the code we write.",
            icon: Code
        }
    ];

    return (
        <section id="trust" className="section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Engineering You Can <span className="text-gradient">Trust</span></h2>
                    <p className="section-subtitle">
                        We build confidence, not just code.
                    </p>
                </div>

                <div className="stopwords-grid grid grid-3">
                    {trustSignals.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className="testimonial-card card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="trust-icon-wrapper" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                    <Icon size={40} />
                                </div>

                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="testimonial-content" style={{ fontStyle: 'normal' }}>{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
