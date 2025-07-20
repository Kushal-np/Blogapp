function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center py-16 gap-10">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover Your Next <span className="text-primary">Favorite Book</span>
        </h1>
        <p className="text-white text-lg ">
          Welcome to <span className="font-semibold text-primary">Bookish</span> — your personal online bookstore where imagination meets knowledge.
          Find curated collections, bestsellers, new releases, and hidden gems across every genre. Dive into the world of stories that inspire, educate, and entertain.
        </p>
        <div className="flex gap-4">
          <button className="btn btn-primary">Browse Books</button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg"
          alt="Books Banner"
          className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
