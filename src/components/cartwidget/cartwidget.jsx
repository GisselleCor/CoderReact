import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './cartwidget.css';


const CartWidget= () => {
    return (
        <div className="cart-container">
        <img src="../imagenes/carrito.jpg" width="50px" height="auto" alt="Carrito de compras" />
        <span className="cart-badge">1</span>
        </div>
    );
};

export default CartWidget;