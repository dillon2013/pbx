import React from 'react';
import { shallow } from 'enzyme';
import { ProductCard } from './ProductCard';

describe('ProductCard', function () {

  const product = {
    title: "Simple Canvas",
    description: "Lets your pictures speak for themselves.",
    image: {
      path: "/images/product.jpg",
      alt: "Simple Canvas"
    },
    price: 1500,
    currency: "£",
    priceLabel: "From",
    productLabel: "bestseller",
    cta: "Shop Now",
    ctaLink: "/random/link/to/no/where"
  };
  const wrapper = shallow(<ProductCard product={product} />);

  it('should display image in the header', () => {

  });

  it('should display the title', () => {

  });

  it('should display a description', () => {

  });

  it('should display the price', () => {

  });

  it('should display a "shop now" button', () => {

  });

});
