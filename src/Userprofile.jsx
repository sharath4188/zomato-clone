import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './Usercontext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Userprofile = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();
  
  function handlelogout(){
    clearUser();
    localStorage.removeItem("user")
    navigate("/")
    alert("Logged out successfully!");
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* USER PROFILE SECTION */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl mb-6 sm:mb-8 border-t-4 border-red-600">
          <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
            
            {/* Profile Photo */}
            <div className="mb-4 md:mb-0 relative flex-shrink-0">
              <img 
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg ring-4 ring-indigo-100" 
                src="profile.png"
                alt="Profile"
              />
              <span className="absolute bottom-1 right-1 h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
            
            {/* User Details */}
            <div className="text-center md:text-left flex-grow w-full">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-indigo-600 mb-2 sm:mb-4">
                Registered User
              </p>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-800 mb-3 sm:mb-4 break-all">
                ID: {user.username}
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <p className="flex flex-col sm:flex-row items-center justify-center md:justify-start text-sm sm:text-base md:text-lg text-gray-600 gap-1 sm:gap-2">
                  <span className="font-medium">Phone number:</span>
                  <span className="break-all">{user.phone}</span>
                </p>
                
                <div className="flex justify-center md:justify-start">
                  <button 
                    onClick={handlelogout} 
                    className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-red-600 to-orange-700 hover:from-red-700 hover:to-orange-800 text-white text-sm sm:text-base font-semibold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ORDERS HISTORY SECTION */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl mb-6 sm:mb-8 border-t-4 border-red-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            {user.Cart.length > 0 && (
              <div className="flex items-center gap-2 sm:gap-4 text-center sm:text-left">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-indigo-600">
                  Total orders:
                </p>
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-600">
                  {user.Orders.length}
                </h1>
              </div>
            )}
            
            <Link to="/Orders" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                View Orders
              </button>
            </Link>
          </div>
        </div>
        
        {/* HOME BUTTON */}
        <div className="text-center mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-10 md:mb-12">
          <Link to="/App" className="inline-block w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-purple-700 hover:to-indigo-800 text-white text-sm sm:text-base font-semibold rounded-full shadow-2xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 sm:gap-3 mx-auto">
              Go to Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;