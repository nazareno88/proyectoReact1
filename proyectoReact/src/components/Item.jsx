import { Link } from "react-router-dom"
import "../styles/cardContainer.css"   

    const Item = ({ producto }) => {
        return (
            <div className="cardContainer col-md-4 my-4">
            <div className="card">
            <Link to={"/producto/" + producto.id }>
                <img src={producto.image} className="card-img-top" alt={producto.title} />
            </Link>
                <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">${producto.price}</p>
                </div>
            </div>
            </div>
        )
    }



export default Item