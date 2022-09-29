import React from 'react'
import { Aboutcon, Aboutimg, Contact, Contactimg, Cushion, DownPage, Homecon, Homeimg, Homeright, Paragrif, Product, Productimg, Upcon } from './style'
import homeimg from '../../assets/img/homeimg.png'
import Fade from 'react-reveal/Fade';
import aboutimg from '../../assets/img/gril.png'
import productimg from '../../assets/img/pillow.png'
import contactimg from '../../assets/img/keybord.png'
import Reveal from 'react-reveal/Reveal';
import Zoom from 'react-reveal/Zoom';
import Aboutme from './Aboutme';





const Home = () => {
  return (
       
   <Homecon>
    <Upcon>
    <Fade left>
       <Homeimg src={homeimg}/>
    </Fade>
    <Fade right>
    <Homeright>
         <p>NEW</p>
         <h1>Spring Cushion <br /> Collection 2019</h1>
         <button>BUY NOW</button>
      </Homeright>
    </Fade>
    </Upcon>
    <Cushion>
        <Reveal effect ="fadeInUp">
        <p>I'm a cushion designer</p>
        <h3>Based in San Francisco, California I design trendy and fashion Cushions, <br />
           since I have memory I always had a tendency to design and illustration.</h3>
           <button>Learn More</button>
        </Reveal>
        <DownPage>
            <Fade left>
                <Aboutcon>
                    <Aboutimg src={aboutimg}/>
                    <Paragrif>
                        <h1>About me</h1>
                        <p>Learn more</p>
                    </Paragrif>
                </Aboutcon> 
            </Fade> 
            <Zoom left>   
            <Product>
                <Productimg src={productimg}/>
                <Paragrif>
                    <h1>My products</h1>
                    <p>Learn more</p>
                </Paragrif>
            </Product>
            </Zoom>
            <Fade right>
                <Contact>
                    <Contactimg src={contactimg}/>
                    <Paragrif>
                        <h1>Contact me</h1>
                        <p>Learn more</p>
                    </Paragrif>
                </Contact>
            </Fade>
        </DownPage>
      </Cushion>
      <Aboutme/>
   </Homecon>



  )
}

export default Home