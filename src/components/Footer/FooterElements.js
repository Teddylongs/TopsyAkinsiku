import styled from "styled-components/macro"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  background: #ab9776;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  color: white;
`

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
  justify-content: space-around;
  padding: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const FooterLogo = styled(Link)`
  min-width: 25%;
  justify-self: flex-start;
`
export const FooterSocial = styled.div`
  min-width: 25%;
  display: flex;
  justify-content: center;
  justify-self: flex-end;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export const FooterContent = styled.div`
    min-width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-self: center;
    justify-content: flex-start;

    a {
      text-decoration: underline;
      transition: all 0.2 linear;
    }

    a:hover {
      color: #D3D3D3
    }

    p, a {
      font-size: 0.9rem;
    }



`
