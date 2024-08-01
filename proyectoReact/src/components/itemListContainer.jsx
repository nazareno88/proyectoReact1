import { useEffect, useState } from "react"
import listaProductos from "../json/productos.json"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {id} = useParams();

     useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
               resolve(id ? listaProductos.filter(producto => producto.category === id) : listaProductos) 
            }, 2000);
        })  

        promesa.then(response => { 
           setProductos(response)
        })

     },[id])

     return(
        <div className="container">
           <div className="row">
            <ItemList  productos = {productos}/>
           </div>
        </div>
     )

}

export default ItemListContainer