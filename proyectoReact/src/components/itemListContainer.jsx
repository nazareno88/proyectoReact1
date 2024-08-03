import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {id} = useParams();

   useEffect(()=>{
      const db = getFirestore();
      const productosCollection = collection(db,"productos");
      const filtro = id ? query(productosCollection, where("category", "==", id)) : productosCollection ;
      getDocs(filtro).then(snapShot => {
         if(snapShot.size > 0){
            setProductos(snapShot.docs.map(product => ({id:product.id, ...product.data()})))
      }else{
         console.error("Productos no encontrados")
      }
      })
   },[id])

     return(
        <div className="container">
           <div className="row">
            <ItemList  productos = {productos}/>
           </div>
        </div>
     )

}

export default ItemListContainer