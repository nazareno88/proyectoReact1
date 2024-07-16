import { useEffect, useState } from "react"
import listaProductos from "../json/productos.json"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()

     useEffect(()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
               resolve(listaProductos.find(producto => producto.id == id)) 
            }, 2000);
        })  

        promesa.then(response => { 
           setProducto(response)
        })

     },[id])

     return(
        <div className="container">
           <div className="row">
            <ItemDetail  producto = {producto}/>
           </div>
        </div>
     )

}

export default ItemDetailContainer