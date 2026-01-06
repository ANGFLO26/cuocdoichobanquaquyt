import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import '../styles/main.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // Attempt auto-play on mount (often blocked, but worth a try)
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Set reasonable volume
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Autoplay prevented by browser. User must interact first.");
                    setIsPlaying(false);
                });
            }
        }
    }, []);

    return (
        <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 100
        }}>
            <audio ref={audioRef} loop src="/NCD 2003.mp3" />

            <button
                onClick={togglePlay}
                className="nav-btn"
                style={{
                    width: '50px',
                    height: '50px',
                    padding: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '1.2rem'
                }}
                title={isPlaying ? "Tạm dừng nhạc" : "Bật nhạc"}
            >
                {isPlaying ? <FaMusic className="spin-slow" /> : <FaVolumeMute />}
            </button>

            <style>{`
        .spin-slow {
            animation: spin 4s linear infinite;
        }
        @keyframes spin {
            100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default MusicPlayer;
