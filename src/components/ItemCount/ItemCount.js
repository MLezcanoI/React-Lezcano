import { useState } from "react";

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
        <div>
            <div className="buttons is-centered is-spaced">
                <button className="button is-black" onClick={decrement}>-</button>
                <h4 className="mx-1">{quantity}</h4>
                <button className="button is-black" onClick={increment}>+</button>
            </div>

            <div className="buttons is-centered">
                <button  className={`button is-${stock ? 'black' : 'white'}`} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )

}

export default ItemCount;