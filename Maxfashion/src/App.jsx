import { Route, Routes } from 'react-router-dom'
import Fotter from './components/Fotter/Fotter'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Boys from './components/products/Boys'
import Girls from './components/products/Girls'
import Men from './components/products/Men'
import Women from './components/products/Women'
function App() {
 

  return (
    <div className="App">
     
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/girls" element={<Girls />} />
        <Route path="/boys" element={<Boys />} />
      </Routes>
    
      <Fotter />
     

    </div>
  )
}

export default App
