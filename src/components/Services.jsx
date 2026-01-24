import React from 'react';
import {
    Rocket,
    ShieldCheck,
    Layers,
    Code,
    Search,
    Users,
    FileCode
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const primaryServices = [
        {
            id: 'primary-1',
            title: "End-to-End Engineering & Compliance",
            description: "The complete lifecycle. We build your product from zero to scalable, fully compliant launch. Architecture, development, and regulatory approval in one stream.",
            icon: Layers,
            features: [
                "Full-cycle development",
                "Full Privacy Compliance (GDPR/DPDPA/PDPL/CCPA)",
                "Audit-ready delivery"
            ]
        },
        {
            id: 'primary-2',
            title: "End-to-End Software Engineering",
            description: "Pure technical execution for complex systems. We build high-performance frontends, robust backends, and maintainable infrastructure without the bloat.",
            icon: Code,
            features: [
                "Modern tech stack",
                "Full-stack development",
                "UI/UX design",
                "Scalable architecture",
                "Performance optimization",

            ]
        },
        {
            id: 'primary-3',
            title: "End-to-End Privacy Compliance",
            description: "Turn existing risks into assets. We retrofit your current codebase with privacy controls, data mapping, and security frameworks required for enterprise deals.",
            icon: ShieldCheck,
            features: [
                "Privacy Aduits and Gap Assessments",
                "Regulatory Compliance Services",
                "Policy & Documentation Developer",
                "Data Protection Impact Assessments (DPIA)",
                "Privacy retrofitting",
                "Data flow mapping",
                "Regulatory implementation"
            ]
        }
    ];

    const targetedServices = [
        {
            id: 'targeted-1',
            title: "Technical Due Diligence",
            description: "Code quality and security assessments for startups preparing for funding or M&A.",
            icon: Search
        },
        {
            id: 'targeted-2',
            title: "Dedicated Engineering Teams",
            description: "Fractional senior engineering squads integrated fully into your workflow.",
            icon: Users
        },
        {
            id: 'targeted-3',
            title: "Smart Contract & Web3 Audits",
            description: "Specialized validation for blockchain protocols and decentralized applications.",
            icon: FileCode
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
                {/* Primary Section Header */}
                <div className="section-header text-center">
                    <h2 className="section-title">
                        What We <span className="text-gradient">Do</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive engineering and privacy solutions.
                        <br />
                        Choose the full package or targeting consulting.
                    </p>
                </div>

                {/* Primary Services Grid */}
                <div className="services-grid services-grid-primary">
                    {primaryServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
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
                            </div>
                        );
                    })}
                </div>

                {/* Targeted Services Subsection */}
                <div className="subsection-header text-center">
                    <div className="subsection-badge">
                        Modularity
                    </div>
                    <h3 className="subsection-title">
                        Engage Us at Any Stage
                    </h3>
                    <p className="subsection-description">
                        Need specific expertise? We provide targeted interventions and individual services without the full retainer.
                    </p>
                </div>

                <div className="services-grid services-grid-secondary">
                    {targetedServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="service-card service-card-sm"
                            >
                                <div className="service-card-content service-card-content-row">
                                    <div className="service-card-glow"></div>
                                    <div className="service-row-layout">
                                        <div className="service-icon-wrapper-sm">
                                            <IconComponent className="service-icon-lucide" size={20} />
                                        </div>
                                        <div>
                                            <h4 className="service-title-sm">
                                                {service.title}
                                            </h4>
                                            <p className="service-description-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;
