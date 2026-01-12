import React, { useState, useEffect } from 'react';
import mockApi from '../api/mockApi';
import './About.css';

const About = () => {
    const [companyInfo, setCompanyInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanyInfo = async () => {
            try {
                const response = await mockApi.getCompanyInfo();
                setCompanyInfo(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching company info:', error);
                setLoading(false);
            }
        };

        fetchCompanyInfo();
    }, []);

    if (loading || !companyInfo) {
        return (
            <section id="about" className="section section-dark">
                <div className="container">
                    <div className="loading">Loading...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="section section-dark">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">About Horsmen</h2>
                        <p className="about-tagline">{companyInfo.tagline}</p>
                        <p className="about-description">{companyInfo.description}</p>

                        <div className="mission-box">
                            <h3>Our Mission</h3>
                            <p>{companyInfo.mission}</p>
                        </div>
                    </div>

                    <div className="values-grid">
                        <h3 className="values-title">Our Core Values</h3>
                        <div className="grid grid-2">
                            {companyInfo.values.map((value, index) => (
                                <div
                                    key={index}
                                    className="value-card card-glass"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <h4>{value.title}</h4>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
