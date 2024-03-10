import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom"
import Navb from "./components/Navbar"
import Contacto from "./views/Contacto"
import NotFound from "./views/NotFound"
import Casa from "./views/Casa"


const App = () => {
  return (
  
    <BrowserRouter>
    <Navb/>
    <Routes>
      <Route path="/Casa" element={<Casa/>}/>
      <Route path="/Contacto" element={<Contacto/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App