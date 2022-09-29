import React from 'react'
import { Container, Formcon, Formleft, Formright, Input, Newstart, Paragrif } from './style'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Reveal';
import Footer from '../Footer';





const Contact = () => {
  return (
    
      
    <Container>
      <Formcon>
        <Slide left>
          <Formleft>
            <h2>Email</h2>
            <h2>support@website.com</h2>
            <h2>phone</h2>
            <h2>800-123-456</h2>
            <h2>address</h2>
            <h2>23 Evergreen Street,</h2>
            <h2>San Francisco, California</h2>
            <h2>USA</h2>
          </Formleft>
          </Slide>
        <Slide right>
          <Formright>
            <Paragrif>
              <h1>address</h1>
              <p>Drop us your message and I'll get back to you as soon as possible.</p>
            </Paragrif>
             <Input>
             <input type="text" placeholder='your name' />
             <input type="text"  placeholder='your company'/>
             </Input>
             <Input>
             <input type="number" placeholder='your phone' />
             <input type="text" placeholder='your email' />
             </Input>
             <textarea name="text" id="textarea" cols="30" rows="10">your message</textarea>
             <button>Lets talk</button>
          </Formright>
          </Slide>
      </Formcon>
      <Newstart>
      <Reveal effect="fadeInUp">
        <h1>NEWSLETTER</h1>
        <p>Get promotions & updates!</p>
      </Reveal>
        <Input>
            <Slide left>
             <input type="text" placeholder='your name' />
            </Slide>
            <Zoom left>
             <input type="text"  placeholder='your email'/>
            </Zoom>
            <Slide right>
             <button>subscribe</button>
            </Slide>
         </Input>
      </Newstart>
      <Footer/>
    </Container>





  )
}

export default Contact
