import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ product }) => (

    // const [quantityAdded, setQuantity] = useState(0)

    // const handleOnAdd = (quantity) => {
    //     setQuantityAdded (quantity)
    // }


    // return(
    <div className='item-detail-container'> 
    <div className="item-detail">
        <h1>{product.name}</h1>
        <img src={product.img} alt={product.alt} />
        <h2>Descripcion</h2>
        <p>{product.description}</p>
        <h3>PRECIO: $ {product.price}</h3>
        
        
        <ItemCount />

    </div>
    </div>
    // )
)