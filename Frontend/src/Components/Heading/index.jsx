function Heading() {
  return (
    <div className="h-[30vh] relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="text-center space-y-3 lg:space-y-4 relative">
          {/* Icon */}
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg
              className="relative w-12 h-12 lg:w-14 lg:h-14 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl mx-auto"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
            </svg>
          </div>

          {/* Heading */}
          <div className="relative group">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight text-white transition-all duration-300 group-hover:text-white/90">
              Free Books
            </h1>
            <div className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-0 h-1 bg-white rounded-full group-hover:w-20 transition-all duration-500"></div>
          </div>

          {/* Subtext */}
          <div className="relative group">
            <p className="text-sm lg:text-base text-white/60 group-hover:text-white/80 transition-colors duration-300">
              You can view the freely available books from here
            </p>
            <div className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-0 h-0.5 bg-white/30 group-hover:w-16 transition-all duration-500 rounded-full"></div>
          </div>

          {/* Subtle decorative pulses */}
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/10 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
;
