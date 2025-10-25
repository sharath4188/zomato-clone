// ...existing code...
import { Link } from "react-router-dom";
import { db } from "./firebase";
import { ref, set } from "firebase/database";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from './Usercontext.jsx';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone: "",
    Cart: [],
    Orders: []
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    phone: ""
  });

  const [touched, setTouched] = useState({
    username: false,
    password: false,
    phone: false
  });

  // Validation regex patterns
  const validationRules = {
    username: {
      pattern: /^[a-zA-Z\s]{2,30}$/,
      message: "Name should be 2-30 characters long and contain only letters"
    },
    password: {
      pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{8,}$/,
      message: "Password must contain at least 8 characters, one uppercase letter, one number, and one special character"
    },
    phone: {
      pattern: /^[6-9]\d{9}$/,
      message: "Phone number must be 10 digits starting with 6-9"
    }
  };

  const validateField = (name, value) => {
    const rule = validationRules[name];
    if (!value.trim()) {
      return "This field is required";
    }
    if (!rule.pattern.test(value)) {
      return rule.message;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate field in real-time if it's been touched
    if (touched[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      if (key !== 'Cart' && key !== 'Orders') {
        const error = validateField(key, formData[key]);
        newErrors[key] = error;
        if (error) isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({
      username: true,
      password: true,
      phone: true
    });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert("❌ Please fix the validation errors before submitting.");
      return;
    }

    console.log("Signup submitted:", formData);
    
    try {
      await set(ref(db, `users/${formData.username}`), {
        username: formData.username,
        password: formData.password,
        phone: formData.phone,
        Cart: [],
        Orders: [],
      });
      
      updateUser({
        username: formData.username,
        password: formData.password,
        phone: formData.phone,
        Cart: [],
        Orders: [],
      });
      
      alert("✅ Registered successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error writing document:", error);
      alert("❌ Registration failed.");
    }
  };

  // Get input border color based on validation state
  const getInputClass = (fieldName) => {
    if (!touched[fieldName]) {
      return "border-gray-300";
    }
    return errors[fieldName] ? "border-red-500" : "border-green-500";
  };

  // Background image slider code (keep your existing code)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    "/images/Eat Cake.png",
    "/images/Coffee Mug.png",
    "/images/Everyday Sundae.png",
    "/images/French Fries.png",
    "/images/Pancakes.png",
    "/images/Powered by Veggies.png",
    "/images/Chai is better.png"
  ];

  useEffect(() => {
    const imgPaths = images.map(src => encodeURI(src));

    const preloadPromises = imgPaths.map(src => {
      return new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve({ src, ok: true });
        img.onerror = () => resolve({ src, ok: false });
        img.src = src;
      });
    });

    let intervalId = null;

    Promise.all(preloadPromises).then(results => {
      const failed = results.filter(r => !r.ok);
      if (failed.length) {
        console.warn("Some images failed to preload:", failed.map(f => f.src));
      }

      setIsLoading(false);
      intervalId = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % imgPaths.length);
      }, 5000);
    }).catch(err => {
      console.warn("Image preload error:", err);
      setIsLoading(false);
      intervalId = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
      }, 5000);
    });

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center transition-all duration-1200 ease-in-out"
        style={{ 
          backgroundImage: `url(${encodeURI(images[currentImageIndex])})`,
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-red-500 text-center mb-6">
            Zomato
          </h1>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="relative">
              <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
                Name
              </label>
              <input 
                id="username" 
                name="username" 
                type="text" 
                placeholder="Enter your Name"
                value={formData.username} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-3 pl-4 border-2 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition-all duration-300 ${getInputClass('username')}`}
                required 
              />
              {errors.username && touched.username && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠️</span> {errors.username}
                </p>
              )}
              {!errors.username && touched.username && formData.username && (
                <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                  <span>✅</span> Name looks good!
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                Create your password
              </label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="Create your password"
                value={formData.password} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-3 pl-4 border-2 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition-all duration-300 ${getInputClass('password')}`}
                required 
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠️</span> {errors.password}
                </p>
              )}
              {!errors.password && touched.password && formData.password && (
                <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                  <span>✅</span> Strong password!
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                Enter your phone number
              </label>
              <input 
                id="phone" 
                name="phone" 
                type="tel" 
                placeholder="Enter your phone number"
                value={formData.phone} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full p-3 pl-4 border-2 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition-all duration-300 ${getInputClass('phone')}`}
                required 
              />
              {errors.phone && touched.phone && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <span>⚠️</span> {errors.phone}
                </p>
              )}
              {!errors.phone && touched.phone && formData.phone && (
                <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                  <span>✅</span> Valid phone number!
                </p>
              )}
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={Object.values(errors).some(error => error) || Object.values(touched).some(touch => !touch)}
            >
              Sign up
            </button> 

            <div className="text-center">
              <Link to="/App">
                <button type="button" className="mt-3 bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-300">
                  Skip for Now
                </button>
              </Link>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account? 
            <Link to="/" className="text-red-500 font-semibold hover:underline transition-all ml-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;