import { createContext, useState } from "react"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product, quantity) => {
        const alReadyExist = cartItems.some(item => item.id === product.id)

        if (!alReadyExist) setCartItems(prev => [...prev, { ...product, quantity }])
        else {
            const actualizarProductos = cartItems.map(item => {
                if (item.id === product.id)
                    return {
                        ...item, 
                        quantity: item.quantity + quantity,
                    }
                    else return item
            })
            setCartItems(actualizarProductos)
            quantity === 1? toast("Agregaste " + quantity + " producto al carrito") : toast("Agregaste " + quantity + " productos al carrito")
        }
    }

    const totalWidget = cartItems.reduce((act, val) => act + val.quantity, 0)

    const totalPrice = cartItems.reduce((ac, acum) => ac + acum.quantity * acum.price, 0)

    const removeItem = (id) => {
        const cartItemsFiltered = cartItems.filter(item => item.id !== id)
        setCartItems(cartItemsFiltered)
    }

    const clear = () => setCartItems([])

    return (
        <CartContext.Provider value={{ addToCart, cartItems, removeItem, clear, totalWidget, totalPrice }}> {children} </CartContext.Provider>
    )
}