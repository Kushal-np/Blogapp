import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import EmailField from './Components/EmailField'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col'>
      <Banner />
      <EmailField/>
      </div>
      <Footer/>
    </div>
  )
}

export default App