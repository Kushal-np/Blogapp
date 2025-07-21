function Courses() {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const res = await axios.get("https://bookish-767c.onrender.com/api/v1/book/getBook");
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
      <AddBooks onBookAdded={getBook} /> {/* <-- FIX here */}

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
