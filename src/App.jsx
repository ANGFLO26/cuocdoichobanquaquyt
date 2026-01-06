import React, { useState, useEffect } from 'react'
import HeroSection from './components/HeroSection'
import EncouragementSection from './components/EncouragementSection'
import WishesSection from './components/WishesSection'
import CoreMessageSection from './components/CoreMessageSection'
import FooterSection from './components/FooterSection'
import FloatingParticles from './components/FloatingParticles'
import MusicPlayer from './components/MusicPlayer'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import './styles/main.css'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <HeroSection />,
    <EncouragementSection />,
    <WishesSection />,
    <CoreMessageSection />,
    <FooterSection />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Enable keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'Enter') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="app-container" style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(135deg, var(--color-bg-primary) 0%, #FFFFFF 100%)'
    }}>
      <MusicPlayer />
      <FloatingParticles />
      {/* Main Content Area */}
      <div style={{
        height: '100%',
        width: '100%',
        transition: 'opacity 0.5s ease-in-out',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Render only current slide with a key to trigger animation */}
        <div key={currentSlide} style={{ width: '100%', height: '100%' }}>
          {slides[currentSlide]}
        </div>
      </div>

      {/* Navigation Controls */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        zIndex: 10
      }}>
        <button
          onClick={prevSlide}
          className="nav-btn"
          disabled={currentSlide === 0}
          style={{ opacity: currentSlide === 0 ? 0.3 : 1, cursor: currentSlide === 0 ? 'default' : 'pointer' }}
        >
          <FaChevronLeft /> Quay lại
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: currentSlide === idx ? 'var(--color-primary)' : '#ccc',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="nav-btn"
          disabled={currentSlide === slides.length - 1}
          style={{
            opacity: currentSlide === slides.length - 1 ? 0 : 1,
            pointerEvents: currentSlide === slides.length - 1 ? 'none' : 'auto'
          }}
        >
          Tiếp tục <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default App
