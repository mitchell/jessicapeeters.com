import React from 'react'
import ReactDOM from 'react-dom'
import PeetersDesign from './PeetersDesign.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PeetersDesign />, div)
  ReactDOM.unmountComponentAtNode(div)
})
