import { useState , useEffect } from 'react';
import Card from '../../Components/CardComponent';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import axios from 'axios'
import { AddBook } from '../../../../Backend/controllers/book.controller';
import AddBooks from '../../Components/AddBooks';
function Courses() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8003/api/v1/book/getBook");
        setBook(res.data.book);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <AddBooks />

      {/* Cards container wrapper for max width and center */}
      <div className="bg-black py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap gap-8 justify-center lg:grid lg:grid-cols-3 lg:grid-rows-auto">
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
