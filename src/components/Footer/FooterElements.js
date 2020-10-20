import styled from "styled-components/macro"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  background: #ab9776;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
`

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
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
  color: white;
  justify-self: flex-end;
`

export const FooterContent = styled.div`
    min-width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
`
