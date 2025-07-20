import { useState , useEffect } from 'react';
import Card from '../../Components/CardComponent';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import axios from 'axios'
function Courses(){
    const [book,setBook] = useState([])
    useEffect(()=>{
        const getBook = async() =>{
            try{
                const res = await axios.get("http://localhost:8003/api/v1/book/getBook")
                console.log(res.data)
                setBook(res.data.book)
            }
            catch(error){
                console.log(error)
            }
        }
        getBook()
    },[])
    return(
        <div>
            <Navbar/>
            <Header />
            
            <div className='flex flex-wrap lg:grid lg:grid-cols-3 lg:grid-rows-2'>
                {
                    book.map((listItem)=>{
                        return(
                            <Card  key={listItem._id} name={listItem.name} title={listItem.title} price={listItem.price} category={listItem.category} image={listItem.image}  />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
export default Courses;