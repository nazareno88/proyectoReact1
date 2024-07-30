import { useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({ stock , onAdd }) => {
    const [contador, setContador] = useState(1)
    const [visible, setVisible] = useState(true)

    const incrementar = () => {
        if (contador < stock) {
          setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const agregarAlCarrito = () => {
        if (contador <= stock) {
            // onAdd(contador)
            console.log(`Agregado al carrito: ${contador} productos`)
            setContador(1)
            setVisible(false)
        }
    }

    return (
        <>
        {visible ? 
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>

                </div>
            </div>
            <div className="row my-1">
                <div className="col">

                    <button className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al Carrito</button>
                </div>
            </div>
        </div> : <Link to={"/cart"} className="btn btn-primary">Finalizar Compra</Link>}
        </>
    )
}


export default ItemCount