// Product.jsx

import React from 'react';

const Product = ({ product }) => {
  const { id, name, selected } = product;

  const handleToggle = () => {
    product.selected = !product.selected;
  };

  return (
    <li>
      <input type="checkbox" checked={selected} onChange={handleToggle} />
      {name}
    </li>
  );
};

export default Product;