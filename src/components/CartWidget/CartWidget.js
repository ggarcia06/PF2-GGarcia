import cart from '../../assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img src={ cart } id="cart" alt="cart" />
            <spam>0</spam>
        </div>
    )
}

export default CartWidget