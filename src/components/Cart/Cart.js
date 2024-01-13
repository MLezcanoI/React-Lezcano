import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="EmptyCartMessage">
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div className="Cart">
            {cart.map((product) => (
                <CartItem key={product.id} {...product} />
            ))}
            <div className="CartFooter">
                <h3 className="CartTotal">Total: ${total}</h3>
                <div className="CartButtons">
                    <button onClick={() => clearCart()}>Limpiar carrito</button>
                    <Link to='/checkout'>Checkout</Link>
                </div>
            </div>
        </div>
    );
}

export default Cart;
