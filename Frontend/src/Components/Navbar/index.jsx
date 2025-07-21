import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import Logout from "../Logout";

function Navbar() {
  const [authUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Theme toggle logic
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

  // Search handler
  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // Optionally navigate to a search results page
      // navigate(`/search?q=${searchQuery}`);
    }
  };

  // Navigation items
  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/books">Books</Link></li>
      <li><Link to="/about">About</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
      
      {/* Left: Logo and Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Hamburger Menu */}
        <div className="dropdown dropdown-bottom lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-xl bg-base-100 rounded-box w-56 border border-base-300">
            {navItems}
            <li>
              <div className="form-control mt-2">
                <div className="input-group input-group-sm">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered input-sm w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <button className="btn btn-sm btn-primary" onClick={handleSearch}>
                    🔍
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost text-xl font-bold text-primary">
          📚 Bookish
        </Link>
      </div>

      {/* Center: Navigation items (for desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{navItems}</ul>
      </div>

      {/* Right: Search + Theme + Login/Logout */}
      <div className="navbar-end flex items-center gap-2">
        {/* Desktop Search */}
        <div className="hidden md:flex">
          <div className="input-group input-group-sm">
            <input
              type="text"
              placeholder="Search books..."
              className="input input-bordered input-sm w-40 lg:w-60"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="btn btn-sm btn-primary" onClick={handleSearch}>
              🔍
            </button>
          </div>
        </div>

        {/* Login / Logout */}
        {authUser ? (
          <Logout />
        ) : (
          <Link to="/login" className="btn btn-primary btn-sm hidden sm:inline-block">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
