import React from 'react';
import axios from 'axios';
import { ProductCard } from './ProductCard';

class Products extends React.Component {

  static url = "/api/products";

  state = {
    products: []
  };

  componentDidMount () {
    this.fetchProducts()
  }

  fetchProducts () {
    axios.get(Products.url)
      .then(({data}) => this.setState({products: data}))
      .catch(err => console.error(err))
  }

  render () {
    const { products } = this.state;
    return (
        <main>
          {products.map(product => <ProductCard product={product} key={product.title}/>)}
        </main>
    )
  }
}

export {
  Products
};
