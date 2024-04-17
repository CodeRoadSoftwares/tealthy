import { useState, useEffect } from "react";
import ImageBanner from "./Banners/ImageBanner";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({banners, showBtns = true, showDots = true, scrollSpeed = 3}) => {

    const [current, setCurrent] = useState(0);
    const [scrollInterval, setScrollInterval] = useState(null);

    const prev = () => setCurrent((current)=> (current == 0 ? banners.length - 1 : current - 1));
    const next = () => setCurrent((current) => (current == banners.length - 1 ? 0 : current + 1));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1);
        }, scrollSpeed * 1000);
        
        setScrollInterval(interval);

        return () => clearInterval(interval);
    }, [banners.length]);

    const handleMouseEnter = () => {
        clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
        const interval = setInterval(() => {
            setCurrent((prevIndex) =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, scrollSpeed * 1000);
        setScrollInterval(interval);
    };

    return (
        <div className="w-full h-full hover:cursor-pointer">
        <div className="overflow-hidden relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {banners.map((banner, index) => 
                <ImageBanner key={index} image={banner.src} alt={banner.alt}></ImageBanner>
                )}
            </div>
            <div className="absolute inset-0 flex items-center justify-between" hidden={showBtns}>
                <button onClick={prev}>
                    <ChevronLeft className="lg:h-10 lg:w-10 md:h-7 md:w-7 sm:h-5 sm:w-5"></ChevronLeft>
                </button>
                <button onClick={next}>
                    <ChevronRight className="lg:h-10 lg:w-10 md:h-7 md:w-7 sm:h-5 sm:w-5"></ChevronRight>
                </button>
            </div>
            <div className="absolute bottom-12 right-0 left-0" hidden={!showDots}>
                <div className="flex items-center justify-center gap-2">
                    {banners.map((_, i) => 
                    <div key={i} className={`transition-all lg:h-3 lg:w-3 md:h-2 md:w-2 sm:h-1 sm:w-1 bg-background rounded-full ${current == i ? "p-1" : "bg-opacity-50"}`}></div>
                    )}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carousel;