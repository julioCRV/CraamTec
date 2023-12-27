import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Componente2 from './components/Componente2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Componente2/>
  </React.StrictMode>
)
