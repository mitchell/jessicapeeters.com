import React from "react"

import "./PeetersDesign.css"
import Routes from "./routes"
import Navbar from "./components/Navbar"

class PeetersDesign extends React.Component {
  render() {
    return (
      <div className="website-container">
        <Navbar />
        <Routes />
      </div>
    )
  }
}

export default PeetersDesign
