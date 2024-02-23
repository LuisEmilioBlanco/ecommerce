import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProductsByCategory, getProductById } from '../../api/api';

const StyledItemListContainer = styled.div`
  // Estilos para el contenedor principal
  padding: 20px;
`;

const ItemListContainer = ({ greeting }) => {
  const { categoryId, itemId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        if (categoryId) {
          const response = await getProductsByCategory(categoryId);
          setItems(response.data);
        } else if (itemId) {
          const response = await getProductById(itemId);
          setItems([response.data]);
        } else {
          const response = await getProductsByCategory('all');
          setItems(response.data);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [categoryId, itemId]);

  return (
    <StyledItemListContainer>
      <h1>{greeting}</h1>
      {items && items.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </StyledItemListContainer>
  );
}

export default ItemListContainer;


