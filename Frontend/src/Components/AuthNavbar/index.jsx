import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AuthNavbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

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

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="group relative text-white/60 hover:text-white transition-all duration-300 px-6 py-3 rounded-2xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <span className="relative font-semibold tracking-tight">Home</span>
        </Link>
      </li>
      <li>
        <Link
          to="/books"
          className="group relative text-white/60 hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <span className="relative font-semibold tracking-tight">Books</span>
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="group relative text-white/60 hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl hover:bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <span className="relative font-semibold tracking-tight">About</span>
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-black text-white shadow-2xl shadow-black/80 sticky top-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Left: Logo + Hamburger */}
          <div className="flex items-center gap-4">
            
            {/* Logo */}
            <Link
              to="/"
              className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg
                  className="relative w-8 h-8 lg:w-10 lg:h-10 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
                </svg>
              </div>
              <div className="relative">
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-white/90 transition-all duration-300">
                  Bookish
                </h1>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>
          </div>

          {/* Center: Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-4">{navItems}</ul>

          {/* Right: Empty (no login/logout for auth navbar) */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default AuthNavbar;
