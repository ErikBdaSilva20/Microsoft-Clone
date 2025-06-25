import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './home'
import { GlobalStyles } from './globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
