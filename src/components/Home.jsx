import React from 'react';
import Hero from './Hero';
import TargetAudience from './TargetAudience';
import Services from './Services';
import Process from './Process';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <TargetAudience />
            <Services />
            <Process />
            <About />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
