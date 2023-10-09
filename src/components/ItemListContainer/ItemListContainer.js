import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../../services/firebase/firebaseConfig';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

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
