import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import s1 from '../../assets/images/s1.jpg';
import s2 from '../../assets/images/s2.jpg';
import s3 from '../../assets/images/s3.jpg';
import s4 from '../../assets/integratedplastics/Home-IP-IMH.jpg';
import s5 from '../../assets/images/s5.jpg';
import s6 from '../../assets/images/s6.jpg';
import s7 from '../../assets/images/s7.jpg';
import s8 from '../../assets/images/s8.jpg';
import s9 from '../../assets/images/s9.jpg';
import s10 from '../../assets/images/s10.jpg';
import s11 from '../../assets/images/s11.jpg';

// Move slides data outside component to prevent recreation on each render
const SLIDES_DATA = [
  { id: 1, image: s1, title: 'Injection Moulding Machines', buttonText: 'Explore', buttonLink: '/products/injection-molding' },
  { id: 2, image: s2, title: 'Perform Molds', buttonText: 'Explore', buttonLink: '/products/pet-preform' },
  { id: 3, image: s3, title: 'PET Beverage Filling Line', buttonText: 'Explore', buttonLink: '/products/beverage-filling' },
  { id: 4, image: s4, title: 'Exclusive Applications', buttonText: 'Explore', buttonLink: '/products/integrated-plastics' },
  { id: 5, image: s5, title: 'Injection Moulding Machines - Medical Application', buttonText: 'Explore', buttonLink: '/products/injection-molding/elionMED' },
  { id: 6, image: s6, title: 'Warehousing Automation', buttonText: 'Explore', buttonLink: '/products/intelligent-logistics' },
  // { id: 7, image: s7, title: 'Blow Moulds', buttonText: 'Explore', buttonLink: '/services' },
  { id: 8, image: s8, title: 'Pharma Packaging & Medical Moulds', buttonText: 'Explore', buttonLink: '/products/packaging-mold' },
  { id: 9, image: s9, title: 'Beverage Cap Moulds', buttonText: 'Explore', buttonLink: '/products/caps-mold' },
  { id: 10, image: s10, title: 'Injection Moulding Machines - PET Preform', buttonText: 'Explore', buttonLink: '/products/injection-molding/pet-line' },
  { id: 11, image: s11, title: 'IML Moulds', buttonText: 'Explore', buttonLink: '/products/packaging-systems' }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo(() => SLIDES_DATA, []);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const handleDotClick = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        handleNextSlide();
      }, 5000);
    }
    
    return () => resetTimeout();
  }, [currentSlide, slides.length, isPaused, resetTimeout, handleNextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          handlePrevSlide();
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleNextSlide();
          break;
        case ' ':
        case 'Spacebar':
          event.preventDefault();
          setIsPaused(prev => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevSlide, handleNextSlide]);
  useEffect(() => {
    // Method 1: Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Method 2: Smooth scroll after a brief delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
    
    // Method 3: Using document body scroll
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  // Preload images
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, [slides]);

  return (
    <div 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Image carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 5, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            role="img"
            aria-label={slides[currentSlide].title}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </motion.div>

          <div className="absolute bottom-12 left-12 text-left max-w-2xl">
            <div className="inline-block py-6 px-6">
              <motion.h2
                key={`title-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-tight"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)' }}
              >
                {slides[currentSlide].title}
              </motion.h2>

              <motion.div
                key={`button-${currentSlide}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <Link
                  to={slides[currentSlide].buttonLink}
                  className="inline-block bg-white/10 hover:bg-white/20 border border-white text-white text-lg px-6 py-3 rounded-md transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  aria-label={`Explore ${slides[currentSlide].title}`}
                >
                  {slides[currentSlide].buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Visible only on hover */}
      <button
        onClick={handlePrevSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
          isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={handleNextSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full z-10 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
          isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pause/Play indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          Paused
        </div>
      )}

      {/* Dots Navigation - Visible only on hover */}
      <div className={`absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10 transition-all duration-300 ${
        isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 ${
              currentSlide === index 
                ? 'bg-blue-500 scale-125' 
                : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index ? 'true' : 'false'}
          />
        ))}
      </div>

      {/* Screen reader announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide].title}
      </div>
    </div>
  );
};

export default Hero;
