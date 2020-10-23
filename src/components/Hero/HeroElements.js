import styled from "styled-components/macro"

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`

export const HeroBkg = styled.div`
  display: block;
  /* position: absolute; */
  /* z-index: -10; */
  /* & img {
    width: 100%;
  } */
`

export const HeroContent = styled.div`
    top: -20px;
    z-index: -5;
    position: relative;
    height: fit-content;
    & img {
        width: 100%;
        height: 100%;
        object-position: 50% 50%;
    }

`

export const HeroText = styled.div`
padding: 5rem 0;
	margin-left: 16vw;
    color: #4b4b4b;
    
    & img {
        max-width: 400px
    }
    p {
        margin:  1rem 0;
        max-width: 400px;
        font-family: abril-display-black;
        font-weight:400;
        font-size: calc(.12vh +  1rem);
        color: #4b4b4b;
        line-height: 1.5;
    }

`
