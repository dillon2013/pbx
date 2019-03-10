import React from 'react';
import { ProductCard } from "./components/ProductCard";

const product = {
  "description": "Lets your pictures speak for themselves.",
  "image": {
    "path": "/images/product.jpg",
  },
  "price": 1500,
  "currency": "£",
  "priceLabel": "From",
  "productLabel": "bestseller",
  "cta": "Shop Now",
  "ctaLink": "/random/link/to/no/where"
}

const App = () => {
  return <main>
    <ProductCard product={product}/>
  </main>;
};

export default App;
