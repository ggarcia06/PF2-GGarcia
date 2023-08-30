import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ product }) => (
    <div className='item-detail-container'> 
    <div className="item-detail">
        <h1>{product.name}</h1>
        <img src={product.img} alt="" />
        <h2>Descripcion</h2>
        <p>{product.descripcion}</p>
        <h3>PRECIO: $ {product.precio}</h3>
        <ItemCount />

    </div>
    </div>
)