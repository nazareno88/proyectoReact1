import { Link, NavLink } from "react-router-dom"


const ContainerLink = ({inicio, componentes, perisfericos, accesorios, nosotros}) => {
    return (
       <>
       <Link to={"/"}>{inicio}</Link>
       <NavLink to={"/category/componentes"}>{componentes}</NavLink>
       <NavLink to={"/category/perisfericos"}>{perisfericos}</NavLink>
       <NavLink to={"/category/accesorios"}>{accesorios}</NavLink>
       <NavLink to={"/category/nosotros"}>{nosotros}</NavLink>
       </>
    )
}



export default ContainerLink