import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({ product }) => (
  
    <Card key={product.id} style={{ width: '18rem'}}>
    <Card.Img variant="top" src={product.img} alt={product.alt}/>
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        <strong>Precio: </strong>$ {product.price}
      </Card.Text>
      <Link to={`/item/${product.id}`}><Button variant="primary">Ver descripcion</Button></Link>
    </Card.Body>
  </Card>
  
);