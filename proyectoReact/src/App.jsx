import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/App.css'
import NavBar from './components/NavBar'
import Productos from "./pages/Productos"


function App() {
  return (
    <>
      <BrowserRouter>
      < NavBar />
        <Routes>
          <Route path={"/"} element={<Productos/>}/>
          <Route path={"/categoria/:idCategoria"} element={<Productos/>}/>
          <Route path={"/categoria/:idCategoria"} element={<Productos/>}/>
          <Route path={"/categoria/:idCategoria"} element={<Productos/>}/>
          <Route path={"/categoria/:idCategoria"} element={<Productos/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}



export default App