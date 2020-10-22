import React from "react"
import {Container} from '../UtilityElements'

export default MeetTope = () => {
  return (
    <section id="meet-tope">
      <div className="content-left">
        <img src={meetTopeImg} alt="" />
      </div>
      <div className="content-right">
        <img src={meetTopeTxt} alt="" style={{ "max-width": "100%" }} />
        <Spacer size="25px" />
        <img src={scribble} alt="" style={{ width: "100%" }} />
        <Spacer size="25px" />
        <article>
          <h3>I’m a Jesus girl with a passion</h3>
          <h3>I’m married to my best friend</h3>
          <h3>I’m the co-pastor to a congregation of champions</h3>
          <h3>But there’s more… </h3>
        </article>

        <CTA style={{ display: "block", margin: "auto" }}>Learn More</CTA>
      </div>
    </section>
  )
}
