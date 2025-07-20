import list from "../../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../CardComponent";
function FreeBook(){
    const filterData = list.filter((data)=>data.category==="Free");
    
    return(
        <div>
            <div className="slider-container">
        <div className="flex flex-wrap lg:grid lg:grid-cols-3 lg:grid-rows-2">
        {
            list.map((listItem)=>{
                return(
                    <Card key={listItem.id} name={listItem.name} title={listItem.title} price={listItem.price} category={listItem.category} image={listItem.image} />
                )
            })
        }
        </div>
    </div>
        </div>
    )
}
export default FreeBook;
