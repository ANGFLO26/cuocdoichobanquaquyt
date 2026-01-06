import React from 'react';
import '../styles/main.css';

const EncouragementSection = () => {
    return (
        <section className="encouragement-section">
            <div className="container fade-in-up">
                <div className="glass-panel" style={{
                    maxWidth: '750px',
                    textAlign: 'left',
                    padding: '4rem 3rem',
                    color: 'var(--color-text-main)'
                }}>
                    <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontStyle: 'italic',
                        fontSize: '1.4rem',
                        lineHeight: '1.8'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Kì mới có nhiều việc phải bắt đầu.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Có thể sẽ mệt, có thể sẽ áp lực.
                        </p>
                    </div>

                    <p style={{
                        marginTop: '2.5rem',
                        lineHeight: '1.6',
                        fontWeight: '500',
                        fontSize: '1.3rem',
                        fontFamily: 'var(--font-main)',
                        borderLeft: '4px solid var(--color-primary)',
                        paddingLeft: '20px'
                    }}>
                        Nhưng tớ tin không có gì làm khó được <span style={{ fontFamily: 'var(--font-script)', fontSize: '2.2rem', color: 'var(--color-highlight)' }}>Duyên</span> nà. <br />
                        Hai mình cùng nhau vượt qua mọi <span style={{ fontFamily: 'var(--font-script)', fontSize: '2.2rem', color: 'var(--color-highlight)' }}>khó khăn</span> nhoaa.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EncouragementSection;
