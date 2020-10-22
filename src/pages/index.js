import React from "react"
import Layout from '../components/layout'
import '../styles/main.css'


import meetTopeImg from '../images/meet-tope-image.png'
import meetTopeTxt from '../images/meet-tope-text.png'
import { CTA } from "../components/ButtonElements"

const IndexPage = () => (
 <>
 <Layout>
     <section id='meet-tope'>
         <div className></div>
         <div className='content-left'>
             <img src={meetTopeImg} alt=''/>
         </div>
         <div className='content-right'>
            <img src={meetTopeTxt} alt=''/>

                <CTA style={{'display': 'block', 'margin': 'auto'}}>Learn More</CTA>
         </div>

     </section>
 </Layout>
 </>
)

export default IndexPage
