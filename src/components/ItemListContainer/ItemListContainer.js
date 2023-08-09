import Container from 'react-bootstrap/Container';

const ItemListContainer = ({ greeting }) => {
    return(
        <Container className="mt-4">
            <h1>{greeting}</h1>
            </Container>
    );
};


export default ItemListContainer