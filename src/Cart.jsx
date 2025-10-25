import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Usercontext';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Cart() {
    const location = useLocation();
    const { user, updateUser } = useContext(UserContext);
    
    //-------------------------------------------------------------orders--------------------------------------------
    const handleOrderNow = () => {
        if (user.Cart.length === 0) {
            alert("🛒 Your cart is empty!");
            return;
        }

        // Move all cart items to Orders
        const updatedOrders = [...user.Orders, ...user.Cart];

        updateUser({
            Orders: updatedOrders, // add new orders
            Cart: [] // clear the cart after ordering
        });

        alert("✅ Order placed successfully!");
    };
    //----------------------------------------------------------------------------------------------------------------------------

    const removeFromCart = (itemName) => {
        updateUser({
            Cart: user.Cart.filter(item => item.name !== itemName)
        });
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-16 sm:mt-20 md:mt-24 px-3 sm:px-4 md:px-6 pb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
                    Your Cart 
                    <span className="text-red-500 ml-2">({user.Cart.length} {user.Cart.length === 1 ? 'item' : 'items'})</span>
                </h2>
                
                {user.Cart.length === 0 ? (
                    <div className="text-center py-10 sm:py-16 md:py-20 bg-white rounded-xl shadow-lg">
                        <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4">🛒</div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800">Your cart is empty</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">Add some delicious items to get started!</p>
                        <Link to="/App">
                            <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-3 sm:gap-4">
                        {user.Cart.map((item) => (
                            <div key={item.name} className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col sm:flex-row p-3 sm:p-4 gap-3 sm:gap-4">
                                    {/* Item Image */}
                                    <div className="relative w-full sm:w-24 md:w-32 h-32 sm:h-24 md:h-32 flex-shrink-0">
                                        <img 
                                            className="w-full h-full rounded-lg sm:rounded-xl object-cover" 
                                            src={item.image} 
                                            alt={item.name}
                                        />
                                    </div>

                                    {/* Item Details */}
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 line-clamp-1">{item.name}</h3>
                                                <p className="text-sm sm:text-base text-gray-600 mt-1">{item.restaurant}</p>
                                            </div>
                                            <div className="flex flex-col items-end flex-shrink-0">
                                                <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">₹{item.price}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Remove Button */}
                                        <button
                                            onClick={() => removeFromCart(item.name)}
                                            className="mt-3 sm:mt-2 text-red-500 hover:text-red-700 text-sm sm:text-base font-semibold flex items-center gap-1 transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Cart Total - Sticky on mobile */}
                        <div className="mt-4 sm:mt-6 bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl shadow-xl border-2 border-gray-200 sticky bottom-4 sm:static">
                            <div className="flex justify-between items-center mb-3 sm:mb-4">
                                <span className="text-base sm:text-lg font-semibold text-gray-700">Subtotal:</span>
                                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                    ₹{user.Cart.reduce((total, item) => total + item.price, 0)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-3 sm:mb-4 text-sm sm:text-base text-gray-600">
                                <span>Delivery:</span>
                                <span className="font-semibold text-green-600">FREE</span>
                            </div>
                            <div className="border-t border-gray-300 pt-3 sm:pt-4 mb-3 sm:mb-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg sm:text-xl font-bold text-gray-800">Total:</span>
                                    <span className="text-2xl sm:text-3xl font-bold text-red-600">
                                        ₹{user.Cart.reduce((total, item) => total + item.price, 0)}
                                    </span>
                                </div>
                            </div>
                            <button 
                                onClick={handleOrderNow}
                                className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;