import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import EmailField from './Components/EmailField'
import Footer from './Components/Footer'
import FreeBook from './Components/FreeBook'
import Heading from './Components/Heading'
import Home from './Pages/Home'
import {Routes , Route, Navigate} from 'react-router-dom'
import Courses from './Pages/Courses'
import Login from './Components/Login'
import Signup from './Components/SignUp'
import AboutPage from './Pages/About'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

const App = () => {
    const [authUser , setAuthUser] = useAuth()
    console.log(authUser)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={authUser?<Courses />:<Navigate to="/signup" />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App;