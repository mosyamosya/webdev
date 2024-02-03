// ProductList.js

import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (productId) => {
    // Toggle selection status of the product
    setSelectedProducts((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  return (
    <ul id="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          isSelected={selectedProducts.includes(product.id)}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
    </ul>
  );
};

export default ProductList;
