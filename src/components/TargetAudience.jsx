import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    ShieldCheck,
    Database,
    Users,
    Building2,
    Briefcase,
    User
} from 'lucide-react';
import './TargetAudience.css';

const TargetAudience = () => {
    const primaryAudience = [
        {
            title: "SaaS Startups",
            description: "Launch MVPs that are enterprise-ready from day one. We help you scale rapidly while avoiding the technical debt that slows down growth.",
            icon: Rocket
        },
        {
            title: "Fintech & Healthtech",
            description: "Navigate strict regulatory landscapes with privacy-first engineering. We implement high-level compliance directly into your codebase to protect sensitive data.",
            icon: ShieldCheck
        },
        {
            title: "AI Platforms",
            description: "Robust architecture for data-intensive AI applications. We ensure your proprietary models and user data remain private, secure, and highly performant.",
            icon: Database
        },
        {
            title: "Founders & CTOs",
            description: "Partner with senior engineers who think like owners. We provide the technical leadership and execution needed to turn complex roadmaps into reality.",
            icon: Users
        }
    ];

    const extendedAudience = [
        {
            title: "Small & Medium Businesses",
            description: "Modernize legacy systems without disrupting your daily operations. We transform fragile, manual tools into robust, automated business engines.",
            icon: Building2
        },
        {
            title: "Enterprises & Consulting Partners",
            description: "Deep technical expertise for high-stakes projects and partnerships. We integrate with internal teams to deliver complex, mission-critical software solutions.",
            icon: Briefcase
        },
        {
            title: "Individuals & Independent Professionals",
            description: "Turn unique ideas into professional-grade software reality. We provide same high-end engineering for solo builders that we do for major firms.",
            icon: User
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const renderCard = (item, index) => {
        const Icon = item.icon;

        const handleMouseMove = (e) => {
            const { currentTarget: target, clientX, clientY } = e;
            const rect = target.getBoundingClientRect(),
                x = clientX - rect.left,
                y = clientY - rect.top;

            target.style.setProperty("--mouse-x", `${x}px`);
            target.style.setProperty("--mouse-y", `${y}px`);
        };

        return (
            <motion.div
                key={index}
                variants={itemVariants}
                className="audience-card"
                onMouseMove={handleMouseMove}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
                <div className="audience-card-glow"></div>
                <div className="audience-icon-wrapper">
                    <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="audience-title">{item.title}</h3>
                <p className="audience-description">{item.description}</p>
            </motion.div>
        );
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
                    <p className="section-subtitle max-w-2xl mx-auto">
                        Built for teams and individuals who can’t afford fragile software, data risks, or costly rework.
                        Whether you’re a startup founder, a growing business, or an individual building something meaningful, we meet you at your current stage and engineer for where you’re going next.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="audience-container"
                >
                    <div className="audience-grid-primary">
                        {primaryAudience.map((item, index) => renderCard(item, index))}
                    </div>
                    <div className="audience-grid-extended">
                        {extendedAudience.map((item, index) => renderCard(item, index + 4))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TargetAudience;

