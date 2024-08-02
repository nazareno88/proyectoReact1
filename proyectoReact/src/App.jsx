import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/app.css'
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import CartContextProvider from "./components/context/CartContext"
import Cart from "./components/Cart"




function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
      < NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/producto/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"/cart"} element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}
export default App