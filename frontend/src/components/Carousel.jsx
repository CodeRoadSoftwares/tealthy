import ImageBanner from "./Banners/ImageBanner";
import { useState, useEffect } from "react";

const Carousel = ({ banners, showButtons, showDots }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change the interval (in milliseconds) to adjust the scroll speed

        return () => clearInterval(interval);
    }, [banners.length]);

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative">
            <div className="w-full flex overflow-hidden scrollbar-hide">
                {banners.map((image, index) => (
                    <ImageBanner
                        key={index}
                        image={image.src}
                        alt={`Image ${index + 1}`}
                        opacity={index === currentIndex ? 'opacity-100' : 'opacity-0'}
                    />
                ))}
            </div>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
                onClick={handlePrev}
                hidden={!showButtons}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
                onClick={handleNext}
                hidden={!showButtons}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"/>
                </svg>
            </button>
            <div className="flex justify-center mt-4">
                {banners.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 ${
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
    )
}

export default Carousel;