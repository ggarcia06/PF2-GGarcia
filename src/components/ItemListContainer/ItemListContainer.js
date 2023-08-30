import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import data from '../../data/products.json';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });

        promise.then((data) => {
            if (!id) {
                setProducts(data);
            } else {
                const productsFiltered = data.filter(
                    (product) => product.category === id  
                );
                console.log(productsFiltered);
                setProducts(productsFiltered);
            }

        });
    }, [])

    console.log(products);

    return (
        <Container className="mt-4">
            <h1>{greeting}</h1>
            <div className='list-container'>
                <ItemList products={products} />
            </div>
        </Container>
    );
};


export default ItemListContainer