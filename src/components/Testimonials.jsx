import React from 'react';
import { Users, Lock, Code } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const trustSignals = [
        {
            title: "Engineering That Thinks Beyond Code",
            description: "Horsmen approached our product with both technical depth and compliance awareness. The architecture decisions they made saved us significant rework later.",
            author: "Shahroz Daneil, Founder, SaaS Platform",
            icon: Users
        },
        {
            title: "Privacy Was Built In, Not Bolted On",
            description: "Their ability to align engineering with privacy requirements gave us confidence during regulatory review and enterprise discussions.",
            author: "Adeel Hassan Khan, CTO, Fintech Startup",
            icon: Lock
        },
        {
            title: "Professional, Transparent, and Reliable",
            description: "Horsmen delivered a clean, professional website that reflects the credibility of my practice. Communication was clear, timelines were respected.",
            author: "Abdullah Adil, ACCA",
            icon: Code
        }
    ];

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Testimonials: <span className="text-gradient">What Our Partners Say</span></h2>
                    <p className="section-subtitle">
                        Trusted by founders and product leaders building serious software.
                    </p>
                </div>

                <div className="stopwords-grid grid grid-3">
                    {trustSignals.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="testimonial-card card"
                            >
                                <div className="trust-icon-wrapper" style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                    <Icon size={40} />
                                </div>

                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                                <p className="testimonial-content" style={{ fontStyle: 'normal' }}>{item.description}</p>

                                {/* Author Section */}
                                <div className="testimonial-author" style={{
                                    marginTop: '1.5rem',
                                    paddingTop: '1rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <p style={{
                                        fontStyle: 'italic',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        opacity: '0.85',
                                        letterSpacing: '0.3px'
                                    }}>
                                        — {item.author}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
