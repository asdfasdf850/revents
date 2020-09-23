import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'

import App from './app/layout/App'
import * as serviceWorker from './serviceWorker'
import './app/layout/styles.css'

function render() {
  ReactDOM.render(<App />, document.getElementById('root'))
}

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}

render()

serviceWorker.unregister()
