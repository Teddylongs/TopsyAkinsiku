import React from "react"
import logo from "../../images/logo-large.png"
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
          <CTA>Contact Us</CTA>
          </FooterContent>
          <FooterSocial>
            <a href="https://instagram.com/topsyakinsiku">
              <IGLogo color="white" size={10} style={{'margin-right': '2px'}}/>
            </a>
            <a href="https://twitter.com/topsyakinsiku">
              <TWLogo color="white" size={10} style={{'margin-right': '1px'}}/>
            </a>
            <a href="https://facebook.com/topsyakinsiku">
              <FBLogo color="white" size={9} />
            </a>
          </FooterSocial>
        </FooterContainer>
      </FooterWrapper>
    </>
  )
}

export default Footer
