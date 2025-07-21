import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "../Navbar"; // Adjust path as needed

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

  const categories = [
    "Fiction", "Non-Fiction", "Mystery", "Romance", "Science Fiction", 
    "Fantasy", "Biography", "History", "Self-Help", "Business", 
    "Philosophy", "Poetry", "Drama", "Adventure", "Thriller"
  ];

  function formHandler() {
    setShowForm(!showForm);
    if (showForm) {
      // Reset form when closing
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

  async function handler(e) {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await axios.post(
        "http://localhost:8003/api/v1/book/AddBook",
        formData,
        { withCredentials: true }
      );
      
      toast.success("Book added successfully!");
      console.log(response);
      
      // Reset form and close
      setFormData({
        name: "",
        price: "",
        category: "",
        image: "",
        title: "",
      });
      setShowForm(false);
      
    } catch (error) {
      toast.error("Error while adding the book");
      console.error(error.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      
      <div className="min-h-[70vh] bg-gradient-to-br from-base-200 via-base-100 to-base-200">
        <div className="container mx-auto px-4 py-12">
          {!showForm ? (
            // Sophisticated Landing State
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  Expand Your Library
                </h1>
                <p className="text-lg text-base-content/70 mb-8 leading-relaxed">
                  Share knowledge with the community by adding your favorite books to our collection.
                </p>
              </div>

              <div className="card bg-base-100 shadow-2xl border border-base-300/50 backdrop-blur-sm">
                <div className="card-body p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-base-content">Curated Quality</h3>
                      <p className="text-sm text-base-content/60">Add books you love and recommend</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-base-content">Community Driven</h3>
                      <p className="text-sm text-base-content/60">Help others discover great reads</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-base-content">Instant Access</h3>
                      <p className="text-sm text-base-content/60">Quick and easy submission process</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <button 
                      onClick={formHandler}
                      className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Add New Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Sophisticated Form State
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <button 
                  onClick={formHandler}
                  className="btn btn-ghost btn-sm gap-2 mb-4 hover:bg-base-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
                <h1 className="text-3xl font-bold text-base-content mb-2">Add New Book</h1>
                <p className="text-base-content/70">Fill in the details below to add a book to the collection</p>
              </div>

              <div className="card bg-base-100 shadow-2xl border border-base-300/50">
                <div className="card-body p-8">
                  <form onSubmit={handler} className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Book Title */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Book Title</span>
                          <span className="label-text-alt text-error">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter the book title"
                          className="input input-bordered focus:input-primary transition-colors"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          required
                        />
                      </div>

                      {/* Author Name */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Author Name</span>
                          <span className="label-text-alt text-error">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter the author's name"
                          className="input input-bordered focus:input-primary transition-colors"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Category */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Category</span>
                          <span className="label-text-alt text-error">*</span>
                        </label>
                        <select
                          className="select select-bordered focus:select-primary transition-colors"
                          value={formData.category}
                          onChange={(e) => handleInputChange('category', e.target.value)}
                          required
                        >
                          <option value="">Select a category</option>
                          {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      {/* Price */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-medium">Price</span>
                          <span className="label-text-alt text-error">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/60">$</span>
                          <input
                            type="number"
                            placeholder="0.00"
                            className="input input-bordered focus:input-primary transition-colors pl-8"
                            min="0"
                            step="0.01"
                            value={formData.price}
                            onChange={(e) => handleInputChange('price', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Image URL */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-medium">Book Cover Image URL</span>
                        <span className="label-text-alt">Optional</span>
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com/book-cover.jpg"
                        className="input input-bordered focus:input-primary transition-colors"
                        value={formData.image}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                      />
                      <label className="label">
                        <span className="label-text-alt text-base-content/60">
                          Provide a direct link to the book cover image
                        </span>
                      </label>
                    </div>

                    {/* Preview Card */}
                    {(formData.title || formData.name || formData.image) && (
                      <div className="divider">Preview</div>
                    )}
                    
                    {(formData.title || formData.name || formData.image) && (
                      <div className="card bg-base-200 shadow-lg max-w-sm mx-auto">
                        <figure className="h-48 bg-base-300">
                          {formData.image ? (
                            <img 
                              src={formData.image} 
                              alt="Book cover preview" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div className={`w-full h-full flex items-center justify-center ${formData.image ? 'hidden' : 'flex'}`}>
                            <svg className="w-12 h-12 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </figure>
                        <div className="card-body p-4">
                          <h3 className="card-title text-sm">{formData.title || 'Book Title'}</h3>
                          <p className="text-xs text-base-content/70">by {formData.name || 'Author Name'}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="badge badge-outline">{formData.category || 'Category'}</span>
                            <span className="font-bold text-primary">${formData.price || '0.00'}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="divider"></div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-end">
                      <button 
                        type="button" 
                        onClick={formHandler}
                        className="btn btn-ghost"
                        disabled={isLoading}
                      >
                        Cancel
                      </button>
                      <button 
                        type="submit" 
                        className="btn btn-primary gap-2 min-w-32"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="loading loading-spinner loading-sm"></span>
                            Adding...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Add Book
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddBooks;