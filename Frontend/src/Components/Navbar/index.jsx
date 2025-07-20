import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const navItems = (
    <>
      <li><a href="#home">Home</a></li>
      <li><a href="#books">Books</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
      {/* Left: Logo & Mobile Menu */}
      <div className="navbar-start">
        {/* Mobile Hamburger */}
        <div className="dropdown dropdown-bottom lg:hidden">
  <label tabIndex={0} className="btn btn-ghost btn-circle">
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </label>
  <ul
    tabIndex={0}
    className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-xl bg-base-100 rounded-box w-56 border border-base-300"
  >
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
          <button
            className="btn btn-sm btn-primary"
            onClick={handleSearch}
          >
            🔍
          </button>
        </div>
      </div>
    </li>
  </ul>
</div>


        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold text-primary">
          📚 Bookish
        </a>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{navItems}</ul>
      </div>

      {/* Right: Search, Theme, Button */}
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
            <button
              className="btn btn-sm btn-primary"
              onClick={handleSearch}
            >
              🔍
            </button>
          </div>
        </div>

        {/* Theme Dropdown */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle btn-sm hover:bg-base-200"
          >
            🌗
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40 border border-base-300"
          >
            <li><a data-theme="light">☀️ Light</a></li>
            <li><a data-theme="dark">🌙 Dark</a></li>
            <li><a data-theme="system">🖥️ System</a></li>
          </ul>
        </div>

        {/* CTA Button */}
        <button className="btn btn-primary btn-sm hidden sm:inline-block">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
