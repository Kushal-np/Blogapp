function Header() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-5xl text-center space-y-10 py-20">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          Welcome to the <span className="border-b-4 border-white pb-1">Book Store</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Discover timeless classics and modern bestsellers , all in one place.
          Start your reading journey with handpicked selections curated for thinkers and dreamers.
        </p>

        {/* Categories (Feature Pills) */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {["📚 Fiction", "🔬 Science", "💼 Business", "🎨 Arts", "💻 Technology"].map((label, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-white/20 text-sm text-white rounded-full hover:border-white/40 transition duration-200"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
