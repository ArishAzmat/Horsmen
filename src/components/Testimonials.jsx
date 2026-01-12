import React, { useState, useEffect } from 'react';
import mockApi from '../api/mockApi';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await mockApi.getTestimonials();
                setTestimonials(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return (
            <section id="testimonials" className="section">
                <div className="container">
                    <div className="loading">Loading testimonials...</div>
                </div>
            </section>
        );
    }

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">
                        Trusted by industry leaders worldwide
                    </p>
                </div>

                <div className="testimonials-grid grid grid-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>

                            <p className="testimonial-content">"{testimonial.content}"</p>

                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.name}</div>
                                    <div className="author-position">{testimonial.position}</div>
                                    <div className="author-company">{testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
