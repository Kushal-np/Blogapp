import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import EmailField from './Components/EmailField'
import Footer from './Components/Footer'
import FreeBook from './Components/FreeBook'
import Heading from './Components/Heading'
import Home from './Pages/Home'
import {Routes , Route} from 'react-router-dom'
import Courses from './Pages/Courses'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App;