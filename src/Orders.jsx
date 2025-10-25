import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Usercontext';
import Navbar from './Navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Orders() {
    // estimate time to delivery
    let time;
    
    const location = useLocation();
    const { user, updateUser } = useContext(UserContext);
    
    //-------------------------------------------------------------orders--------------------------------------------
    const handleOrderNow = () => {
        if (user.Orders.length === 0) {
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

    const removeFromorders = (itemName) => {
        updateUser({
            Orders: user.Orders.filter(item => item.name !== itemName)
        });
        alert("Order cancelled successfully✅");
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    return (
        <>
            <Navbar />
            <div className="container mx-auto mt-16 sm:mt-20 md:mt-24 px-3 sm:px-4 md:px-6 pb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
                    Your Orders 
                    <span className="text-green-500 ml-2">({user.Orders.length} {user.Orders.length === 1 ? 'order' : 'orders'})</span>
                </h2>
                
                {user.Orders.length === 0 ? (
                    <div className="text-center py-10 sm:py-16 md:py-20 bg-white rounded-xl shadow-lg">
                        <div className="text-5xl sm:text-6xl md:text-7xl mb-3 sm:mb-4">📦</div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-gray-800">No orders yet</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">Start ordering your favorite dishes!</p>
                        <Link to="/App">
                            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                                Start Shopping
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-3 sm:gap-4">
                        {user.Orders.map((item, index) => (
                            <div key={`${item.name}-${index}`} className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden border-2 border-gray-200 hover:shadow-xl hover:border-green-300 transition-all duration-300">
                                <div className="flex flex-col p-3 sm:p-4">
                                    {/* Top Section: Image and Details */}
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-3">
                                        {/* Item Image */}
                                        <div className="relative w-full sm:w-24 md:w-32 h-32 sm:h-24 md:h-32 flex-shrink-0">
                                            <img 
                                                className="w-full h-full rounded-lg sm:rounded-xl object-cover" 
                                                src={item.image} 
                                                alt={item.name}
                                            />
                                            {/* Order Status Badge */}
                                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse">
                                                Active
                                            </div>
                                        </div>

                                        {/* Item Details */}
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <div className="flex-1">
                                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 line-clamp-1">{item.name}</h3>
                                                    <p className="text-sm sm:text-base text-gray-600 mt-1">{item.restaurant}</p>
                                                </div>
                                                <div className="flex flex-col items-end flex-shrink-0">
                                                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">₹{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Delivery Estimate Section */}
                                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-3 border border-green-200">
                                        <div className="flex items-center justify-center sm:justify-start gap-2 text-green-700">
                                            <svg className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm sm:text-base font-semibold">
                                                Estimated delivery: {time = Math.floor(Math.random() * 90 + 10)} minutes
                                            </span>
                                            <span className="text-xl">🛵</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                    
                                        <button
                                            onClick={() => removeFromorders(item.name)}
                                            className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-2 sm:py-2.5 px-4 rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            Cancel Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Order Summary */}
                        <div className="mt-4 sm:mt-6 bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-xl shadow-xl border-2 border-gray-200">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                                Order Summary
                            </h3>
                            <div className="space-y-2 text-sm sm:text-base">
                                <div className="flex justify-between text-gray-600">
                                    <span>Total Items:</span>
                                    <span className="font-semibold">{user.Orders.length}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Total Amount:</span>
                                    <span className="font-semibold text-green-600">
                                        ₹{user.Orders.reduce((total, item) => total + item.price, 0)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Orders;