import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import horsmenLogo from './assets/images/logo.png';
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    // window.onerror = function (msg, url, line, col, error) {
    //     alert("JS Error: " + msg);
    // };
    return (
        <Router>
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        className="loading-screen"
                        key="loading"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="loading-logo"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img src={horsmenLogo} alt="Horsmen" className="loading-logo-image" />
                        </motion.div>

                        <motion.div
                            className="loading-spinner"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div className="spinner"></div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!loading && (
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            )}
        </Router>
    );
}

export default App;
