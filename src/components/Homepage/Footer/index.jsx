import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Fast, Fastcon, Fotercon, Fotertext, Logo, Menu, Menucon, Meta, Metacon, Safecon, Safeimg, Shopcon, Shopimg, Textcon, Upcon, Upimg } from './style'
import shopimg from '../../../assets/img/shop.png'
import fastcon from '../../../assets/img/post.png'
import safeimg from '../../../assets/img/like.png'
import Spin from 'react-reveal/Spin';
import Zoom from 'react-reveal/Zoom';
import logo from '../../../assets/img/logoo.png'
import meta from '../../../assets/img/meta.png'
import upimg from '../../../assets/img/up.png'
import Swing from 'react-reveal/Swing';
import Jump from 'react-reveal/Jump';









const Footer = () => {
  return (
     <Container>
        <Upcon>

            <Shopcon>
            <Zoom left>
                <Shopimg src={shopimg}/>
                <Textcon>
                    <h1>Safe shopping</h1>
                    <p>Buy with confidence</p>
                </Textcon>
            </Zoom>
            </Shopcon>
            <Fast>
            <Spin>
                <Fastcon src={fastcon}/>
                <Textcon>
                    <h1>Fast shipping</h1>
                    <p>Get your product fast</p>
                </Textcon>
            </Spin>
            </Fast>
            <Safecon>
                <Zoom right>
                <Safeimg src={safeimg}/>
                <Textcon>
                    <h1>Satisfaction guarantee</h1>
                    <p>Or get your money back</p>
                </Textcon>
                </Zoom>
            </Safecon>
        </Upcon>
        <Fotercon>
            <Menucon>
            <Spin right>
            <Logo src={logo}/>
            </Spin>
            <Menu>
            <Swing>
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
            </Swing>
            </Menu>
            <Jump>
            <Meta src={meta}/>
            </Jump>
            </Menucon>
            <Metacon>
                <Fotertext>
                    <p>Version 1.2 | Image Licensing | Made By Pablo Ramos | Visit My Templates | Powered By Webflow </p>
                </Fotertext>
                <Upimg src={upimg}/>
            </Metacon>
        </Fotercon>

     </Container>
  )
}

export default Footer
