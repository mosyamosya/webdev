// ProductItem.js

import React from 'react';

const ProductItem = ({ product, isSelected, onCheckboxChange }) => {
  return (
    <li id='product-name'>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onCheckboxChange(product.id)}
        />
        {product.name}
      </label>
    </li>
  );
};

export default ProductItem;
