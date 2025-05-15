import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/themeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className='max-w-[1280px] mx-auto'>
          <App />

          </div>
    </ThemeProvider>
  </StrictMode>,
)
