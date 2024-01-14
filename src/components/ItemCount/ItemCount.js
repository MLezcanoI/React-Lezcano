import { useState } from "react";
import './itemcount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="item-count-container">
            <div className="buttons-container">
                <button className="action-button" onClick={decrement}>-</button>
                <h4 className="quantity">{quantity}</h4>
                <button className="action-button" onClick={increment}>+</button>
            </div>

            <div className="buttons-container">
                <button
                    className={`add-to-cart-button ${stock ? 'black' : 'white'}`}
                    onClick={() => onAdd(quantity)}
                    disabled={!stock}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}


export default ItemCount;