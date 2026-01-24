import React from 'react';
import { Search, FileText, Terminal, CheckCircle } from 'lucide-react';
import './Process.css';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery & Risk Assessment",
            description: "We understand your product goals and identify privacy/compliance needs upfront.",
            icon: Search
        },
        {
            number: "02",
            title: "Architectural Blueprint",
            description: "We design a secure system roadmap, ensuring scalability and regulatory adherence.",
            icon: FileText
        },
        {
            number: "03",
            title: "Agile Execution",
            description: "Sprint-based development with weekly demos. You see progress, not just promises.",
            icon: Terminal
        },
        {
            number: "04",
            title: "Secure Handover",
            description: "Full code ownership transfer, documentation, and a final compliance check.",
            icon: CheckCircle
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="process" className="section process-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">
                        How We <span className="text-gradient">Work</span>
                    </h2>
                    <p className="section-subtitle">
                        A Transparent, 4-Step Path to Delivery
                    </p>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="process-step">
                                <div className="step-number">
                                    <Icon size={32} />
                                </div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
