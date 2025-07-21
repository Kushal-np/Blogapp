import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../CardComponent";

function FreeBook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("https://bookish-767c.onrender.com/api/v1/book/getBook");
        const freeBooks = (res.data.book || []).filter(book => book.category === "Free");
        setBooks(freeBooks);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4">
      <div className="max-w-7xl mx-auto py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Explore Free Books
          </h1>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked selection of timeless books available at no cost.
          </p>
        </div>

        {/* Content */}
        {loading ? (
          <p className="text-gray-500 text-center text-lg py-16">Loading books...</p>
        ) : books.length === 0 ? (
          <p className="text-gray-500 text-center text-lg py-16">No free books available right now.</p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book, idx) => (
              <Card key={idx} {...book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FreeBook;
