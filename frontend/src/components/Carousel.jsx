import ImageBanner from "./Banners/ImageBanner";
import { useState, useEffect } from "react";

const Carousel = ({ banners, showButtons, showDots }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scrollInterval, setScrollInterval] = useState(null);
    
    useEffect(() => {
        const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000); // Change the interval (in milliseconds) to adjust the scroll speed

        setScrollInterval(interval);

        return () => clearInterval(interval);
    }, [banners.length]);

    const handleMouseEnter = () => {
        clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
            prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        setScrollInterval(interval);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="w-full">
                {banners.map((image, index) => (
                    <div key={index} className="relative">
                        <ImageBanner
                            image={image.src}
                            alt={`Image ${index + 1}`}
                            opacity={index === currentIndex ? 'block' : 'hidden'}
                        />
                        {index===currentIndex && (
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <div className="flex justify-center">
                                    {banners.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-3 h-3 rounded-full mx-[2px] ${
                                            index === currentIndex
                                                ? 'bg-text'
                                                : 'bg-dotsGrey cursor-pointer'
                                            }`}
                                            onClick={() => setCurrentIndex(index)}
                                            hidden={!showDots}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            
            <button
                className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-800 text-white rounded-full focus:outline-none"
                onClick={handlePrev}
                hidden={!showButtons}>
                <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-800 text-white rounded-full focus:outline-none"
                onClick={handleNext}
                hidden={!showButtons}>
                <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    )
}

export default Carousel;