import './Item.css'

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
                <button className="button is-warning">Ver detalle</button>
            </footer>
        </article>

    )
}

export default Item;