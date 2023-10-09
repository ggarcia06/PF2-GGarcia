import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState([null]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'productos', id)

        getDoc(docRef)
            .then(response => {
                setProduct({ id: response.id, ...response.data() })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [id])

    if (loading) return <div>LOADING...</div>;
    return (
        <Container className="mt-4">
            <h1>{greeting}</h1>
            <ItemDetail product={product} />
        </Container>
    );
};
export default ItemDetailContainer