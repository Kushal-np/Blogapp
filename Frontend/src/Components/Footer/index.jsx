import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 blur-lg rounded-full opacity-50"></div>
                <svg className="relative w-8 h-8 text-white drop-shadow-xl" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v16h12V4H6zm2 2h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Bookish</h2>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-6 max-w-md">
              Discover your next favorite book in our curated collection. From timeless classics to modern bestsellers, embark on literary adventures that inspire and transform.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="/books" className="text-white/70 hover:text-white transition-colors duration-200 hover:underline decoration-white/30">
                  Browse Books
                </a>
              </li>
              <li>
                <a href="/categories" className="text-white/70 hover:text-white transition-colors duration-200 hover:underline decoration-white/30">
                  Categories
                </a>
              </li>
              <li>
                <a href="/bestsellers" className="text-white/70 hover:text-white transition-colors duration-200 hover:underline decoration-white/30">
                  Bestsellers
                </a>
              </li>
              <li>
                <a href="/new-releases" className="text-white/70 hover:text-white transition-colors duration-200 hover:underline decoration-white/30">
                  New Releases
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/70 hover:text-white transition-colors duration-200 hover:underline decoration-white/30">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Connect section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="#" 
                className="group w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="group w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="group w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/10"
              >
                <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.752-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
                </svg>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-white/60 text-sm">Follow us for book recommendations</p>
              <p className="text-white/60 text-sm">Join our reading community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Made with ❤️ by <Link to='x.com/kushalpoudel_' className="underline text-white text-2xl hover:text-gray-400">Kush</Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;