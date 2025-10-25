import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ onfilter, isSearchFocused, activeFilter }) {
  // Predefined vibrant color styles
  const colorStyles = {
    all: {
      active: "bg-gradient-to-r from-red-500 to-rose-600 text-white border-transparent shadow-lg shadow-red-400/60",
      inactive: "bg-gradient-to-r from-red-100 to-rose-200 text-red-700 border-red-200 hover:from-red-200 hover:to-rose-300 hover:text-red-900 hover:border-red-400",
    },
    veg: {
      active: "bg-gradient-to-r from-emerald-500 to-green-600 text-white border-transparent shadow-lg shadow-emerald-400/60",
      inactive: "bg-gradient-to-r from-emerald-100 to-green-200 text-emerald-700 border-emerald-200 hover:from-emerald-200 hover:to-green-300 hover:text-emerald-900 hover:border-emerald-400",
    },
    "non-veg": {
      active: "bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-lg shadow-orange-400/60",
      inactive: "bg-gradient-to-r from-orange-100 to-red-200 text-orange-700 border-orange-200 hover:from-orange-200 hover:to-red-300 hover:text-orange-900 hover:border-orange-400",
    },
    "most-rated": {
      active: "bg-gradient-to-r from-yellow-400 to-amber-500 text-white border-transparent shadow-lg shadow-yellow-400/60",
      inactive: "bg-gradient-to-r from-yellow-100 to-amber-200 text-yellow-700 border-yellow-200 hover:from-yellow-200 hover:to-amber-300 hover:text-yellow-900 hover:border-yellow-400",
    },
    "value-for-money": {
      active: "bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white border-transparent shadow-lg shadow-pink-400/60",
      inactive: "bg-gradient-to-r from-pink-100 to-fuchsia-200 text-pink-700 border-pink-200 hover:from-pink-200 hover:to-fuchsia-300 hover:text-pink-900 hover:border-pink-400",
    },
  };

  // Button style helper
  const getButtonClass = (type) => {
    const isActive = activeFilter === type;
    const color = colorStyles[type] || colorStyles["all"];
    const style = isActive ? color.active : color.inactive;

    return `
      group relative flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 ${style}
      font-semibold rounded-full shadow-md hover:shadow-xl 
      transition-all duration-300 transform 
      ${isActive ? "scale-105" : "hover:scale-105"} active:scale-95 
      flex items-center gap-1.5 sm:gap-2 border-2 text-sm sm:text-base
    `;
  };

  return (
    <div
     className={
        isSearchFocused
          ? "mb-20 w-full bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 sticky top-[64px] md:top-20 z-40 inline-block"
          : "fixed top-0 w-full bg-gradient-to-r from-white via-gray-50 to-white shadow-lg border-b border-gray-200 sticky top-[64px] md:top-20 z-40 inline-block"
      }

    >
      <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 px-2 sm:px-4 py-3 sm:py-4 overflow-x-auto scrollbar-hide">

        <button onClick={() => onfilter('all')} className={getButtonClass('all')}>
          <span className="text-base sm:text-lg">🍛</span>
          <span className="hidden xs:inline sm:inline">All</span>
        </button>

        <button onClick={() => onfilter('veg')} className={getButtonClass('veg')}>
          <span className="text-base sm:text-lg">🥗</span>
          <span className="hidden xs:inline sm:inline">Veg Dishes</span>
        </button>

        <button onClick={() => onfilter('non-veg')} className={getButtonClass('non-veg')}>
          <span className="text-base sm:text-lg">🍗</span>
          <span className="hidden xs:inline sm:inline">Non-Veg Dishes</span>
        </button>

        <button onClick={() => onfilter('most-rated')} className={getButtonClass('most-rated')}>
          <span className="text-base sm:text-lg">⭐</span>
          <span className="hidden xs:inline sm:inline">Most Rated</span>
        </button>

        <button onClick={() => onfilter('value-for-money')} className={getButtonClass('value-for-money')}>
          <span className="text-base sm:text-lg">💰</span>
          <span className="hidden xs:inline sm:inline">Today Offers</span>
        </button>

        {/* Divider */}
        <div className="h-6 sm:h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-1 sm:mx-2 hidden sm:block"></div>

        <Link to="/About">
          <button className="group relative flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-violet-200 to-purple-200 hover:from-violet-300 hover:to-purple-300 text-violet-700 hover:text-violet-900 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-1.5 sm:gap-2 border-2 border-violet-300 hover:border-violet-500 text-sm sm:text-base">
            <span className="text-base sm:text-lg">ℹ️</span>
            <span className="hidden xs:inline sm:inline">About Us</span>
          </button>
        </Link>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Sidebar;