import React from "react"
import Layout from '../components/layout'
import '../styles/main.css'

import {Container, Content, ContentLeft, ContentRight} from '../components/UtilityElements'

import meetTopeImg from '../images/meet-tope-image.png'
import scribble from '../images/scribble.png'
import meetTopeTxt from '../images/meet-tope-text.png'
import {Spacer} from '../components/UtilityElements'
import { CTA } from "../components/ButtonElements"

const IndexPage = () => (
 <>
 <Layout>
     <Container id='meet-tope'>
         <Content>
             <ContentLeft grow='1' width='60%'>
             <img src={meetTopeImg} alt='' style={{'width': '100%'}} />
             </ContentLeft>
             <Spacer size='2rem'/>
             <ContentRight className='content-right' grow='0' width='40%' style={{}}>
             <img className='heading' src={meetTopeTxt} alt='' style={{'max-width': '100%'}}/>
            <Spacer size='25px'/>
            <div style={{textAlign: 'left'}}>
            <img src={scribble} alt='' style={{'width': '100%'}}/>
            <Spacer size='50px'/>
            <article>
                <h3>I’m a Jesus girl with a passion</h3>
                <h3>I’m married to my best friend</h3>
                <h3>I’m the co-pastor to a congregation of champions</h3>
                <h3>But there’s more… </h3>
            </article>
            </div>
           

            <CTA style={{'display': 'block', 'margin': 'auto'}}>Learn More</CTA>
             </ContentRight>
         </Content>
     </Container>

     
     {/* <section id='meet-tope'>
         <div className='content-left'>
             <img src={meetTopeImg} alt=''/>
         </div>
         <div className='content-right'>
            <img src={meetTopeTxt} alt='' style={{'max-width': '100%'}}/>
            <Spacer size='25px'/>
            <img src={scribble} alt='' style={{'width': '100%'}}/>
            <Spacer size='25px'/>
            <article>
                <h3>I’m a Jesus girl with a passion</h3>
                <h3>I’m married to my best friend</h3>
                <h3>I’m the co-pastor to a congregation of champions</h3>
                <h3>But there’s more… </h3>
            </article>

            <CTA style={{'display': 'block', 'margin': 'auto'}}>Learn More</CTA>
         </div>

     </section> */}
 </Layout>
 </>
)

export default IndexPage
