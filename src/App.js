import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SharedLayout from './components/SharedLayout'
import Home from './pages/Home'
import SharedProductLayout from './components/SharedProductLayout'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Error from './pages/Error'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login setUser={setUser} />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
