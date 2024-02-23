import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/api';

const ItemDetailContainer = () => {
const { itemId } = useParams();
const [item, setItem] = useState(null);

useEffect(() => {
    const fetchItemById = async () => {
    try {
        const response = await getProductById(itemId);
        setItem(response);
    } catch (error) {
        console.error('Error fetching item details:', error);
    }
};

    if (itemId) {
    fetchItemById();
    }
}, [itemId]);

return (
    <div className="item-detail-container">
    {item && (
    <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        </div>
    )}
    </div>
);
}

export default ItemDetailContainer;