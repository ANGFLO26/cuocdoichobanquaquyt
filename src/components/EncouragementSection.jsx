import React from 'react';
import '../styles/main.css';

const EncouragementSection = () => {
    return (
        <section className="encouragement-section">
            <div className="container fade-in-up">
                <div style={{
                    maxWidth: '650px',
                    textAlign: 'center',
                    lineHeight: '2',
                    fontSize: '1.2rem',
                    color: 'var(--color-text-main)',
                    padding: '3rem'
                }} className="glass-panel">
                    <p style={{ marginBottom: '1.5rem' }}>
                        Đầu kỳ luôn có nhiều việc phải bắt đầu.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Có thể sẽ mệt, có thể sẽ áp lực.
                    </p>
                    <p style={{
                        fontFamily: 'var(--font-script)',
                        color: 'var(--color-highlight)',
                        fontSize: '1.8rem',
                        marginTop: '2rem',
                        lineHeight: '1.4'
                    }}>
                        Nhưng mình tin, từng bước nhỏ bạn đi mỗi ngày đều đang đưa bạn đến gần mục tiêu hơn.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EncouragementSection;
