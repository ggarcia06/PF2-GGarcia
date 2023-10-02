import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Container from 'react-bootstrap/Container';
import trash from '../../assets/trash.svg'





export const Cart = () => {
    const { cartItems, removeItem} = useContext(CartContext)

    return (
        <main className="cartView">
            <Container>

                <div className="cartItemsCards">{cartItems.map(item => (
                    <div className="cartItemsCard" key={item.id}>
                    <div className="imgCartItem"><img src={item.img} alt={item.alt}/></div>
                    <div className="infoCartItem">
                        <h2>{item.name}</h2>
                        <h2>Precio: ${item.price}</h2>
                        <h2>Cantidad: {item.quantity}</h2>
                    </div>
                    <div><button className="deleteButton" onClick={()=> removeItem(item.id)}><img src={trash} alt="delete button"/></button></div>
                    </div>
                ))}
                </div>
                <div>
                    
                </div>

            </Container>
        </main>
    )
}
