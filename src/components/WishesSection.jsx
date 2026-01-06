import React from 'react';
import '../styles/main.css';
import { FaBookOpen, FaRegClock, FaLeaf, FaStar } from 'react-icons/fa';

const WishCard = ({ icon, title, items, delay }) => (
    <div className={`wish-card fade-in-up glass-panel ${delay}`} style={{
        padding: '2rem 1.5rem', // More vertical padding
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        height: '100%',
        justifyContent: 'center'
    }}>
        <div style={{
            fontSize: '2.2rem',
            color: 'var(--color-primary)',
            marginBottom: '0.5rem',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}>
            {icon}
        </div>
        <h3 style={{
            fontSize: '1.3rem',
            margin: '0',
            color: 'var(--color-text-main)',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700'
        }}>{title}</h3>
        <ul style={{
            fontSize: '1rem',
            color: 'var(--color-text-card)',
            lineHeight: '1.5',
            marginTop: '0.5rem',
            fontFamily: 'var(--font-main)',
            fontWeight: '600'
        }}>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </div>
);

const WishesSection = () => {
    const wishes = [
        {
            icon: <FaBookOpen />,
            title: "Học tập",
            items: ["Học tập tốt", "Không áp lực"],
            delay: "delay-100"
        },
        {
            icon: <FaRegClock />,
            title: "Thời gian",
            items: ["Thư giãn nhìu hơn nà", "Không mệt lun nà"],
            delay: "delay-200"
        },
        {
            icon: <FaLeaf />,
            title: "Bản thân",
            items: ["Tự tin hơn", "Yêu thương mình"],
            delay: "delay-300"
        },
        {
            icon: <FaStar />,
            title: "Thành công",
            items: ["Nhiều hạnh phúc", "Nhiều niềm vui"],
            delay: "delay-500"
        }
    ];

    return (
        <section className="wishes-section">
            <div className="container">
                <h2 style={{
                    marginBottom: '2.5rem',
                    textAlign: 'center',
                    color: 'var(--color-text-main)',
                    fontSize: '2.2rem',
                    fontFamily: 'var(--font-script)',
                    textShadow: '0 2px 4px rgba(255,255,255,0.8)'
                }} className="fade-in-up">
                    Gửi đến Duyên nhóaaa
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2rem', // Increased gap
                    maxWidth: '850px',
                    width: '100%'
                }}>
                    {wishes.map((wish, index) => (
                        <WishCard key={index} {...wish} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WishesSection;
