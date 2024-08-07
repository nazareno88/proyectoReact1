import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getFirestore, getDoc } from "firebase/firestore"
import Carga from "./Carga"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()

   useEffect(()=>{
      const db = getFirestore();
      const docRef = doc(db, "productos", id)
      getDoc(docRef).then(snapShot => {
         if(snapShot.exists()){
            setProducto({id:snapShot.id, ...snapShot.data()})
            setCargando(false);
      } else{
         console.error("Producto no encontrado")
      }
      })
   },[id])

     return(
        <div className="container">
           <div className="row">
            {cargando ? <Carga/> :<ItemDetail  producto = {producto}/>}
           </div>
        </div>
     )

}

export default ItemDetailContainer