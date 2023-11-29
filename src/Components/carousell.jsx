import React, { useState, useEffect } from 'react';
import Faitec2022 from '../assets/faitec2022.svg'
import Faitec2023 from '../assets/faitec2023.svg'
import Maratona18 from '../assets/maratona18.svg'
import Maratona19 from '../assets/maratona19.svg'


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const totalSlides = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoplay) {
                setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [autoplay, totalSlides]);

    const slides = [
        Faitec2022, Maratona18, Faitec2023, Maratona19,];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    return (
        <div
            className="carousel w-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
        >
            <div className="relative w-full">
                {slides.map((slide, index) => (
                    <div
                        key={`slide${index + 1}`}
                        className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}
                    >
                        <img src={slide} className="w-full" alt={`Slide ${index + 1}`} />


                    </div>
                ))}
                <button className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white rounded-full" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white rounded-full" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
