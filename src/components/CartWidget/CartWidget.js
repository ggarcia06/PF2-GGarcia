import cart from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)
    return (
        <div>
            <img src={ cart } id="cart" alt="cart" />
            <span>{totalWidget}</span>
        </div>
    )
}

export default CartWidget