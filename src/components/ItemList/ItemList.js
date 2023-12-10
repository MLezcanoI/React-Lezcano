import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
    return (
        <div className="columns is-multiline">
            {products && products.map(prod => (
                <div className="column is-one-quarter" key={prod.id}>
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
};

export default ItemList;
