import React from 'react';
import '../styles/main.css';
import { FaBookOpen, FaRegClock, FaLeaf, FaStar } from 'react-icons/fa';

const WishCard = ({ icon, title, items, delay }) => (
    <div className={`wish-card fade-in-up glass-panel ${delay}`} style={{
        padding: '1.5rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        height: '100%',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.4)' // Slightly more transparent than default glass
    }}>
        <div style={{
            fontSize: '2rem',
            color: 'var(--color-primary)',
            marginBottom: '0.5rem',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
        }}>
            {icon}
        </div>
        <h3 style={{
            fontSize: '1.1rem',
            margin: '0',
            color: 'var(--color-text-main)',
            fontWeight: '700'
        }}>{title}</h3>
        <ul style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-card)',
            lineHeight: '1.4',
            marginTop: '0.5rem',
            fontWeight: '500'
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
            items: ["Hiểu bài", "Giữ nhịp học đều", "Không áp lực"],
            delay: "delay-100"
        },
        {
            icon: <FaRegClock />,
            title: "Thời gian",
            items: ["Biết sắp xếp", "Nghỉ ngơi hợp lý", "Không mệt mỏi"],
            delay: "delay-200"
        },
        {
            icon: <FaLeaf />,
            title: "Bản thân",
            items: ["Tự tin hơn", "Yêu thương mình", "Ghi nhận nỗ lực"],
            delay: "delay-300"
        },
        {
            icon: <FaStar />,
            title: "Thành công",
            items: ["Đúng mong muốn", "Vừa sức", "Nhiều niềm vui"],
            delay: "delay-500"
        }
    ];

    return (
        <section className="wishes-section">
            <div className="container">
                <h2 style={{
                    marginBottom: '2rem',
                    textAlign: 'center',
                    color: 'var(--color-text-main)',
                    fontSize: '1.8rem',
                    textShadow: '0 2px 4px rgba(255,255,255,0.8)'
                }} className="fade-in-up">
                    Những điều nhắn gửi
                </h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem',
                    maxWidth: '800px',
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
