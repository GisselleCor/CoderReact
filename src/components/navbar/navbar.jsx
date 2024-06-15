import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import CartWidget from '../cartwidget/cartwidget';

const NavigationBar= ({handleCategoria}) => {
    const cambiarCategoria = (categoria) => {
        handleCategoria(categoria)
    }


    return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
    <Container>
        <Navbar.Brand href="#home" onClick={() => cambiarCategoria('todos')}>EleganzFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                        <Nav.Link href="#men" onClick={() => cambiarCategoria('Hombre')}>Hombre</Nav.Link>
                        <Nav.Link href="#women" onClick={() => cambiarCategoria('Mujer')}>Mujer</Nav.Link>
                        <Nav.Link href="#kids" onClick={() => cambiarCategoria('Niño')}>Niño</Nav.Link>
                        <Nav.Link href="#accessories" onClick={() => cambiarCategoria('Accesorios')}>Accesorios</Nav.Link>
                <CartWidget/>
            </Nav>
        </Navbar.Collapse>

    </Container>
    </Navbar>);
};

export default NavigationBar;