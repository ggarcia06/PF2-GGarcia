import cart from '../../assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={ cart } id="cart" alt="cart" />
            <span>0</span>
        </div>
    )
}

export default CartWidget