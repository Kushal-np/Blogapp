import { useEffect } from "react";
import list from "../../../public/list.json"
import Card from "../CardComponent";
import axios from 'axios'
import { useState } from "react";
function FreeBook(){
    const [book,setBookState] = useState([])
    useEffect(()=>{
        const getBook = async() =>{
            try{
                const res = await axios.get("http://localhost:8003/api/v1/book/getBook")
                setBookState(res.data.book)
            }
            catch(error){
                console.log(error)
            }
        }
        getBook()
    },[])




    const filterData = book.filter((data)=>data.category==="Free");
    
    return(
        <div className="min-h-[15vh]" >
            <div className="slider-container">
        <div className="flex flex-wrap lg:grid lg:grid-cols-3 lg:grid-rows-2">
        {
            filterData.map((listItem)=>{
                return(
                    <Card key={listItem._id} name={listItem.name} title={listItem.title} price={listItem.price} category={listItem.category} image={listItem.image} />
                )
            })

            
        }
        </div>
    </div>
        </div>
    )
}
export default FreeBook;
