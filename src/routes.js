import DefaultPage from 'components/DefaultPage'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import About from 'pages/About'
import Dish from 'pages/Dish'
import FoodMenu from 'pages/FoodMenu'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} /> 
            <Route path='foodMenu' element={<FoodMenu/>} />
            <Route path='about' element={<About />} />
          </Route> {/* nested routes */}
          <Route path='*' element={<NotFound />} />
          <Route path='dishes/:id' element={<Dish />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}