import React from 'react';
import '../styles/main.css';

const HeroSection = () => {
    return (
        <section className="hero-section" style={{
            background: 'transparent',
            textAlign: 'center'
        }}>
            <div className="container fade-in-up">
                <h1 style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    color: 'var(--color-text-main)',
                    lineHeight: '1.2',
                    fontWeight: '700'
                }} className="text-shadow-soft">
                    Chúc Duyên một <br />
                    <span style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '5.5rem',
                        color: 'var(--color-highlight)',
                        display: 'block',
                        marginTop: '15px',
                        filter: 'drop-shadow(0 4px 6px rgba(219, 112, 147, 0.2))'
                    }}>khởi đầu thật tốt</span>
                </h1>
                <p style={{
                    fontSize: '1.6rem',
                    color: 'var(--color-text-card)',
                    marginTop: '2rem',
                    fontWeight: '500',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-heading)',
                    opacity: 0.9
                }} className="delay-200 fade-in-up">
                    cho học kỳ mới phía trước nhóaaa. 💖
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
