import React from 'react';
import '../styles/main.css';

const FooterSection = () => {
    return (
        <section className="footer-section">
            <div className="container fade-in-up">
                <div className="glass-panel" style={{
                    padding: '4rem',
                    maxWidth: '800px',
                    textAlign: 'center'
                }}>
                    <p style={{
                        fontSize: '2rem',
                        marginBottom: '2.5rem',
                        color: 'var(--color-text-main)',
                        fontWeight: '400',
                        fontFamily: 'var(--font-heading)',
                        lineHeight: '1.6'
                    }}>
                        Chúc Duyên một học kỳ thật <br />
                        <span style={{ color: 'var(--color-highlight)', fontWeight: '700' }}>thành công</span>,
                        <span style={{ color: 'var(--color-highlight)', fontWeight: '700' }}> năng lượng</span> <br />
                        và thật nhiều <span style={{ fontFamily: 'var(--font-script)', fontSize: '2.8rem' }}>niềm vui</span>. 🌱
                    </p>

                    <div style={{ margin: '2rem 0', fontSize: '2.5rem', animation: 'pulse 2s infinite' }}>
                        ✨
                    </div>

                    <div style={{
                        marginTop: '2rem',
                        borderTop: '1px solid rgba(219, 112, 147, 0.2)',
                        paddingTop: '2rem',
                        display: 'inline-block',
                        width: '60%'
                    }}>
                        <p style={{
                            fontSize: '1.8rem',
                            color: 'var(--color-highlight)',
                            fontFamily: 'var(--font-script)',
                            transform: 'rotate(-5deg)',
                            margin: 0
                        }}>
                            Cố leennnnnn nàaaaaa!
                        </p>
                    </div>
                </div>

                <style>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
            </div>
        </section>
    );
};

export default FooterSection;
