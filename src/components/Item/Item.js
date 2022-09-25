import React from 'react';
import { addToStorage, deleteFromStorage } from '../../utilities/storage';
import './Item.css'

const Item = (props) => {
    const { id, name, price } = props.watch;
    const addToCart = (id) => {
        addToStorage(id);
    }
    const deleteFromCart = id => {
        deleteFromStorage(id);
    }
    return (
        <div className='item'>
            <h3>Name: {name}</h3>
            <h4>Price: ${price}</h4>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => deleteFromCart(id)}>Remove</button>
        </div>
    );
};

export default Item;