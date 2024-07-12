import { useEffect, useState } from "react"

const CardProduct = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => setProductos(data))
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                {productos.map(item => (
                    <div className="col-md-3">
                        <div key={item.id} className="card">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href="#" className="btn btn-primary">{item.price}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}

export default CardProduct