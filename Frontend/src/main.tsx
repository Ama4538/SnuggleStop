import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Pages
import Dashboard from './pages/dashboard.tsx'


// Style
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
)
