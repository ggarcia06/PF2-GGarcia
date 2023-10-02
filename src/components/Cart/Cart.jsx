import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Container from 'react-bootstrap/Container';
import trash from '../../assets/trash.svg'





export const Cart = () => {
    const { cartItems, removeItem, totalWidget } = useContext(CartContext)

    if (!totalWidget) {
        return <div className="cartbg"><h1>No hay items en tu carrito</h1></div>
    } else {
        return (
            <main className="cartView">
                <Container>
                    <div className="cartContainer">
                        <div className="cartItemsCards">{cartItems.map(item => (
                            <div className="cartItemsCard" key={item.id}>
                                <div className="imgCartItem"><img src={item.img} alt={item.alt} /></div>
                                <div className="infoCartItem">
                                    <h2>{item.name}</h2>
                                    <h2>Precio: ${item.price}</h2>
                                    <h2>Cantidad: {item.quantity}</h2>
                                </div>
                                <div><button className="deleteButton" onClick={() => removeItem(item.id)}><img src={trash} alt="delete button" /></button></div>
                            </div>
                        ))}
                        </div>
                        <div>

                        </div>
                        <div className="orderSummary">
                            <h3>Resumen de compra:</h3>
                            <h4>Total de productos: {totalWidget}</h4>
                            <h4>Precio final:</h4>
                            <button className="checkoutButton">Finalizar compra</button>
                        </div>
                        <div>
                            <button className="removeAllItems">Vaciar carrito</button>
                        </div>
                    </div>

                </Container>
            </main>
        )
    }
}
