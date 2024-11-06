import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api-config';

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.data); // Set the fetched products to state
      } catch (error) {
        console.error('Failed to load products:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Slug: {product.slug}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
