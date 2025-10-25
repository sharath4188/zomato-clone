import { useState } from 'react';
import { useContext } from 'react';
import { DataContext } from './Datacontext';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import FoodCarousel from './FoodCarousel';

function Card({ filtertype, searcheddish }) {
    const { data } = useContext(DataContext);
    let finalitems;
    if (searcheddish == null || searcheddish === undefined) {

        const filteredata = data.filter(item => {
            if (filtertype === 'all') return true;
            if (filtertype === 'non-veg') return item.type.toLowerCase() === 'non-veg';
            if (filtertype === 'veg') return item.type.toLowerCase() === 'veg';
            if (filtertype === 'most-rated') return item.rating >= 4.5;
            if (filtertype === 'value-for-money') return item.rating >= 4.0 && item.price <= 200;
            return true;
        })

        finalitems = [...filteredata]
        console.log(finalitems);
    } else {
        finalitems = [...searcheddish];
         const filteredata = finalitems.filter(item => {
            if (filtertype === 'all') return true;
            if (filtertype === 'non-veg') return item.type.toLowerCase() === 'non-veg';
            if (filtertype === 'veg') return item.type.toLowerCase() === 'veg';
            if (filtertype === 'most-rated') return item.rating >= 4.5;
            if (filtertype === 'value-for-money') return item.rating >= 4.0 && item.price <= 200;
            return true;
   

        })
    finalitems = [...filteredata];
    }
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {finalitems.map((items) => (
                    <CardItem key={items.id} items={items} />
                ))}
            </div>
        </div>
    );

}

function CardItem({ items }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleOrderClick = () => {
        console.log(`Ordering: ${items.name}`);
    };


    return (
        <>
        <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
            <div className="relative aspect-w-16 aspect-h-9">
                    <img
                        src={items.image || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHwwfDB8fHww"}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={items.name}
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-0'}`}></div>

                    {/* Best Seller Badge */}
                    {items.rating >= 4.6 && (
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1 animate-pulse">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="hidden xs:inline">Best Seller</span>
                            <span className="xs:hidden">Best</span>
                        </div>
                    )}

                    {/* Veg/Non-Veg Indicator */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm p-1 sm:p-1.5 rounded-lg shadow-md">
                        <div className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full ${items.type == 'Veg' ? 'bg-green-500' : 'bg-red-500'}  absolute`}></div>
                        <div className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full ${items.type == 'veg' ? 'bg-green-500' : 'bg-red-500'} relative`}></div>
                    </div>

                    {/* Rating Display */}
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-white/95 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-md flex items-center gap-0.5 sm:gap-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs sm:text-sm font-semibold text-gray-800">{items.rating || '4.5'}</span>
                    </div>
                </div>

                {/* Content Section */}
            <div className="flex flex-col flex-grow p-2 sm:p-3 md:p-4">
                    {/* Name and Price */}
                    <div className="flex justify-between items-start gap-1">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300 line-clamp-1">
                            {items.name}
                        </h3>
                        <div className="flex flex-col items-end flex-shrink-0">
                            <span className="text-xs text-gray-500 font-medium hidden sm:inline">Price</span>
                            <span className="text-base sm:text-lg md:text-xl font-bold text-red-500 flex items-start">
                                <span className="text-sm sm:text-md mr-0.5">&#8377;</span>
                                {items.price}
                            </span>
                        </div>
                    </div>

                    {/* Description - Hidden on small screens */}
                    <p className="hidden md:block text-sm text-gray-600 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                        {items.description || 'Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.'}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-2 md:my-3"></div>

                    {/* Order Button */}
                    <Link to={`/${items.name}`}>
                        <button

                            // onClick={handleOrderClick}
                            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1 sm:gap-2 group/btn text-sm md:text-base"
                        >
                            <span>Order Now</span>
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-300 group-hover/btn:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>

                        </button>
                    </Link>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-red-100 to-transparent rounded-tl-full opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
        </>
    );
}

export default Card;