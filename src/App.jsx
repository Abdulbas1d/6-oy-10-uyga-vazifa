import React, { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Products from './pages/Products'
import ErrorPage from './pages/ErrorsPage'
import MainLayouts from './Layouts/MainLayouts'
import Cards from './pages/Cards'
import Login from './Login'
import CreateAccount from './CreateAccount'
import ProductsDetails from './pages/ProductsDetails'


export const CountCart = createContext("")

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountCart.Provider value={{ count, setCount }}>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/createAccount' element={<CreateAccount></CreateAccount>}></Route>
          <Route path='/' element={<MainLayouts><HomePage></HomePage></MainLayouts>}></Route>
          <Route path='/about' element={<MainLayouts><About></About></MainLayouts>}></Route>
          <Route path='/products' element={<MainLayouts><Products></Products></MainLayouts>}></Route>
          <Route path='/products/:id' element={<MainLayouts><ProductsDetails></ProductsDetails></MainLayouts>}></Route>
          <Route path='/cards' element={<MainLayouts><Cards></Cards></MainLayouts>}></Route>
          <Route path='*' element={<MainLayouts><ErrorPage></ErrorPage></MainLayouts>}></Route>
        </Routes>
      </CountCart.Provider>
    </div>
  )
}

export default App
