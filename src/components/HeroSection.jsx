import React from 'react';
import '../styles/main.css';

const HeroSection = () => {
    return (
        <section className="hero-section" style={{
            /* Inherits flex center from main.css section rule */
            background: 'transparent',
            textAlign: 'center'
        }}>
            <div className="container fade-in-up">
                <h1 style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    color: 'var(--color-text-main)',
                    lineHeight: '1.2'
                }}>
                    Chúc Duyên một <br />
                    <span style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '4.5rem',
                        color: 'var(--color-highlight)',
                        display: 'block',
                        marginTop: '10px'
                    }}>khởi đầu thật tốt</span>
                </h1>
                <p style={{
                    fontSize: '1.4rem',
                    color: 'var(--color-text-card)',
                    marginTop: '1.5rem',
                    fontWeight: '500',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-heading)'
                }} className="delay-200 fade-in-up">
                    cho học kỳ mới phía trước nhóaaaa.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
