import { useEffect, useState } from "react"
import listaProductos from "../json/productos.json"
import "../styles/productos.css"
import { useParams } from "react-router-dom"

const Productos = () => {
    const [items, setItems] = useState(listaProductos);

    const {idCategoria} = useParams();

    useEffect(()=>{
      setItems (idCategoria ? listaProductos.filter(item => item.categoria === idCategoria) : listaProductos)
    },[idCategoria])
    

    return (
        <section className="container my-5">
            <article className="row">
                {items.map(item => (
                    <div className="col-4">
                        <div key={item.id} className="card mb-4">
                            <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombre}</h5>
                                <p className="card-text ">${item.precio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Productos