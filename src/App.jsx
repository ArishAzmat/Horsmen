import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            {loading ? (
                <div className="loading-screen">
                    <div className="loading-logo">
                        <img src={horsmenLogo} alt="Horsmen" className="loading-logo-image" />
                    </div>

                    <div className="loading-spinner">
                        <div className="spinner"></div>
                    </div>
                </div>
            ) : (
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
