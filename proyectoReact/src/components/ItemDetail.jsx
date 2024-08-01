import "../styles/detail.css"
import ItemCount from "./ItemCount"

const ItemDetail = ({ producto }) => {
    return (
        <div className="container">
            <div className="img-card"></div>
               <img src={producto.image} alt={producto.title} className="img-fluid" />
            <div className="box">
                <h1>{producto.title}</h1>
             <p>{producto.description}</p>
             <p><b>${producto.price}</b></p>
             <div className="btn-card">
                <ItemCount stock={producto.stock}/>
             </div>

        </div>
        </div>
    )
}



export default ItemDetail