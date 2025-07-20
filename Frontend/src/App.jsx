import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import EmailField from './Components/EmailField'
import Footer from './Components/Footer'
import FreeBook from './Components/FreeBook'
import Heading from './Components/Heading'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col'>
      <Banner />
      <EmailField/>
      </div>
      <Heading />
      <FreeBook/>
      <Footer/>
    </div>
  )
}

export default App