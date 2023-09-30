import { createContext, useState } from "react"

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
        }
    }






    //setCartItems(prev => [...prev, { ...product, quantity }])
    console.log(cartItems)

    const totalWidget = cartItems.reduce((acc, val) => acc + val.quantity, 0)

    console.log(totalWidget)

    const removeItem = (id) => {
        const cartItemsFiltered = cartItems.filter(item => item.id !== id)
        setCartItems(cartItemsFiltered)
    }

    const clear = () => setCartItems([])


    return (
        <CartContext.Provider value={{ addToCart, cartItems, removeItem, clear, totalWidget }}> {children} </CartContext.Provider>
    )

}