import cart from './assets/carrito.svg';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to="/cart">
            <img src={cart} alt='cart-widget' />
            {typeof totalQuantity === 'number' && (
            <span style={{ marginLeft: '5px' }}> {totalQuantity} </span>
            )}
        </Link>
    );
}

export default CartWidget;
