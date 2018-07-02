import React from "react"

import "./PeetersDesign.css"
import landingGraphic from "./images/landingGraphic.svg"

class PeetersDesign extends React.Component {
  render() {
    return (
      <div className="landing-page-container">
        <div className="landing-page-text">
          <p>
            website under development
            <br />
            please contact jess at j@jessicapeeters.com
          </p>
        </div>
        <img
          className="landing-page-graphic"
          src={landingGraphic}
          alt="Landing Page Graphic"
        />
      </div>
    )
  }
}

export default PeetersDesign
