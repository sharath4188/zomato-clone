// ...existing code...
import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { db } from "./firebase";
import { ref, get, child } from "firebase/database";
import { useNavigate } from "react-router-dom"; 
import { UserContext } from "./Usercontext";
import { useContext } from "react";

function Loginpage() {
    const { updateUser, clearUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const [touched, setTouched] = useState({
        username: false,
        password: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    // Validation regex patterns
    const validationRules = {
        username: {
            pattern: /^[a-zA-Z\s]{2,30}$/,
            message: "Username should be 2-30 characters long and contain only letters"
        },
        password: {
            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9]).{8,}$/,
            message: "Please enter a valid password"
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
            const error = validateField(key, formData[key]);
            newErrors[key] = error;
            if (error) isValid = false;
        });

        setErrors(newErrors);
        setTouched({
            username: true,
            password: true
        });

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!validateForm()) {
            setIsSubmitting(false);
            alert("❌ Please fix the validation errors before submitting.");
            return;
        }

        console.log("Login submitted:", formData);
        
        try {
            const dbRef = ref(db);
            const snapshot = await get(child(dbRef, `users/${formData.username}`));

            if (snapshot.exists()) {
                const userData = snapshot.val();

                if (userData.password === formData.password) {
                    updateUser({
                        username: userData.username,
                        password: userData.password,
                        phone: userData.phone,
                        Cart: userData.Cart || [],
                        Orders: userData.Orders || [],
                    });
                    
                    alert("✅ Login successful!");
                    navigate("/App");
                } else {
                    alert("❌ Incorrect password!");
                    setErrors(prev => ({
                        ...prev,
                        password: "Incorrect password. Please try again."
                    }));
                }
            } else {
                alert("❌ User not found! Please register first.");
                setErrors(prev => ({
                    ...prev,
                    username: "User not found. Please check your username or sign up."
                }));
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("❌ Login failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    function handleclearuser() {
        clearUser();
        navigate(`/App`);
    }

    // Get input border color based on validation state
    const getInputClass = (fieldName) => {
        if (!touched[fieldName]) {
            return "border-gray-300";
        }
        return errors[fieldName] ? "border-red-500" : "border-green-500";
    };

    // Background image slider code
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

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Field */}
                        <div className="relative">
                            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
                                Username
                            </label>
                            <input 
                                id="username" 
                                name="username" 
                                type="text" 
                                placeholder="Enter your username"
                                value={formData.username} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full p-3 pl-4 border-2 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition-all duration-300 ${getInputClass('username')}`}
                                required 
                                disabled={isSubmitting}
                            />
                            {errors.username && touched.username && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <span>⚠️</span> {errors.username}
                                </p>
                            )}
                            {!errors.username && touched.username && formData.username && (
                                <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                                    <span>✅</span> Username looks good!
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
                                Password
                            </label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password" 
                                placeholder="Enter your password"
                                value={formData.password} 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full p-3 pl-4 border-2 rounded-xl focus:ring-2 focus:ring-red-400 outline-none transition-all duration-300 ${getInputClass('password')}`}
                                required 
                                disabled={isSubmitting}
                            />
                            {errors.password && touched.password && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <span>⚠️</span> {errors.password}
                                </p>
                            )}
                            {!errors.password && touched.password && formData.password && (
                                <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                                    <span>✅</span> Password format is correct!
                                </p>
                            )}
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 rounded-xl hover:from-red-600 hover:to-red-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            disabled={isSubmitting || Object.values(errors).some(error => error) || !formData.username || !formData.password}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Logging in...
                                </span>
                            ) : (
                                "Log In"
                            )}
                        </button>

                        <div className="text-center">
                            <button 
                                onClick={handleclearuser} 
                                type="button" 
                                className="mt-3 bg-gray-200 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-300 transform hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isSubmitting}
                            >
                                Skip for Now
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <Link 
                            to="/Signup" 
                            className="text-red-500 font-semibold hover:underline transition-all"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;
// ...existing code...