import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../../api/api';

const Catalog = () => {
const [products, setProducts] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
    try {
        const response = await getProductsByCategory('all'); // Reemplaza 'all' con tu categoría deseada
        setProducts(response || []); // Asegúrate de manejar correctamente la respuesta de la API
    } catch (error) {
        console.error('Error fetching products:', error);
    }
    };
npm
    fetchProducts();
}, []);

return (
    <div>
    <h1>Catálogo de productos</h1>
    <ul>
        {products.map(product => (
        <li key={product.id}>
            <Link to={`/item/${product.id}`}>{product.name}</Link>
        </li>
        ))}
    </ul>
    </div>
);
}

export default Catalog;
