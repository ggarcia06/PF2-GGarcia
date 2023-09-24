import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
//import data from '../../data/products.json';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        //const db = getFirestore();

        const refCollection = categoryId
            ? query(collection(db, "productos"), where("category", "==", categoryId))
            : collection(db, "productos");

        getDocs(refCollection)
            .then((response) => {
                if (response.size === 0) setProducts([])
                else {
                    setProducts(
                        response.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                }
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if (loading) return <div>Loading . . .</div>

    // useEffect(() => {
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(data), 2000);
    //     });

    //     promise.then((data) => {
    //         if (!id) {
    //             setProducts(data);
    //         } else {
    //             const productsFiltered = data.filter(
    //                 (product) => product.category === id  
    //             );
    //             setProducts(productsFiltered);
    //         }

    //     });
    // }, [id]);

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
