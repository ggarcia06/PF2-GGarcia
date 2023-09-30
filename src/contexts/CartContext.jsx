import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addToCart = (product, quantity) => setCartItems(prev => [...prev, { ...product, quantity }])
    //console.log(cartItems)

    const totalWidget =  cartItems.reduce((acc, val) => acc + val.quantity, 0)

    console.log(totalWidget)

    const removeItem = (id) => {
        const cartItemsFiltered = cartItems.filter(item => item.id !== id)
        setCartItems(cartItemsFiltered)
    }

    const clear = () => setCartItems([])


    return (
        <CartContext.Provider value={{ addToCart, removeItem, clear, totalWidget }}> {children} </CartContext.Provider>
    )

}