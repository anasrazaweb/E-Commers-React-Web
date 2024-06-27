import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './Pages/admin/Layout'
import Product from './Pages/admin/Product'
import Order from './Pages/admin/Order'
import Payment from './Pages/admin/Payment'
import Setting from './Pages/admin/Setting'
import Dashboard from './Pages/admin/Dashboard'
import Logout from './Pages/admin/Logout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' >
            <Route path='product' element={<Product />} />
            <Route path='order' element={<Order />} />
            <Route path='payment' element={<Payment />} />
            <Route path='setting' element={<Setting />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='logout' element={<Logout />} />
          </Route>
          <Route path='*' element={<h1>Page is Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App