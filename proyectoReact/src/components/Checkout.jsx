import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import "../styles/checkout.css"
import { addDoc, collection, getFirestore, orderBy } from "firebase/firestore";

const Checkout = () => {
     
    const {cart, totalProductos, sumaProductos} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ordenId, setOrdenId] = useState("");


    const nOrden = () => {
        if (nombre == ""){
            return false
        };

        if (email == ""){
            return false
        };

        if (telefono == ""){
            return false
        };

        if (direccion == ""){
            return false
        };
 
        const orden = {
            buyer:{name:nombre, email:email, telefono:telefono, direccion:direccion},
            productos:cart.map (product => ({id:product.id, titulo:product.title, precio:product.price})),
            total: sumaProductos()
        };

        const db = getFirestore();
        const ordenesCollection = collection(db, "ordenes");
        addDoc(ordenesCollection, orden).then(response => {
            setOrdenId(response.id);
        })
    }

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
        <>
        
        <div className="checkout-container">
       
         <div className="form-container">

                    <form >
                        <div className="mb-3">
                           <label htmlFor="Nombre" className="form-label">Nombre</label>
                           <input type="text" className="form-control" onInput={(e)=>{setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="Email" className="form-label">Email</label>
                           <input type="text" className="form-control" onInput={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="Telefono" className="form-label">Telefono</label>
                           <input type="text" className="form-control" onInput={(e)=>{setTelefono(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                           <label htmlFor="Direccion" className="form-label">Direccion</label>
                           <input type="text" className="form-control" onInput={(e)=>{setDireccion(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-primary">Generar Orden</button>
                    </form>
                </div>

            <div className="table-container">
                <tbody>
                    {cart.map(product => (
                        <table  key={product.id} className="table">
                            <tr className="cart-container" >
                                <td ><img src={product.image} alt={product.title} width={70} /></td>
                                <td >{product.title}</td>
                                <td className="m-2">${product.price} <b className="fs-6">X</b> {product.quantity}</td>
                            </tr>
                        </table>

                    ))}
                    <tr className="cart-total">
                        <td>Total:</td>
                        <td >${sumaProductos()}</td>
                        <td><button className="btn btn-primary" onClick={nOrden}>Ver NºOrden</button></td>
                    </tr>
                </tbody>
            </div>

        </div>
          <div className="orden-container">
            {ordenId ? <div>
            <h3>Gracias por tu compra</h3>
            <p>Tu NºOrden es : <b>{ordenId}</b></p></div> : ""}
         </div>
        </>
    )

}

export default Checkout