import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { Products } from './Products';

const products = [
  {
    "title": "Simple Canvas",
    "description": "Lets your pictures speak for themselves.",
    "image": {
      "path": "/images/product.jpg",
      "alt": "Simple Canvas"
    },
    "price": 1500,
    "currency": "£",
    "priceLabel": "From",
    "productLabel": "bestseller",
    "cta": "Shop Now",
    "ctaLink": "/random/link/to/no/where"
  }, {
    "title": "Collage Canvas",
    "description": "Can't choose just one pic? Put your favourite photos on one canvas - a collage.",
    "image": {
      "path": "/images/product.jpg",
      "alt": "Collage Canvas"
    },
    "price": 2500,
    "currency": "£",
    "priceLabel": "From",
    "productLabel": "",
    "cta": "Shop Now",
    "ctaLink": "/random/link/to/no/where"
  },
]

describe('Products', () => {

  let wrapper ;

  beforeEach(() => {
    axios.get = jest.fn();
    axios.get.mockResolvedValue({
      data: products
    });
    wrapper = shallow(<Products/>);
  });


  it('should make a get request on componentDidMount', () => {
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(Products.url);
  });

  it('should render the number of products', () => {
    expect(wrapper.find('main').children().length).toEqual(2);
  });
})
