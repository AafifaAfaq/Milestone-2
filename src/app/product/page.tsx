'use client'
import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  // State to store the cart items
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const productData: any = [
    { id: 1, name: 'Product 1', price: 100, image: '/p6.webp' },
    { id: 2, name: 'Product 2', price: 150, image: '/p3.jpg' },
    { id: 3, name: 'Product 3', price: 200, image: '/p5.jpg' },
    { id: 4, name: 'Product 4', price: 300, image: '/p2.webp' },
    { id: 5, name: 'Product 5', price: 400, image: '/p7.png' },
    { id: 6, name: 'Product 6', price: 450, image: '/p8.webp' },
    { id: 7, name: 'Product 7', price: 600, image: '/p10.jpg' },
    { id: 8, name: 'Product 8', price: 550, image: '/p9.webp' },
    { id: 9, name: 'Product 9', price: 350, image: '/p4.webp' },
  ];

  // Function to add products to the cart
  const handleAddToCart = (id: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id]) {
        newCart[id] += 1;
      } else {
        newCart[id] = 1;
      }
      return newCart;
    });
  };

  return (
    <div>
      <div className="product-grid">
        {productData.map((product:any) => (
          <div key={product.id} className="product-card">
            <div
              className="product-image"
              style={{
                backgroundImage: `url(${product.image})`,
              }}
            ></div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price}</div>
            <button
              onClick={() => handleAddToCart(product.id)}
              className="add-to-cart-button"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-info">
        <h3> <FaShoppingCart/> : {Object.values(cart).reduce((total, quantity) => total + quantity, 0)}</h3>
      </div>
    </div>
  );
};

export default Product;
