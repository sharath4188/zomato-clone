import React from 'react'
import Navbar from './Navbar.jsx';
import { DataContext } from './Datacontext.jsx';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from './Usercontext.jsx';
import { useNavigate } from 'react-router-dom'; 

function Dish() {

    let { name } = useParams();
    const navigate = useNavigate();
    
    const { user, updateUser } = useContext(UserContext);
    
    const { data } = useContext(DataContext);
    let dishes = data.find(dish => dish.name == name);
   
    const handlecart = () => {
        const isItemInCart = user.Cart.some(item => item.name === dishes.name);
        
        if (isItemInCart) {
            alert("This item is already in your cart!");
            return;
        }

        updateUser({ Cart: [...user.Cart, dishes] }); 
        alert("✅ Added to cart successfully!")
    }
    
    const handleorder = () => {
        updateUser({ Orders: [...user.Orders, dishes] }); 
        navigate(`/Orders/*`)
    }

    if (!dishes) {
        return (
            <>
                <Navbar />
                <div className="flex justify-center items-center min-h-screen px-4">
                    <p className="text-xl text-gray-600">Dish not found</p>
                </div>
            </>
        );
    }
    function indicate(){
        alert('Login first❗')
    }
    // ----------------------------------------------------------for suggestions-----------------------------------------------------
      const relatedDishes = data
    .filter((item) => item.type === dishes.type && item.name !== dishes.name)
    .slice(0, 8); // Limit to 4 dishes

    return (
        <>
            <Navbar />
            
            {/* Colorful Background with Animated Gradients */}
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
                {/* Animated Background Orbs */}
                <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse animation-delay-4000"></div>
                
                {/* Main Container */}
                <div className="relative z-10 flex justify-center items-center min-h-screen px-3 sm:px-4 md:px-6 lg:px-12 py-20 sm:py-24 md:py-28">
                    
                    {/* Card Container */}
                    <div className="relative w-full max-w-6xl bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-2 border-white/50">
                        
                        {/* Flex Container */}
                        <div className="flex flex-col lg:flex-row">
                            
                            {/* Left Side - Image */}
                            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto lg:min-h-[600px] overflow-hidden group">
                                <img 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    src={dishes.image} 
                                    alt={dishes.name}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Best Seller Badge */}
                                {dishes.price >= 250 && (
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl flex items-center gap-1 sm:gap-1.5 animate-pulse">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        Best Seller
                                    </div>
                                )}
                                
                                {/* Veg/Non-veg Indicator */}
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm p-2 sm:p-2.5 rounded-xl shadow-xl">
                                    <div className={`h-4 w-4 sm:h-5 sm:w-5 rounded-full ${dishes.type === 'veg' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-xl flex items-center gap-1 sm:gap-1.5">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-sm sm:text-base font-bold text-gray-800">{dishes.rating || '4.5'}</span>
                                </div>
                            </div>
                            
                            {/* Right Side - Content */}
                            <div className="w-full lg:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                                
                                {/* Top Content */}
                                <div>
                                    {/* Dish Name */}
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-3 sm:mb-4 leading-tight">
                                        <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                                            {dishes.name}
                                        </span>
                                    </h1>
                                    
                                    {/* Price */}
                                    <div className="flex items-center mb-4 sm:mb-5">
                                        <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 sm:px-5 py-2 sm:py-3 rounded-xl border-2 border-green-300 shadow-lg">
                                            <p className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                                ₹{dishes.price}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Description */}
                                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 border border-gray-200">
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {dishes.description}
                                        </p>
                                    </div>
                                    
                                    {/* Restaurant Name */}
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-3 sm:p-4 mb-4 sm:mb-5 shadow-md">
                                        <div className="flex items-center gap-2 text-blue-700">
                                            <span className="text-xl sm:text-2xl">🛎️</span>
                                            <p className="text-sm sm:text-base font-bold">From: {dishes.restaurant}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom Content */}
                                <div>
                                    {/* Delivery Info */}
                                    <div className={`bg-gradient-to-r ${dishes.price > 250 ? 'from-green-50 to-emerald-50 border-green-300' : 'from-orange-50 to-amber-50 border-orange-300'} border-2 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-md`}>
                                        {dishes.price > 250 ? (
                                            <div className="flex items-center gap-2 text-green-700">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-sm sm:text-base font-bold">🎉 Free Delivery Available!</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-orange-700">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                                <p className="text-sm sm:text-base font-bold">
                                                    Order above ₹250 for free delivery 🚚
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Order Buttons */}
                                    
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button 
                                            onClick={() => user.username === '' ? indicate() : handleorder()} 
                                            className="flex-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 hover:from-red-600 hover:via-pink-600 hover:to-red-600 text-white font-bold text-sm sm:text-base md:text-lg px-4 py-3 sm:py-3.5 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            Order Now
                                        </button>

                                        <button 
                                            onClick={() => user.username === '' ? indicate() : handleorder()} 
                                            className="flex-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-600 text-white font-bold text-sm sm:text-base md:text-lg px-4 py-3 sm:py-3.5 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              {relatedDishes.length > 0 && (
          <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              You may also like 🍽️
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDishes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                     <Link to={`/${item.name}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-lg text-gray-800 truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.restaurant}</p>
                      <p className="font-semibold text-green-600 mt-1">
                        ₹{item.price}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      

      
            <style jsx>{`
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </>
    );
}

export default Dish;