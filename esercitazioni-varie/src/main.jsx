import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Eslampadina from './Eslampadina.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Eslampadina />
    <App />
  </StrictMode>
)
