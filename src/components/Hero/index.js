import React from "react"
import { HeroBkg, HeroContent, HeroText, HeroWrapper } from "./HeroElements"
import HeaderBkg from "../../images/hero-bkg.gif"
import HiThere from "../../images/hi-there.png"
import { Container } from "../UtilityElements"
const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBkg>
        <img src={HeaderBkg} alt="hero image" />
      </HeroBkg>
      <HeroContent className="subhero-bkg">
        <HeroText>
          <img src={HiThere} alt='Hi There'/>
          <p>Wife, Mother, Pastor, Author, Mentor,  Podcaster,            
            Traveller. Welcome to my classroom, podcast and  
            all things JESUS!</p>
        </HeroText>
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero
