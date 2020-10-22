import React from "react"
import {Link} from 'gatsby'
import logo from "../../images/logo-white.png"
import {
  IoLogoInstagram as IGLogo
} from "react-icons/io"
import { ImTwitter as TWLogo,ImFacebook as FBLogo } from "react-icons/im"
import {
  FooterContainer,
    FooterContent,
  FooterLogo,
  FooterSocial,
  FooterWrapper,
} from "./FooterElements"
import {CTA} from '../ButtonElements'

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContainer>
          <FooterLogo className="logo" to="/">
            <img src={logo} />
          </FooterLogo>
          <FooterContent>
          <CTA color='white'>Contact Us</CTA>
          <div style={{'display': 'flex'}}>
          <Link to='/'>Privacy Policy</Link>
          <p style={{'margin': '0 0.2rem 0 0.2rem', 'font-weight' : '800'}}> | </p>
          <Link  to='/'>Terms and Conditions</Link>
          </div>
          </FooterContent>
          <FooterSocial>
            <a href="https://instagram.com/topsyakinsiku">
              <IGLogo color="white" size={35} style={{'margin-right': '1rem'}}/>
            </a>
            <a href="https://twitter.com/topsyakinsiku">
              <TWLogo color="white" size={35} style={{'margin-right': '0.8rem'}}/>
            </a>
            <a href="https://facebook.com/topsyakinsiku">
              <FBLogo color="white" size={30} />
            </a>
          </FooterSocial>
        </FooterContainer>
      </FooterWrapper>
    </>
  )
}

export default Footer
