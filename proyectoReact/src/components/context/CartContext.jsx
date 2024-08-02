import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const product = cart.find(product => product.id == item.id);
            product.quantity += quantity;
            setCart([...cart])
        }
        else {
            setCart([...cart, { ...item, quantity: quantity }])
        }
    }

    const removeItem = (id) => {
        const items = cart.filter(item => item.id != id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id == id);
    }

    const totalProductos = () => {
         return cart.reduce((acum, product)=> acum += product.quantity, 0 )
    }

    const sumaProductos = () => {
        return cart.reduce((acum, product)=> acum += product.quantity * product.price , 0 )
   }




    return <CartContext.Provider value ={{ cart, addItem, removeItem, clear, totalProductos, sumaProductos }}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider