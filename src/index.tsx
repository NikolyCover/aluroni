import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FoodMenu from './pages/FoodMenu'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <FoodMenu />
  </React.StrictMode>
)