import { Link } from "react-router-dom"

const ItemListContainer = ({inicio, componentes, perisfericos, accesorios, nosotros}) => {
    return (
       <>
       <Link to={"/"}>{inicio}</Link>
       <Link to={"categoria/componentes"}>{componentes}</Link>
       <Link to={"/categoria/perisfericos"}>{perisfericos}</Link>
       <Link to={"/categoria/accesorios"}>{accesorios}</Link>
       <Link to={"/categoria/nosotros"}>{nosotros}</Link>
       </>
    )
}



export default ItemListContainer