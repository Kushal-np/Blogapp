function Header() {
  return (
    <div className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-accent/10">
      <div className="hero-content text-center max-w-6xl px-4">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-base-content">
              Welcome to the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Book Store
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
              Discover thousands of amazing books, from timeless classics to modern bestsellers. 
              Your next great read is just a click away. Dive into worlds of adventure, 
              knowledge, and imagination.
            </p>
          </div>

          {/* Stats Section */}
          

          {/* Call to Action Buttons */}
          

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="badge badge-lg badge-primary badge-outline">📚 Fiction</div>
            <div className="badge badge-lg badge-secondary badge-outline">🔬 Science</div>
            <div className="badge badge-lg badge-accent badge-outline">💼 Business</div>
            <div className="badge badge-lg badge-neutral badge-outline">🎨 Arts</div>
            <div className="badge badge-lg badge-info badge-outline">💻 Technology</div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-pulse">📖</div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-bounce">✨</div>
      <div className="absolute top-1/2 right-20 text-5xl opacity-10 animate-pulse delay-700">🔖</div>
    </div>
  );
}

export default Header;