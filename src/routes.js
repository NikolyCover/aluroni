import DefaultPage from 'components/DefaultPage'
import Menu from 'components/Menu'
import FoodMenu from 'pages/FoodMenu'
import Home from 'pages/Home'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path='foodMenu' element={<FoodMenu/>} />
          </Route>
        </Routes>
      </Router>
    </main>
  )
}