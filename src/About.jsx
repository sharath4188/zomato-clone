import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
    const [activeSection, setActiveSection] = useState('html');
    const [isHovered, setIsHovered] = useState(null);

    const sections = {
        html: {
            title: '🌐 HTML Concepts',
            color: 'red',
            gradient: 'from-red-500 to-pink-500',
            bgGradient: 'from-red-50 to-pink-50',
            items: [
                { title: 'Semantic Structure', desc: 'Used semantic elements for better structure and accessibility.' },
                { title: 'Forms & Inputs', desc: 'Built clean login and signup interfaces with validation.' },
                { title: 'Media Elements', desc: 'Integrated icons and images for a richer UI.' },
                { title: 'Links & Navigation', desc: 'Used React Router for internal navigation.' }
            ]
        },
        css: {
            title: '🎨 CSS & Tailwind',
            color: 'emerald',
            gradient: 'from-emerald-500 to-teal-500',
            bgGradient: 'from-emerald-50 to-teal-50',
            items: [
                { title: 'Flexbox & Grid', desc: 'Created responsive layouts for cards and components.' },
                { title: 'Responsive Design', desc: 'Adjusted layout dynamically for all screen sizes.' },
                { title: 'Transitions & Animations', desc: 'Used hover and motion effects for interactivity.' },
                { title: 'Tailwind Utilities', desc: 'Applied gradients, shadows, and rounded edges with ease.' }
            ]
        },
        javascript: {
            title: '⚙️ JavaScript',
            color: 'yellow',
            gradient: 'from-yellow-500 to-orange-500',
            bgGradient: 'from-yellow-50 to-orange-50',
            items: [
                { title: 'Variables & Data Types', desc: 'Managed app state and menu details effectively.' },
                { title: 'Functions & Arrow Functions', desc: 'Created reusable logic for filtering and actions.' },
                { title: 'Arrays & Objects', desc: 'Stored and updated user data and cart items dynamically.' },
                { title: 'Events & Listeners', desc: 'Implemented interactivity with onClick and onChange handlers.' },
                { title: 'Async Operations', desc: 'Used promises for Firebase data fetching and updates.' }
            ]
        },
        react: {
            title: '⚛️ React',
            color: 'purple',
            gradient: 'from-purple-500 to-indigo-500',
            bgGradient: 'from-purple-50 to-indigo-50',
            items: [
                { title: 'Components & Props', desc: 'Built reusable UI blocks like Navbar, Cards, and Footer.' },
                { title: 'useState & useEffect', desc: 'Managed dynamic state and lifecycle data synchronization.' },
                { title: 'useContext', desc: 'Shared user and cart data globally across components.' },
                { title: 'Conditional Rendering', desc: 'Displayed login/logout and cart info contextually.' },
                { title: 'React Router', desc: 'Enabled multi-page navigation with smooth transitions.' },
                { title: 'Local Storage', desc: 'Preserved user sessions and cart data between reloads.' }
            ]
        },
        firebase: {
            title: '🔥 Firebase',
            color: 'orange',
            gradient: 'from-orange-500 to-red-500',
            bgGradient: 'from-orange-50 to-red-50',
            items: [
                { title: 'Firebase Setup', desc: 'Integrated Firebase SDK for real-time backend connectivity.' },
                { title: 'Realtime Database', desc: 'Stored user details, cart, and order history efficiently.' },
                { title: 'CRUD Operations', desc: 'Used ref() and set() for creating and updating user data.' },
                { title: 'Data Sync', desc: 'Enabled live sync between UI and Firebase backend.' },
                { title: 'Authentication Logic', desc: 'Managed custom login/logout states with stored credentials.' },
                { title: 'Error Handling', desc: 'Validated and handled missing or empty username scenarios.' },
                { title: 'Integration with Context', desc: 'Linked Firebase updates with React\'s global context system.' },
                { title: 'Persistence', desc: 'Combined Firebase + localStorage for seamless user experience.' }
            ]
        }
    };

    const current = sections[activeSection];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 py-8 sm:py-12 px-3 sm:px-4 md:px-6 relative overflow-hidden">
            {/* Enhanced Animated Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute top-1/4 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>
            <div className="absolute bottom-1/3 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse animation-delay-6000"></div>
            <div className="absolute top-1/2 left-1/3 w-56 h-56 sm:w-80 sm:h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-3000"></div>
            <div className="absolute top-1/3 right-1/4 w-60 h-60 sm:w-72 sm:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-5000"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 animate-fade-in">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-2xl px-2">
                        <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            🍴 Zomato Clone
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4 px-4">
                        A full-featured food ordering web app built with cutting-edge technologies
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">React</span>
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">Firebase</span>
                        <span className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">Tailwind CSS</span>
                    </div>
                    <Link to={`/App`}>
                        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95">
                            Explore Project →
                        </button>
                    </Link>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
                    {Object.keys(sections).map((key) => (
                        <button
                            key={key}
                            onClick={() => setActiveSection(key)}
                            className={`px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                                activeSection === key
                                    ? `bg-gradient-to-r ${sections[key].gradient} text-white shadow-xl scale-105`
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            }`}
                        >
                            <span className="hidden sm:inline">{sections[key].title}</span>
                            <span className="sm:hidden">{sections[key].title.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Content Section */}
                <div className={`bg-gradient-to-br ${current.bgGradient} rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12 border-2 border-white/20 backdrop-blur-sm transition-all duration-500`}>
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-${current.color}-600 mb-6 sm:mb-8 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left`}>
                        <span className="text-3xl sm:text-4xl md:text-5xl">{current.title.split(' ')[0]}</span>
                        <span className="text-xl sm:text-2xl md:text-3xl">{current.title.split(' ').slice(1).join(' ')}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {current.items.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setIsHovered(index)}
                                onMouseLeave={() => setIsHovered(null)}
                                className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg transform transition-all duration-300 cursor-pointer border-2 ${
                                    isHovered === index
                                        ? `scale-105 shadow-2xl border-${current.color}-400`
                                        : 'border-transparent hover:shadow-xl'
                                }`}
                            >
                                <div className="flex items-start gap-2 sm:gap-3">
                                    <div className={`bg-gradient-to-r ${current.gradient} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Section */}
                <div className="mt-8 sm:mt-12 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-2xl sm:rounded-3xl shadow-2xl p-0.5 sm:p-1">
                    <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
                            <span className="text-3xl sm:text-4xl">💡</span>
                            <span>Project Summary</span>
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 text-center sm:text-left">
                            This Zomato Clone demonstrates a modern full-stack approach combining 
                            <strong className="text-blue-400"> React</strong> for frontend UI, 
                            <strong className="text-orange-400"> Firebase</strong> for real-time database operations, and 
                            <strong className="text-emerald-400"> Tailwind CSS</strong> for sleek and responsive design.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 sm:p-6 border border-blue-400/30">
                                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">⚛️</div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Frontend Excellence</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">Modern React components with hooks and context</p>
                            </div>
                            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 sm:p-6 border border-orange-400/30">
                                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🔥</div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Real-time Backend</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">Firebase integration for live data sync</p>
                            </div>
                            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-4 sm:p-6 border border-emerald-400/30 sm:col-span-2 md:col-span-1">
                                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🎨</div>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Beautiful Design</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">Responsive UI with Tailwind CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-out;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-3000 {
                    animation-delay: 3s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animation-delay-5000 {
                    animation-delay: 5s;
                }
                .animation-delay-6000 {
                    animation-delay: 6s;
                }
            `}</style>
        </div>
    );
}

export default About;