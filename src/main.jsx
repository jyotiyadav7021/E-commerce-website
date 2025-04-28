import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IndexPage  from './App.jsx'
import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
)
