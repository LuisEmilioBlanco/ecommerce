import React from 'react';
import carritoImagen from './assets/carrito-compras.svg';

const CartWidget = () => {
const hardcodedItemCount = 3;

return (
    <div className="cart-widget">
        <img
            src={carritoImagen}
            alt="Carrito de Compras"
            style={{
            width: '120px',
            height: '120px',
            marginRight: '8px',
            }}
        />
        {hardcodedItemCount > 0 && (
        <span
            className="badge"
            style={{
            backgroundColor: 'Black',
            color: 'white',
            borderRadius: '75%',
            padding: '10px 20px',
            fontSize: '15px',
            }}
        >
            {hardcodedItemCount}
        </span>
        )}
    </div>
    );
}

export default CartWidget;