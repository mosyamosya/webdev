import './App.css';
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';
import ProductList from './components/ProductList.jsx';

const initialProducts = [
  { id: 1, name: 'Product 1', selected: false },
  { id: 2, name: 'Product 2', selected: false },
  { id: 3, name: 'Product 3', selected: false },
  { id: 4, name: 'Product 4', selected: false },
  { id: 5, name: 'Product 5', selected: false },
];
function App() {
const [products, setProducts] = useState(initialProducts);
  return (
    <div className="app">
      <Header />
      <Body />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default App;
