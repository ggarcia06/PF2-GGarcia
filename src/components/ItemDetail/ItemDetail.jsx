import { useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../contexts/CartContext';

export const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    const onAdd = count => addToCart(product, count)
    
    return(
    <div className='item-detail-container'> 
    <div className="item-detail">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" />
        <h2>Descripcion</h2>
        <p>{product.description}</p>
        <h2>Precio: $ {product.price}</h2>
        <h3>Cantidad: {product.stock}</h3>
        <ItemCount stock={product.stock} onAdd={onAdd}/>

    </div>
    </div>
)
}
