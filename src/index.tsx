import React from 'react'
// import { createRoot } from 'react-dom/client'
import { App } from './app/entry'

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App.Container />, container)

import ReactDOM from 'react-dom' //react v17
const container = document.getElementById('root') //react v17
ReactDOM.render(<App.Container />, container) //react v17
