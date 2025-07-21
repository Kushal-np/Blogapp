import { useState, useEffect, createContext, useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("Users");
    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Set loading to false after checking localStorage
  }, []);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser, isLoading]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);