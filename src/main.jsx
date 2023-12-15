import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name="herme" imageId="YfeOqp2" profesion="si" reconocimientos={["locotron","si","no","lo"]} elemento="horsis" size={400}/>
  </React.StrictMode>,
)