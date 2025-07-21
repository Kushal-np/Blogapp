import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Card from "../../Components/CardComponent";
import AddBooks from "../../Components/AddBooks";

function Courses() {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const res = await axios.get("https://bookish-767c.onrender.com/api/v1/book/getBook");
      console.log("Books fetched:", res.data);
      setBook(res.data.book);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <AddBooks onBookAdded={getBook} />

      <div className="bg-black py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Force React to remount when book count changes */}
          <div
            key={book.length}
            className="flex flex-wrap gap-8 justify-center lg:grid lg:grid-cols-3 lg:grid-rows-auto"
          >
            {book.map((listItem) => (
              <Card
                key={listItem._id}
                name={listItem.name}
                title={listItem.title}
                price={listItem.price}
                category={listItem.category}
                image={listItem.image}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
