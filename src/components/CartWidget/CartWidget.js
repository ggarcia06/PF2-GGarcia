import cart from '../../assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalWidget } = useContext(CartContext)
    return (
        
        <div>
            <Link to="/cart"><img src={ cart } id="cart" alt="cart" /></Link>
            <span className='totalWidget'><strong>{totalWidget}</strong></span>
        </div>
        
    )
}

export default CartWidget