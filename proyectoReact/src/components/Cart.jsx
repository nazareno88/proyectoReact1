import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import "../styles/cart.css"

const Cart = () => {
    const { cart, clear, removeItem, totalProductos, sumaProductos } = useContext(CartContext);

    if (totalProductos() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                    <h1>Tu pc esta esperando que compres algo nuevo, agrega ese carrito</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                    <p className="fs-1">Que esperas para llenar ese carrito</p>
                    <Link to={"/"} className="btn btn-primary " >Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="table">
            <tbody>
                {cart.map(product => (
                    <table key={product.id} className="table">
                        <tr className="cart-container" >
                            <td ><img src={product.image} alt={product.title} width={70} /></td>
                            <td >{product.title}</td>
                            <td className="m-2">${product.price} <b className="fs-6">X</b> {product.quantity}</td>
                            <td ><button onClick={() => { removeItem(product.id) }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg></button></td>
                
                        </tr>
                    </table>

                ))}
                <tr className="cart-total">
                    <td>Total:</td>
                    <td >${sumaProductos()}</td>
                </tr>
                <tr>
                <tr className="container-btn">

                <td>
                    <button className="btn-clear" onClick={clear}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash " viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>Vaciar Carrito
                    </button>
                </td>
                <td>
                    <div className="checkout">
                       <Link  className="checkout-btn" to={"/checkout"}>Continuar con la compra</Link>
                    </div>
                </td>
                </tr>
                </tr>
            </tbody>
        </div>

    )
}

export default Cart