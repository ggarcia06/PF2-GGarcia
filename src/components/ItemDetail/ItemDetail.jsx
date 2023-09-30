import { useContext } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { CartContext } from '../../contexts/CartContext';

export const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    const onAdd = count => addToCart(product, count)
    //const onAdd = count => console.log(product, count)
    return(
    <div className='item-detail-container'> 
    <div className="item-detail">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" />
        <h2>Descripcion</h2>
        <p>{product.descripcion}</p>
        <h3>PRECIO: $ {product.precio}</h3>
        <ItemCount stock={product.stock} onAdd={onAdd}/>

    </div>
    </div>
)
}
