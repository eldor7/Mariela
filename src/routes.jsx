import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import About from './components/about';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Contactme from './components/Contactme';
import { Shopimg } from './components/NavStyle';
import Home from './components/Homepage/home';


const RoutesPage = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                    <Route path="contactme" element={<Contactme />} />
                    <Route path="shopimg" element={<Shopimg />} />
                </Routes>
            </BrowserRouter></div>
    )
}

export default RoutesPage