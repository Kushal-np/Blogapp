import list from '../../../public/list.json'
import Card from '../../Components/CardComponent';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
function Courses(){
    return(
        <div>
            <Navbar/>
            <Header />
            
            <div className='flex flex-wrap lg:grid lg:grid-cols-3 lg:grid-rows-2'>
                {
                    list.map((listItem)=>{
                        return(
                            <Card  key={listItem.id} name={listItem.name} title={listItem.title} price={listItem.price} category={listItem.category} image={listItem.image}  />
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    )
}
export default Courses;