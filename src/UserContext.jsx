// 📁 src/UserContext.jsx
import React, { createContext, useState } from "react";
import { ref, set } from "firebase/database";  // ✅ import from Firebase
import { db } from "./firebase";  
import { useEffect } from "react";

// 1️⃣ Create Context
export const UserContext = createContext();

// 2️⃣ Create Provider Component
export const UserProvider = ({ children }) => {
const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");
  return savedUser
    ? JSON.parse(savedUser)
    : { username: "", password: "", phone: "", Cart: [], Orders: [] };
});
  
  

  // 🔁 Optional: Helper functions to update fields
    useEffect(() => {
    if (user.username) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // 🔁 Initialize user from localStorage on first load
  // useEffect(() => {
  //   const savedUser = localStorage.getItem("user");
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //   }
  // }, []);
 const updateUser = (newData) => {
  setUser((prevUser) => {
    const updatedUser = { ...prevUser, ...newData };

    // ✅ Always use existing username if newData doesn’t have one
    const username = updatedUser.username || prevUser.username;

    if (username && username.trim() !== "") {
      const userRef = ref(db, `users/${username}`);
      set(userRef, updatedUser)
        .then(() => console.log("✅ User data saved to Firebase"))
        .catch((error) => console.error("❌ Firebase write error:", error));
    } else {
      console.warn("⚠️ Username missing — not saving to Firebase");
    }

    return updatedUser;
  });
};


  const clearUser = () => {
    setUser({
      username: "",
      password: "",
      phone: "",
      Cart: [],
      Orders: [],
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
