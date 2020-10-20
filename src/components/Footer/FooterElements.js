import styled from "styled-components/macro"
import { Link } from "gatsby"

export const FooterWrapper = styled.footer`
  background: #ab9776;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  align-items: center;
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
    justify-content: center;
`
