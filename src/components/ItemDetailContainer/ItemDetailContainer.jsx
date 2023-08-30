import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/products.json';
import { ItemList } from '../ItemList/ItemList';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState([null]);

    const {id} = useParams()

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find(product => product.id === Number(id));
                resolve(productById)
            }, 2000);
        });

        promise.then(data => setProduct(data));

    }, [])
    if(!product) return <div>LOADING...</div>;


    return (
        <Container className="mt-4">
            <h1>{greeting}</h1>
            <ItemDetail product={product} />
        </Container>
    );
};


export default ItemDetailContainer