import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddBooks() {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    title: "",
  });
  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(false);

  const categories = [
    "Fiction", "Non-Fiction", "Mystery", "Romance", "Science Fiction",
    "Fantasy", "Biography", "History", "Self-Help", "Business",
    "Philosophy", "Poetry", "Drama", "Adventure", "Thriller","Information Technology" , "Free"
  ];

  function formHandler() {
    setShowForm(!showForm);
    if (showForm) {
      setFormData({
        name: "",
        price: "",
        category: "",
        image: "",
        title: "",
      });
    }
  }

  function handleInputChange(field, value) {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  // Fetch books from backend
  async function fetchBooks() {
    setLoadingBooks(true);
    try {
      const res = await axios.get("https://bookish-767c.onrender.com/api/v1/book/getBooks", {
        withCredentials: true,
      });
      console.log("Book added to the database")
      setBooks(res.data);
    } catch (error) {
      toast.error("Failed to load books");
      console.error(error.response?.data || error.message);
    } finally {
      setLoadingBooks(false);
    }
  }

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  async function handler(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await axios.post(
        "https://bookish-767c.onrender.com/api/v1/book/AddBook",
        formData,
        { withCredentials: true }
      );

      toast.success("Book added successfully!");

      setFormData({
        name: "",
        price: "",
        category: "",
        image: "",
        title: "",
      });
      setShowForm(false);

      // Fetch updated list after adding a new book
      fetchBooks();

    } catch (error) {
      toast.error("Error while adding the book");
      console.error(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] bg-black text-white">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {!showForm ? (
          <div className="text-center max-w-xl mx-auto space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white mb-6">
              {/* Add icon SVG */}
              <svg
                className="w-10 h-10 stroke-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Expand Your Library
            </h1>
            <p className="text-gray-300 leading-relaxed">
              Share knowledge with the community by adding your favorite books to our collection.
            </p>
            <button
              onClick={formHandler}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-semibold transition-transform duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              aria-label="Add New Book"
            >
              <svg
                className="w-5 h-5 stroke-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Add New Book
            </button>

            {/* Books List */}
            <div className="mt-12 text-left">
              <h2 className="text-2xl font-semibold mb-4">Available Books</h2>

              {loadingBooks ? (
                <p>Loading books...</p>
              ) : books.length === 0 ? (
                <p>No books available yet.</p>
              ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {books.map((book) => (
                    <li
                      key={book._id || book.id}
                      className="border border-white/30 rounded-lg p-4 bg-gray-900"
                    >
                      {book.image ? (
                        <img
                          src={book.image}
                          alt={`${book.title} cover`}
                          className="w-full h-48 object-contain mb-4"
                        />
                      ) : (
                        <div className="w-full h-48 flex items-center justify-center bg-gray-700 text-gray-400 mb-4">
                          No Image
                        </div>
                      )}
                      <h3 className="text-lg font-bold truncate">{book.title}</h3>
                      <p className="text-gray-400 mb-2 truncate">by {book.name}</p>
                      <p className="text-sm">
                        Category: <span className="italic">{book.category}</span>
                      </p>
                      <p className="text-sm font-semibold mt-1">${book.price}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          // Your existing add book form here
          <div className="max-w-xl mx-auto">
            <button
              onClick={formHandler}
              className="flex items-center gap-1 text-gray-400 mb-6 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded transition"
            >
              <svg
                className="w-4 h-4 stroke-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h2 className="text-3xl font-bold mb-2">Add New Book</h2>
            <p className="text-gray-400 mb-8">
              Fill in the details below to add a book to the collection.
            </p>

            <form onSubmit={handler} className="space-y-6">
              {/* Your existing form inputs */}
              {/* Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold mb-1">
                    Book Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    className="w-full rounded-md border border-white/50 bg-black px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
                    placeholder="Enter the book title"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">
                    Author Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full rounded-md border border-white/50 bg-black px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
                    placeholder="Enter the author's name"
                  />
                </div>
              </div>

              {/* Category and Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full rounded-md border border-white/50 bg-gray px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
                  >
                    <option className="text-black" value="">
                      Select a category
                    </option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="text-black">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="price" className="block text-sm font-semibold mb-1">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      id="price"
                      type="number"
                      min="0"
                      step="0.01"
                      required
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      placeholder="0.00"
                      className="w-full rounded-md border border-white/50 bg-black pl-8 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
                    />
                  </div>
                </div>
              </div>

              {/* Image */}
              <div>
                <label htmlFor="image" className="block text-sm font-semibold mb-1">
                  Book Cover Image URL <span className="text-gray-500 text-xs">(Optional)</span>
                </label>
                <input
                  id="image"
                  type="url"
                  placeholder="https://example.com/book-cover.jpg"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  className="w-full rounded-md border border-white/50 bg-black px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Provide a direct link to the book cover image
                </p>
              </div>

              {/* Preview */}
              {(formData.title || formData.name || formData.image) && (
                <>
                  <hr className="my-6 border-white/20" />
                  <div className="max-w-sm mx-auto bg-gray-900 border border-white/30 rounded-lg shadow-sm overflow-hidden">
                    <figure className="h-48 bg-black flex items-center justify-center">
                      {formData.image ? (
                        <img
                          src={formData.image}
                          alt="Book cover preview"
                          className="object-contain max-h-full"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                      ) : null}
                      <div
                        className={`w-full h-full flex items-center justify-center text-gray-600 ${
                          formData.image ? "hidden" : "flex"
                        }`}
                      >
                        <svg
                          className="w-12 h-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </figure>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {formData.title || "Book Title"}
                      </h3>
                      <p className="text-sm text-gray-400 truncate">
                        by {formData.name || "Author Name"}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="inline-block border border-white/50 rounded-full px-3 py-1 text-xs text-white">
                          {formData.category || "Category"}
                        </span>
                        <span className="font-bold text-white">
                          ${formData.price || "0.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  onClick={formHandler}
                  disabled={isLoading}
                  className="rounded-md border border-white/50 px-6 py-2 font-semibold text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="rounded-md bg-white px-6 py-2 font-semibold text-black hover:bg-gray-200 disabled:opacity-50 flex items-center gap-2 justify-center transition-colors"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Adding...
                    </>
                  ) : (
                    "Add Book"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddBooks;
