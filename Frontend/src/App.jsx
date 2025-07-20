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
import Login from './Components/Login'
import Signup from './Components/SignUp'
import AboutPage from './Pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Courses />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </div>
  )
}

export default App;