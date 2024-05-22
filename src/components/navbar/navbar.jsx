import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import CartWidget from '../cartwidget/cartwidget';

const NavigationBar= () => {
    return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
    <Container>
        <Navbar.Brand href="#home">EleganzFit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#men">Hombre</Nav.Link>
                <Nav.Link href="#women">Mujer</Nav.Link>
                <Nav.Link href="#kids">Niño</Nav.Link>
                <Nav.Link href="#accessories">Accesorios</Nav.Link>
                <CartWidget/>
            </Nav>
        </Navbar.Collapse>

    </Container>
    </Navbar>);
};

export default NavigationBar;