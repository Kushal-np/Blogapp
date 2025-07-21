import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Logout from "../Logout";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [searchQuery, setSearchQuery] = useState("");
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
          className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-xl hover:bg-gray-800/40 hover:scale-105 transform transition-all duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/books"
          className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-xl hover:bg-gray-800/40 hover:scale-105 transform transition-all duration-300"
        >
          Books
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2 rounded-xl hover:bg-gray-800/40 hover:scale-105 transform transition-all duration-300"
        >
          About
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-black text-white shadow-md sticky top-0 z-50 backdrop-blur-sm px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        {/* Left: Logo + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="relative lg:hidden group">
            <label tabIndex={0} className="cursor-pointer p-2 rounded-xl hover:bg-gray-800/40 hover:scale-110 transition-all duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="absolute mt-4 w-64 bg-gray-900/80 backdrop-blur-sm rounded-3xl p-4 space-y-2 shadow-2xl border border-gray-700 z-[100]">
              {navItems}
              <li>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 p-2 rounded-xl bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button
                    className="px-3 py-2 bg-white text-black rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 relative overflow-hidden group"
                    onClick={handleSearch}
                  >
                    🔍
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </button>
                </div>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-white hover:text-gray-300 transition duration-300">
            📚 Bookish
          </Link>
        </div>

        {/* Center: Desktop Nav Items */}
        <ul className="hidden lg:flex items-center gap-6">{navItems}</ul>

        {/* Right: Auth + Search */}
        <div className="flex items-center gap-4">
          {/* Future: Desktop Search input if needed */}
          {/* Login / Logout */}
          {authUser ? (
            <Logout />
          ) : (
            <Link
              to="/login"
              className="group px-6 py-2 bg-white text-black rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 text-center backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <span className="relative">Sign in</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
