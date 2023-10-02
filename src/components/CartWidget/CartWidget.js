import cart from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)
    return (
        <Link to="/cart">
        <div>
            <img src={ cart } id="cart" alt="cart" />
            <span>{totalWidget}</span>
        </div>
        </Link>
    )
}

export default CartWidget