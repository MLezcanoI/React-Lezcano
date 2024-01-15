import cart from './assets/carrito.svg';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './cartWidget.css';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart" className='carrito'>
            <img  src={cart} alt='cart-widget' />
            {typeof totalQuantity === 'number' && (
            <span className='cart-quantity'> {totalQuantity} </span>
            )}
        </Link>
    );
}

export default CartWidget;
