import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/api';

const ProductDetail = () => {
const { productId } = useParams();
const [product, setProduct] = useState(null);

useEffect(() => {
    const fetchProductById = async () => {
    try {
        const response = await getProductById(productId);
        setProduct(response.data);
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
    };

    if (productId) {
    fetchProductById();
    }
}, [productId]);

return (
    <div>
    {product && (
        <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        </div>
    )}
    </div>
);
}

export default ProductDetail;

