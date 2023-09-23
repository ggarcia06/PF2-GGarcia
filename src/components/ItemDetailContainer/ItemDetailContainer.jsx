import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig' 

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState([null]);
    const [loading, setLoading] = useState (true)
    const {id} = useParams()

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'productos', id)

        getDoc(docRef)
        .then(response =>{
            //const data = response.data()
            
            //const productAdapted = { id: response.id, ...reponse.data}
            setProduct({ id: response.id, ...response.data})
        
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    
//      const promise = new Promise((resolve, reject) => {
//            setTimeout(() => {
//                const productById = data.find(product => product.id === Number(id));
//                resolve(productById)
//            }, 2000);
//        });

 //       promise.then(data => setProduct(data));

    }, [id])
    if(loading) return <div>LOADING...</div>;


    return (
        <Container className="mt-4">
            <h1>{greeting}</h1>
            <ItemDetail product={product} />
        </Container>
    );
};


export default ItemDetailContainer