import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/app.css'
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"



function App() {
  return (
    <>
      <BrowserRouter>
      < NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/producto/:id"} element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App