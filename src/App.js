import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from './Pages/admin/Layout'
import Product from './Pages/admin/Product'
import Order from './Pages/admin/Order'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' >
            <Route path='product' element={<Product />} />
            <Route path='order' element={<Order />} />
          </Route>
          <Route path='*' element={<h1>Page is Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App