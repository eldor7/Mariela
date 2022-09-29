import React from 'react'
import { Black, Bluecon, Container, Deep, Downcon, Green, Main, Mainleft, Mainright, Pink, Pinkcon, Pinkmain, Plated, Silver } from './style'
import mainleft from '../../../assets/img/big.png'
import plated from '../../../assets/img/plated.png'
import silver from '../../../assets/img/silver.png'
import deep from '../../../assets/img/deep.png'
import pink from '../../../assets/img/pink.png'
import black from '../../../assets/img/black.png'
import green from '../../../assets/img/green.png'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Rotate from 'react-reveal/Rotate';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Contact from '../Contact'








const Collection = () => {
  return (
       
    <Container>
        <Main>
            <Bounce left>
            <Mainleft src={mainleft}/>
            </Bounce>
            <Slide right>
            <Mainright>
                <p>New</p>
                <h1>Spring Cushion <br /> Collection 2019</h1>
                <button>buy now</button>
            </Mainright>
            </Slide>
        </Main>
        <Downcon>
            <Bluecon>
                 <Rotate top left>
                        <Pinkmain>
                        <Plated src={plated}/>
                        <h1>Pink Cushion</h1>
                        <p>$ 19.99 USD</p>
                        </Pinkmain>
                 </Rotate>
                <Flip left>
                        <Pinkmain>
                            <Silver src={silver}/>
                            <h1>Pink Cushion</h1>
                            <p>$ 19.99 USD</p>
                        </Pinkmain>
                </Flip>
                <Zoom right>
                        <Pinkmain>
                            <Deep src={deep}/>
                            <h1>Pink Cushion</h1>
                            <p>$ 19.99 USD</p>
                        </Pinkmain>
                </Zoom>
            </Bluecon>
            <Pinkcon>
                <Roll left>
                <Pinkmain>
                    <Pink src={pink}/>
                    <h1>Pink Cushion</h1>
                    <p>$ 19.99 USD</p>
                </Pinkmain>
                </Roll>
                <Flip left>
                <Pinkmain>
                    <Black src={black}/>
                    <h1>Pink Cushion</h1>
                    <p>$ 19.99 USD</p>
                </Pinkmain>
                </Flip>
                <Roll right>
                <Pinkmain>
                    <Green src ={green}/>
                    <h1>Pink Cushion</h1>
                    <p>$ 19.99 USD</p>
                </Pinkmain>
                </Roll>
            </Pinkcon>
        </Downcon>
        <Contact/>
    </Container>



  )
}

export default Collection
