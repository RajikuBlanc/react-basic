import React, { useState } from 'react';

const Basic1 = props => {
  const [product, setProducts] = useState({ name: '', price: '' });
  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          placeholder="Product Name"
          onChange={evt => setProducts({ ...product, name: evt.target.value })}
        />
        <input
          type="text"
          value={product.price}
          placeholder="Product Price"
          onChange={evt => setProducts({ ...product, price: evt.target.value })}
        />
      </form>
      <h3>Product Name Is {product.name}</h3>
      <h3>Product Price Is {product.price}</h3>
    </>
  );
};

export default Basic1;
