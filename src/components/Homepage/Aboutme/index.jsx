import React from 'react'
import { Beginleft, Beginnings, Beginright, Border, Carrer, Carrerimg, Carrerright, Container, Maincon, Mainleft, Mainright, Productleft, Products, Productsimg } from './style'
import mainright from '../../../assets/img/img.png'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import beginright from '../../../assets/img/table.png'
import carrerimg from '../../../assets/img/nature.png';
import productimg from '../../../assets/img/light.png'
import Rotate from 'react-reveal/Rotate';
import Roll from 'react-reveal/Roll';
import Collection from '../Collection';





const Aboutme = () => {
  return (
        
    <Container>
        <Maincon>
            <Zoom left>
            <Mainleft>
               <p>About me</p>
               <h1>I'm a trendy <br /> Cushion Designer </h1>
               <button>learn more</button>
            </Mainleft>
            </Zoom>
            <Flip left>
            <Mainright src={mainright}/>
            </Flip>
        </Maincon>
        <Beginnings>
        <Slide left>
            <Beginleft>
                <h1>beginnings</h1>
                <p>Credibly innovate granular internal or organic <br />
                   sources whereas high standards in web-readiness. <br />
                   Energistically scale future-proof core competencies <br />
                   vis-a-vis impactful experiences. <br /> <br />
                   Dramatically synthesize integrated schemas. with <br />
                   optimal networks. </p>
            </Beginleft>
        </Slide>
        <Slide right>
        <Beginright src={beginright}/>
        </Slide>
        </Beginnings>
        <Border/>
        <Carrer>
        <Rotate top left>
            <Carrerimg src={carrerimg}/>
        </Rotate>
            <Slide right>
            <Carrerright>
                <h1>Carrer</h1>
                <p>Collaboratively administrate turnkey channels <br />
                   whereas virtual e-tailers. <br /> <br />
                   Objectively seize scalable metrics whereas <br />
                   proactive e-services seamlessly empower fully <br />
                   researched growth strategies. <br /> <br />
                   And interoperable internal or “organic” sources. </p>
                  <button>Learn More</button>
            </Carrerright>
            </Slide>
        </Carrer>
        <Border/>
        <Products>
            <Slide left>
            <Productleft>
                <h1>products</h1>
                <p>Seamlessly empower fully researched growth <br />
                 strategies and interoperable internal or “organic” <br />
                  sources. <br /> <br />
                  Credibly innovate granular internal or “organic” <br />
                  sources whereas high standards in web-readiness. <br /> <br />
                  Energistically scale future-proof core competence</p>
            </Productleft>
            </Slide>
            <Roll right>
            <Productsimg src={productimg}/>
            </Roll>
        </Products>
        
      <Collection/>
        
       
    </Container>  



  )
}

export default Aboutme
