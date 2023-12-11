import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="card has-background-black has-text-gold m-4" style={{ maxWidth: '200px' }}>
            <header>
                <h2>
                    {name}
                </h2 >
            </header>
            <picture>
                <img src={img} alt={name} className="image is-rounded" />
            </picture>
            <section>
                <p>
                    Precio : {price}
                </p>
                <p>
                    Stock : {stock}
                </p>
            </section>

            <footer>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>

    )
}

export default Item;