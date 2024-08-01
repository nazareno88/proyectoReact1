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

    return <CartContextProvider value={{ cart, addItem, removeItem, clear }}>
        {children}
    </CartContextProvider>
}

export default CartContextProvider
