const products = [
  { id: 1, name: 'Producto 1', category: 'Categoría A' },
  { id: 2, name: 'Producto 2', category: 'Categoría B' },
  { id: 3, name: 'Producto 3', category: 'Categoría A' },
];

const productDetails = {
  1: { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
  2: { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
  3: { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === category);
      resolve(filteredProducts);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productDetails[productId];
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 500);
  });
};