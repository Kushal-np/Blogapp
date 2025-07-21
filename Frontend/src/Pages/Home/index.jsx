import AddBooks from "../../Components/AddBooks";
import Banner from "../../Components/Banner";
import EmailField from "../../Components/EmailField";
import Footer from "../../Components/Footer";
import FreeBook from "../../Components/FreeBook";
import Heading from "../../Components/Heading";
import Navbar from "../../Components/Navbar";

function Home(){
 return(
    
        <div>
      <Navbar />
      <div className='flex flex-col'>
      <Banner />
      </div>
      <Heading />
      <FreeBook className="min-h-[15vh]"/>
     
      <Footer/>
      
    </div>
    
 )
}
export default Home;