import { Route, Routes, useNavigate } from 'react-router-dom'
import Fotter from './Fotter/Fotter'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Boys from './components/products/Boys'
import Girls from './components/products/Girls'
import Men from './components/products/Men'
import Women from './components/products/Women'
import Cart from './components/Cart/Cart'
import Login from './components/Home/Login'
import RequiredAuth from './hoc/RequiredAuth'

function App() {

  return (
    <div className="App">
     
      <Header /> 
      <Routes>
        <Route path="/" element={
        <RequiredAuth>  <Home />
        </RequiredAuth>} />
        <Route path="/women" element={
           <RequiredAuth> <Women /> </RequiredAuth>} />
        <Route path="/men" element={
                  <Men />} />
        <Route path="/girls" element={<Girls />} />
        <Route path="/boys" element={<Boys />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
      <Fotter />
     

    </div>
  )
}

export default App
