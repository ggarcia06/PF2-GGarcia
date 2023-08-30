import { useState } from 'react';

export const ItemCount = () => {
    const [count, setCount] = useState(1);
    const handleIncreaseCount = () => {
        if(stock > count){
            setCount((prev) => prev + 1);
        }
    };
    const handleDecreaseCount = () => {
        if (count > 1){
            setCount((prev) => prev - 1);
        }
        
    };

    const stock = 6;

    return(
        <div className="itemCount">
            <div className='add'>
            <span onClick={ handleDecreaseCount }>-</span>
            <span>{count}</span>
            <span onClick={ handleIncreaseCount }>+</span>
            </div>
            <button className="itemCountButton">Agregar al carrito</button>
        </div>
    )
}