import React from 'react';
import { motion } from 'framer-motion';
import {
    Lightbulb,
    Code,
    Cloud,
    Shield,
    Server,
    Lock,
    Network,
    Headphones
} from 'lucide-react';
import mockApi from '../api/mockApi';
import './Services.css';

// Icon mapping
const iconMap = {
    'Lightbulb': Lightbulb,
    'Code': Code,
    'Cloud': Cloud,
    'Shield': Shield,
    'Server': Server,
    'Lock': Lock,
    'Network': Network,
    'Headphones': Headphones
};

const Services = () => {
    const [services, setServices] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await mockApi.getServices();
                setServices(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching services:', error);
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    if (loading) {
        return (
            <section id="services" className="section">
                <div className="container">
                    <div className="loading">Loading services...</div>
                </div>
            </section>
        );
    }

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
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        Comprehensive IT and legal consulting solutions tailored to your business needs
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="services-grid"
                >
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
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
                                        {IconComponent && <IconComponent className="service-icon-lucide" size={28} />}
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
