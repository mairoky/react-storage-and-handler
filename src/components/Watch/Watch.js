import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Watch = () => {
    const [watches, setWatches] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatches(data))
    }, [])
    return (
        <div>
            <h2>Buy Watch</h2>
            {
                watches.map(watch => <Item key={watch.id} watch={watch}></Item>)
            }
        </div>
    );
};

export default Watch;