import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <div className="columns is-centered">
            <div className="column is-half-tablet is-one-third-desktop">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-3by4">
                            <img src={img} alt={name} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-5">{name}</p>
                        <p className="subtitle is-5">{category}</p>
                        <p style={{color:'black'}}>{description}</p>
                        <div className="content">
                            <p style={{color:'black'}}>Price: ${price}</p>
                            <p style={{color:'black'}}>Stock: {stock}</p>
                            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ItemDetail;
