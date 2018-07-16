// @flow
import React from "react"
import ResponsiveMenu from "react-responsive-navbar"
import { NavLink } from "react-router-dom"

import "./index.css"

type Props = {}

class Navbar extends React.Component<Props> {
  render() {
    return (
      <ResponsiveMenu
        menuOpenButton={<div className="navbar-button">J</div>}
        menuCloseButton={
          <div className="navbar-button navbar-button-close">J</div>
        }
        changeMenuOn="500px"
        largeMenuClassName="navbar"
        smallMenuClassName="navbar navbar-small"
        menu={
          <div className="navbar-menu">
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              exact
              to="/home"
            >
              home
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/portfolio"
            >
              portfolio
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/resume"
            >
              resume
            </NavLink>
            <NavLink
              className="navbar-menu-button"
              activeClassName="active-button"
              to="/contact"
            >
              contact
            </NavLink>
          </div>
        }
      />
    )
  }
}

export default Navbar
