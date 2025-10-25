import React, { useState, useEffect } from 'react';

function FoodCarousel({ items, isSearchFocused }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    console.log(isSearchFocused);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying || items.length === 0) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, items.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    if (items.length === 0) return null;

    return (
        <>
        {isSearchFocused === false ? 
        <div className="mt-22 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
            {/* Carousel Container - Responsive Height */}
            <div className="relative overflow-hidden h-48 sm:h-64 md:h-80 lg:h-96">
                {/* Main Carousel */}
                <div className="relative w-full h-full">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                index === currentIndex
                                    ? 'opacity-100 translate-x-0'
                                    : index < currentIndex
                                    ? 'opacity-0 -translate-x-full'
                                    : 'opacity-0 translate-x-full'
                            }`}
                        >
                            {/* Image with Overlay */}
                            <div className="relative w-full h-full">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                                        <div className="max-w-xl md:max-w-2xl">
                                            {/* Badges Row */}
                                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                                                {/* Veg/Non-Veg Badge */}
                                                <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-1 sm:gap-1.5">
                                                    <div className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${item.type === 'veg' || item.type === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                                    <span className="text-xs font-semibold text-gray-800 capitalize">{item.type}</span>
                                                </div>

                                                {/* Rating Badge */}
                                                <div className="bg-white/90 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1">
                                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="text-xs font-semibold text-gray-800">{item.rating}</span>
                                                </div>

                                                {/* Best Seller Badge */}
                                                <div className="bg-gradient-to-r from-green-500 to-green-600 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1 animate-pulse">
                                                    <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="text-xs font-bold text-white hidden xs:inline">Best Seller</span>
                                                    <span className="text-xs font-bold text-white xs:hidden">Best</span>
                                                </div>
                                            </div>

                                            {/* Dish Name */}
                                            <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg line-clamp-1">
                                                {item.name}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-2 sm:mb-3 line-clamp-1 sm:line-clamp-2 drop-shadow-md">
                                                {item.description}
                                            </p>

                                            {/* Price */}
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                <span className="text-xl sm:text-3xl md:text-4xl font-bold text-green-400 drop-shadow-lg">
                                                    ₹{item.price}
                                                </span>
                                                {item.price >= 250 && (
                                                    <span className="text-xs text-green-300 bg-green-500/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full backdrop-blur-sm">
                                                        Free Delivery
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot Indicators */}
                <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${
                                index === currentIndex
                                    ? 'w-4 sm:w-5 md:w-6 h-2 sm:h-2.5 bg-white'
                                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gray-700/50">
                    <div
                        className="h-full bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-300 ease-linear"
                        style={{
                            width: isAutoPlaying ? '100%' : '0%',
                            transition: isAutoPlaying ? 'width 4s linear' : 'none',
                            animation: isAutoPlaying ? 'progress 4s linear infinite' : 'none'
                        }}
                    />
                </div>
            </div>
        </div>
        : <></>}
       </>
    );
}

export default FoodCarousel;