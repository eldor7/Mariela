import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Logo, Navcon, Shopimg } from './NavStyle'
import shopimg from '../assets/img/IMAGE.png'
import logo from '../assets/img/logo.png'
import Spin from 'react-reveal/Spin';
import Zoom from 'react-reveal/Zoom';




const Navbar = () => {
    return (
        <Container>
            <Spin>
            <Logo src={logo}/>
            </Spin>
            <Navcon>
            <Zoom right>
            <Link to="/home">
               <h1>Home</h1>
            </Link>
            <Link to="/about">
                <h1>About me</h1>
            </Link>
            <Link to="/product">
               <h1>Products</h1>
            </Link>
            <Link to="/contactme">
              <h1>Contact me</h1>
            </Link>
            <Link to="/shopimg">
                <Shopimg src={shopimg}/>
            </Link>
            </Zoom>
            </Navcon>
        </Container >
    )
}

export default Navbar