import { useContext, useState } from "react"
import "../styles/detail.css"
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext"

const ItemDetail = ({ producto }) => {

    const [cargando, setCargando] = useState(true)
    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem (producto, quantity)
    }

    return (
        <div className="container">
            <div className="img-card"></div>
               <img src={producto.image} alt={producto.title} className="img-fluid" />
            <div className="box" key={producto.id}>
                <h1>{producto.title}</h1>
             <p>{producto.description}</p>
             <p><b>${producto.price}</b></p>
             <div className="btn-card">
                <ItemCount stock={producto.stock} onAdd={onAdd}/>
             </div>

        </div>
        </div>
    )
}



export default ItemDetail