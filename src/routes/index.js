// @flow
import React from "react"
import { Route, Switch } from "react-router-dom"

import Landing from "../containers/Landing"
import Home from "../containers/Home"

type Props = {}

class Routes extends React.Component<Props> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/portfolio" component={null} />
        <Route path="/resume" component={null} />
        <Route path="/contact" component={null} />
      </Switch>
    )
  }
}

export default Routes
