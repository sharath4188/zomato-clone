import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './Usercontext.jsx';

function Navbar({ searchTerm, setSearchTerm, setIsSearchFocused }) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleFocus = () => {
        setIsSearchFocused(true);
    };

    const handleBlur = () => {
        setIsSearchFocused(false);
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        navigate('/Cart');
    };

    const cartCount = user?.Cart?.length || 0;

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                {/* Main Navbar Content */}
                <div className="flex items-center justify-between">
                    {/* Logo Section - Enhanced */}
                    <Link to="/App" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
                        <div className="relative">
                            <img
                                className="h-8 w-8 sm:h-12 sm:w-12 lg:h-14 lg:w-14 rounded-xl object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md group-hover:shadow-2xl"
                                src="https://www.bing.com/th/id/OIP.ILR4--UYbigIRMDxkZmRkAHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
                                alt="Zomato Logo"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                            <span className="bg-gradient-to-r from-red-600 via-red-500 to-pink-500 bg-clip-text text-transparent group-hover:from-red-500 group-hover:via-pink-500 group-hover:to-red-600 transition-all duration-700 drop-shadow-sm">
                                Zomato
                            </span>
                        </h1>
                    </Link>

                    {/* Desktop Search and Actions - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-3 lg:gap-5">
                        {/* Search Input - Enhanced */}
                        <div className="relative group">
                            <input
                                type="text"
                                value={searchTerm}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search dishes..."
                                className="w-48 lg:w-72 h-10 pl-10 pr-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all duration-300 hover:border-gray-300 hover:shadow-md"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 group-focus-within:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Action Buttons - Reddish Palette */}
                        <div className="flex items-center gap-2 lg:gap-4">
                            <button
                                onClick={handleCartClick}
                                className="relative px-3 lg:px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 hover:from-red-200 hover:to-pink-200 border border-red-200"
                            >
                                <span className="text-xl lg:text-2xl transform transition-transform duration-300 hover:scale-110">🛒</span>
                                <span className="hidden lg:inline">Cart</span>
                                {user.Cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse shadow-lg">
                                        {user.Cart.length}
                                    </span>
                                )}
                            </button>

                            <Link to="/Orders">
                                <button className="px-3 lg:px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 hover:from-orange-200 hover:to-red-200 border border-orange-200">
                                    <span className="text-xl lg:text-2xl transform transition-transform duration-300 hover:scale-110">📦</span>
                                    <span className="hidden lg:inline">Orders</span>
                                </button>
                            </Link>

                            {user.username ? (
                                <Link to="/Userprofile">
                                    <button className="px-3 lg:px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 hover:from-red-600 hover:to-pink-600">
                                        <span className="text-xl lg:text-2xl transform transition-transform duration-300 hover:scale-110">👤</span>
                                        <span className="hidden lg:inline">{user.username}</span>
                                    </button>
                                </Link>
                            ) : (
                                <Link to="/">
                                    <button className="px-3 lg:px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 hover:from-red-700 hover:to-orange-600">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button - Enhanced */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-red-50 transition-all duration-300 active:scale-90"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-red-600 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" className="animate-in" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - Slides down when open */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                    <div className="flex flex-col gap-3 pb-2">
                        {/* Mobile Search - Enhanced */}
                        <div className="relative group">
                            <input
                                type="text"
                                value={searchTerm}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search dishes..."
                                className="w-full h-10 pl-10 pr-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-100 outline-none transition-all duration-300 hover:border-gray-300"
                            />
                            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 group-focus-within:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Mobile Action Buttons - Reddish Palette */}
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={handleCartClick}
                                className="relative w-full px-4 py-2.5 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:from-red-200 hover:to-pink-200 border border-red-200"
                            >
                                <span className="text-xl">🛒</span>
                                <span>Cart</span>
                                {user.Cart.length > 0 && (
                                    <span className="absolute top-2 right-4 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse shadow-lg">
                                        {user.Cart.length}
                                    </span>
                                )}
                            </button>

                            <Link to="/Orders" className="w-full">
                                <button className="w-full px-4 py-2.5 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:from-orange-200 hover:to-red-200 border border-orange-200">
                                    <span className="text-xl">📦</span>
                                    <span>Orders</span>
                                </button>
                            </Link>

                            {user.username ? (
                                <Link to="/Userprofile" className="w-full">
                                    <button className="w-full px-4 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 hover:from-red-600 hover:to-pink-600">
                                        <span className="text-xl">👤</span>
                                        <span>{user.username}</span>
                                    </button>
                                </Link>
                            ) : (
                                <Link to="/" className="w-full">
                                    <button className="w-full px-4 py-2.5 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-xl shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 hover:from-red-700 hover:to-orange-600">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;