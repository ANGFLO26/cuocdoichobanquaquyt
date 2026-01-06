import React from 'react';
import '../styles/main.css';

const CoreMessageSection = () => {
    return (
        <section className="core-message-section">
            <div className="container fade-in-up">
                <div className="glass-panel" style={{
                    border: '2px solid rgba(219, 112, 147, 0.3)',
                    padding: '4rem 2rem',
                    display: 'inline-block',
                    maxWidth: '900px',
                    position: 'relative',
                    minWidth: '60vw'
                }}>
                    {/* Decorative elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-18px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'var(--color-primary)',
                        color: 'white',
                        padding: '8px 25px',
                        borderRadius: '30px',
                        fontSize: '1rem',
                        fontFamily: 'var(--font-main)',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        boxShadow: '0 4px 10px rgba(219, 112, 147, 0.4)'
                    }}>KEY MESSAGE</div>

                    <h2 style={{
                        fontSize: '2.2rem',
                        color: 'var(--color-text-main)',
                        lineHeight: '1.8',
                        fontWeight: '400',
                        margin: 0,
                        textAlign: 'center',
                        textShadow: '0 2px 4px rgba(255,255,255,0.5)'
                    }}>
                        Duyên không cần sao hết nà. <br />
                        Chỉ cần <span style={{
                            fontFamily: 'var(--font-script)',
                            color: 'var(--color-highlight)',
                            fontSize: '3.5rem',
                            display: 'block',
                            marginTop: '10px'
                        }}>Duyên là Duyên thuii nàaaa  </span> <br />
                        <span style={{ fontSize: '1.8rem', fontStyle: 'italic' }}></span>
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default CoreMessageSection;
