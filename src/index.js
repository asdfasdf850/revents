import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './app/layout/styles.css'
import App from './app/layout/App'
import * as serviceWorker from './serviceWorker'

function render() {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render)
  })
}

render()

serviceWorker.unregister()
