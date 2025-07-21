import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col justify-center md:flex md:flex-row lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight transform transition-all duration-500 hover:scale-105">
                <span className="text-white transition-colors duration-300 hover:text-gray-200 cursor-default">
                  Discover Your
                </span>
                <br />
                <span className="text-gray-400 transition-colors duration-300 hover:text-gray-300 cursor-default">
                  New Adventure
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0 transform transition-all duration-300 hover:text-gray-200">
                Welcome to <span className="font-semibold text-white transition-colors duration-200 hover:text-gray-100 cursor-pointer">Bookish</span> , where every page turns into possibility. 
                Explore carefully curated collections that span genres, cultures, and imaginations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                className="group px-8 py-4 bg-white text-black rounded-2xl font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 text-center backdrop-blur-sm relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">
                  
                  <Link to="/books">Browse Books</Link>
                  
                  
                  
                  </span>
              </button>
              
              <button 
                className="group px-8 py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl font-semibold text-white transition-all duration-300 hover:bg-gray-800/80 hover:border-gray-600 hover:shadow-xl hover:shadow-gray-900/50 hover:scale-105 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">
                  <Link to="/about">Learn More</Link>
                  </span>
              </button>
            </div>

            {/* Stats */}

          </div>

          {/* Right Image Section */}
          <div className="relative group">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-3 shadow-2xl transition-all duration-500 hover:bg-gray-800/50 hover:shadow-3xl hover:scale-105">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Curated book collection"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;