import React from "react"
import Layout from "../components/layout"
import "../styles/main.css"

import {
  Container,
  Content,
  ContentLeft,
  ContentRight,
  Jumbotron,
  JumbotronTitle,
} from "../components/UtilityElements"

import meetTopeImg from "../images/meet-tope-image.png"
import scribble from "../images/scribble.png"
import meetTopeTxt from "../images/meet-tope-text.png"
import joinICT from "../images/join-ict.png"
import { Spacer } from "../components/UtilityElements"
import { CTA } from "../components/ButtonElements"
import Hero from "../components/Hero"



const IndexPage = () => (
  <>
    <Layout>
        <Jumbotron>
            <JumbotronTitle>It's time to<br/>Live life to the...<br/>Fullest Max Top Fullest Max</JumbotronTitle>
        </Jumbotron>
        <Hero/>
      <Container id="meet-tope">
        <Content>
          <ContentLeft grow="1" width="60%">
            <img src={meetTopeImg} alt="" style={{ width: "100%" }} />
          </ContentLeft>
          <Spacer size="2rem" />
          <ContentRight
            className="content-right"
            grow="0"
            width="40%"
            style={{}}
          >
            <img
              className="heading"
              src={meetTopeTxt}
              alt=""
              style={{ "max-width": "100%" }}
            />
            <Spacer size="calc(2vh)" />
            <div style={{ textAlign: "left" }}>
              <img src={scribble} alt="" style={{ width: "100%" }} />
              <Spacer size="5vh" />
              <article>
                <h3>I’m a Jesus girl with a passion</h3>
                <h3>I’m married to my best friend</h3>
                <h3>I’m the co-pastor to a congregation of champions</h3>
                <em>
                  <h3>But there’s more… </h3>
                </em>
              </article>
              <Spacer size="0.05vw" />
              <CTA className="cta" style={{ display: "block" }} color="#4b4b4b">
                Learn More
              </CTA>
            </div>
          </ContentRight>
        </Content>
      </Container>
      <Container id="join-inner-circle" style={{ padding: "3% 0" }}>
        <Content direction="column">
          <img src={joinICT} alt="" />
          <CTA color="black">Subscribe</CTA>
        </Content>
      </Container>
    </Layout>
  </>
)

export default IndexPage
