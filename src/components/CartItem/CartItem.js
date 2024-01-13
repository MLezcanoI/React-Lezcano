import { CartContext } from "../../context/CartContext";
import React from "react";
import { useContext } from "react";
import './CartItem.css';


const CartItem = ({ id, name, img, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div className="cart-item">
            <div className="detail-item">
                <h2>
                    {name}
                </h2>
                <p>
                    Cantidad : {quantity}
                </p>
                <p>
                    Subtotal : {quantity * price}
                </p>
                <button onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>

    )
};

export default CartItem;