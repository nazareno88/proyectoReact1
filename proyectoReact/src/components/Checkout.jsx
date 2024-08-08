import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import "../styles/checkout.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, totalProductos, sumaProductos } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const nOrden = () => {
        if (!nombre || !email || !telefono || !direccion) {
            return false;
        }

        const orden = {
            buyer: { name: nombre, email, telefono, direccion },
            productos: cart.map(product => ({ id: product.id, titulo: product.title, precio: product.price })),
            total: sumaProductos()
        };

        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenes");
        addDoc(ordenesCollection, orden).then(response => {
            setOrdenId(response.id);
            clear();
        }).catch(error => {
            console.error("Error al crear la orden: ", error);
        });
    }

    if (totalProductos() === 0 && ordenId) {
        return (
            <div className="orden-container">
                {ordenId && (
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="200" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path fillRule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
                        </svg>
                        <h3>Gracias por tu compra</h3>
                        <p>Tu NºOrden es: <b>{ordenId}</b></p>
                    </div>
                )}
            </div>
        );
    }

    if (totalProductos() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1>Tu pc está esperando que compres algo nuevo, agrega ese carrito</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5" />
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                        </svg>
                        <p className="fs-1">¿Qué esperas para llenar ese carrito?</p>
                        <Link to={"/"} className="btn btn-primary">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="checkout-container">
                <div className="form-container">
                    <form onSubmit={(e) => { e.preventDefault(); nOrden(); }}>
                        <div className="mb-3">
                            <label htmlFor="Nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Email" className="form-label">Email</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary">Generar Orden</button>
                    </form>
                </div>
                <div className="table-container">
                    <table className="table">
                        <tbody>
                            {cart.map(product => (
                                <tr key={product.id} className="cart-container">
                                    <td><img src={product.image} alt={product.title} width={70} /></td>
                                    <td>{product.title}</td>
                                    <td className="m-2">${product.price} <b className="fs-6">X</b> {product.quantity}</td>
                                </tr>
                            ))}
                            <tr className="cart-total">
                                <td>Total:</td>
                                <td>${sumaProductos()}</td>
                                <td><button className="btn btn-primary" onClick={nOrden}>Ver NºOrden</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default Checkout;