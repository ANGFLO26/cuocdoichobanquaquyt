import React from 'react';
import '../styles/main.css';

const FooterSection = () => {
    return (
        <section className="footer-section">
            <div className="container fade-in-up">
                <p style={{
                    fontSize: '1.8rem',
                    marginBottom: '2rem',
                    color: 'var(--color-text-main)',
                    fontWeight: '400',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: '1.6'
                }}>
                    Chúc Duyên một học kỳ thật <br />
                    <span style={{ color: 'var(--color-highlight)', fontWeight: '700' }}>thành công</span>,
                    <span style={{ color: 'var(--color-highlight)', fontWeight: '700' }}> năng lượng</span> <br />
                    và thật nhiều <span style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem' }}>niềm vui</span>. 🌱
                </p>

                <div style={{ margin: '2rem 0', fontSize: '2rem', animation: 'pulse 2s infinite' }}>
                    ✨
                </div>

                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text-card)',
                    marginTop: '1rem',
                    fontFamily: 'var(--font-script)'
                }}>
                    Cố leennnnnn nàaaaaa.
                </p>

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
