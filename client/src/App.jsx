import React from 'react'
import Navbar from './component/navbar'
import Footer from './component/footer';
import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Project from "./pages/projact/Project"
import Service from "./pages/service/Service"
import Contact from "./pages/contact/Contact"
export default function App() {
  return (
    <>
    <Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Projects' element={<Project/>}/>
<Route path='/Services' element={<Service/>}/>
<Route path='/Contact' element={<Contact/>}/>

</Routes>
<Footer/>
      
    </>
  )
}
