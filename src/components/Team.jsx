import React from 'react';
import { Linkedin, Mail, Code, Shield, Brain } from 'lucide-react';
import './Team.css';

const Team = () => {
    const teamMembers = [
        {
            name: "Arish Azmat",
            role: "Co-Founder & Lead Engineer",
            description: "Full-stack engineer with expertise in scalable systems and privacy-first architectures.",
            icon: Code,
            linkedin: "https://www.linkedin.com/in/arish-azmat/",
            email: "horsmenconsulting@gmail.com"
        },
        {
            name: "Akmal Affan",
            role: "Co-Founder & Lead Privacy Professional",
            description: "IT law professional ensuring compliance and security in every solution we build.",
            icon: Shield,
            linkedin: "https://www.linkedin.com/in/mohdakmalaffan/",
            email: "horsmenconsulting@gmail.com"
        },
        // {
        //     name: "AI Assistant",
        //     role: "Engineering Augmentation",
        //     description: "We leverage AI-driven workflows for architecture, testing, and optimization.",
        //     icon: Brain,
        //     linkedin: "",
        //     email: ""
        // }
    ];

    return (
        <section id="team" className="section section-team">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Who <span className="text-gradient">We </span>Are</h2>
                    <p className="section-subtitle">
                        A small, focused team of experts who work directly with you.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => {
                        const Icon = member.icon;
                        return (
                            <div key={index} className="team-card card-glass">
                                <div className="team-card-header">
                                    <div className="team-icon-wrapper">
                                        <Icon size={40} className="team-icon" />
                                    </div>
                                </div>

                                <div className="team-card-body">
                                    <h3 className="team-name">{member.name}</h3>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-description">{member.description}</p>
                                </div>

                                {(member.linkedin || member.email) && (
                                    <div className="team-card-footer">
                                        <div className="team-social-links">
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="team-social-link"
                                                    aria-label="LinkedIn"
                                                >
                                                    <Linkedin size={18} />
                                                    <span className="team-social-text">LinkedIn</span>
                                                </a>
                                            )}
                                            {member.email && (
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="team-social-link"
                                                    aria-label="Email"
                                                >
                                                    <Mail size={18} />
                                                    <span className="team-social-text">Email</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
