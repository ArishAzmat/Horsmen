import axios from 'axios';
import { servicesData, testimonialsData, companyInfo } from './mockData';

// Simulate API delay for realistic behavior
const simulateDelay = (ms = 800) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API service using axios
const mockApi = {
    // Get all services
    getServices: async () => {
        await simulateDelay();
        return {
            data: servicesData,
            status: 200,
            statusText: 'OK'
        };
    },

    // Get single service by ID
    getServiceById: async (id) => {
        await simulateDelay();
        const service = servicesData.find(s => s.id === id);
        if (!service) {
            throw new Error('Service not found');
        }
        return {
            data: service,
            status: 200,
            statusText: 'OK'
        };
    },

    // Get all testimonials
    getTestimonials: async () => {
        await simulateDelay();
        return {
            data: testimonialsData,
            status: 200,
            statusText: 'OK'
        };
    },

    // Get company information
    getCompanyInfo: async () => {
        await simulateDelay(500);
        return {
            data: companyInfo,
            status: 200,
            statusText: 'OK'
        };
    },

    // Submit contact form
    submitContactForm: async (formData) => {
        await simulateDelay(1000);

        // Validate form data
        if (!formData.name || !formData.email || !formData.message) {
            throw new Error('All fields are required');
        }

        // Simulate successful submission
        console.log('Contact form submitted:', formData);

        return {
            data: {
                success: true,
                message: 'Thank you for contacting us! We will get back to you soon.'
            },
            status: 200,
            statusText: 'OK'
        };
    }
};

export default mockApi;
