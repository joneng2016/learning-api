// components/ProductList.js
import React from 'react';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const { products, loading } = useProducts();

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
