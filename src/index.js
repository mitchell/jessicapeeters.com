import React from 'react'
import ReactDOM from 'react-dom'

import PeetersDesign from './PeetersDesign.js'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <PeetersDesign />,
  document.getElementById('root')
)
registerServiceWorker()
