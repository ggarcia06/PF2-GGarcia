import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/logo.png';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={ logo } class="logo" alt="logo" />
</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Componentes de PC</Nav.Link>
                    <Nav.Link href="#features">Accesorios</Nav.Link>
                    <Nav.Link href="#pricing">Impresoras</Nav.Link>
                    <Nav.Link href="#pricing">Almacenamiento</Nav.Link>
                    <Nav.Link href="#pricing">Conectividad</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>

        </Navbar>
    )
}

export default NavBar

