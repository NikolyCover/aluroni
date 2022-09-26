import FoodMenu from 'pages/FoodMenu'
import Home from 'pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/foodMenu' element={<FoodMenu/>} />
      </Routes>
    </Router>
  )
}