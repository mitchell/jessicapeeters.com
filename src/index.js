import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

import PeetersDesign from "./PeetersDesign.js"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"

ReactDOM.render(
  <BrowserRouter>
    <PeetersDesign />
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
