function Navbar() {
  const navItems = (
    <>
      <li><a>Home</a></li>
      <li><a>Books</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Start Section (Logo + Dropdown for mobile) */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bookish</a>
      </div>

      {/* Center Section (Nav links for desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[18px] gap-4">
          {navItems}
        </ul>
      </div>

      {/* End Section (Search + Button) */}
      <div className="navbar-end flex gap-3 items-center">
        <label className="input input-bordered  items-center gap-2 hidden md:flex">
          <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input type="search" className="grow" placeholder="Search" />
        </label>
        <div>
          <p>Light Mode</p>
          <p>Dark Mode</p>
        </div>
        <a className="btn ">Button</a>
      </div>
    </div>
  );
}

export default Navbar;
