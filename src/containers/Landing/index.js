// @flow
import React from "react"
import { Link } from "react-router-dom"

import "./index.css"
import landingGraphic from "../../images/landingGraphic.svg"

type Props = {}

class PeetersDesign extends React.Component<Props> {
  render() {
    return (
      <div className="landing-page-container">
        <Link to="/home">
          <img
            className="landing-page-graphic"
            src={landingGraphic}
            alt="Landing Page Graphic"
          />
        </Link>
      </div>
    )
  }
}

export default PeetersDesign
