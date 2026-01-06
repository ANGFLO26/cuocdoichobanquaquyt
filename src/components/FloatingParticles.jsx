import React, { useEffect, useState } from 'react';
import '../styles/main.css';

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate random particles
        const particleCount = 20;
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // 0-100vw
            animationDuration: 15 + Math.random() * 20, // 15-35s
            animationDelay: -Math.random() * 20, // Start immediately at random positions
            size: 10 + Math.random() * 20, // 10-30px
            opacity: 0.1 + Math.random() * 0.3 // semi-transparent
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDuration: `${p.animationDuration}s`,
                        animationDelay: `${p.animationDelay}s`,
                        opacity: p.opacity
                    }}
                >
                    {/* Heart Shape SVG */}
                    <svg viewBox="0 0 32 29.6" style={{ fill: 'var(--color-secondary)', width: '100%', height: '100%' }}>
                        <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-11.8,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default FloatingParticles;
