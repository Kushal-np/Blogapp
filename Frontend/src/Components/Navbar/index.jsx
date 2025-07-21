import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Logout from "../Logout";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("darkTheme");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("darkTheme");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="group relative text-white/60 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <span className="relative font-semibold tracking-tight">Home</span>
        </Link>
      </li>
      <li>
        <Link
          to="/books"
          className="group relative text-white/60 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <span className="relative font-semibold tracking-tight">Books</span>
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="group relative text-white/60 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <span className="relative font-semibold tracking-tight">About</span>
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-black text-white shadow-2xl shadow-black/80 sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2">
        <div className="flex justify-between items-center">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <div className="relative lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="btn btn-ghost cursor-pointer p-1.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 hover:scale-110 hover:border-white/40 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              {isMobileMenuOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                  
                  {/* Mobile menu */}
                  <ul className="absolute top-12 left-0 w-72 bg-black/95 backdrop-blur-xl rounded-2xl p-4 space-y-2 shadow-2xl shadow-black/50 border border-white/20 z-50">
                    <li>
                      <Link
                        to="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group relative text-white/60 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10 block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <span className="relative font-semibold tracking-tight">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group relative text-white/60 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10 block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <span className="relative font-semibold tracking-tight">Books</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group relative text-white/60 hover:text-white transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-lg hover:shadow-white/10 block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <span className="relative font-semibold tracking-tight">About</span>
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Logo */}
            <Link 
              to="/" 
              className="group flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg className="relative w-7 h-7 lg:w-8 lg:h-8 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
                </svg>
              </div>
              <div className="relative">
                <h1 className="text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-white/90 transition-all duration-300">
                  Bookish
                </h1>
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-2">{navItems}</ul>

          {/* Right: Auth + Search */}
          <div className="flex items-center gap-3">
            {/* Login / Logout */}
            {authUser ? (
              <div className="flex items-center">
                <Logout />
              </div>
            ) : (
              <Link
                to="/login"
                className="group px-5 py-2 bg-white text-black rounded-xl font-bold transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-white/30 hover:scale-105 text-center backdrop-blur-sm relative overflow-hidden border border-white/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className="relative tracking-tight text-sm">Sign in</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;