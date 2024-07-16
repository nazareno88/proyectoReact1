import { useState } from "react"


const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1)

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
            console.log(`Agregado al carrito: ${contador} productos`)
            setContador(1)
        }
    }

    return (
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
        </div>
    )
}


export default ItemCount