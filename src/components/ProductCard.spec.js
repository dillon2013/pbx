import React from 'react';
import { shallow } from 'enzyme';
import { ProductCard, formatCurrency } from './ProductCard';

describe('ProductCard', () => {

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

  it('should display the title', () => {
    expect(wrapper.find('h2').text()).toEqual("Simple Canvas");
  });

  it('should display a description', () => {
    expect(wrapper.find('.wrapper p').at(0).text()).toEqual("Lets your pictures speak for themselves.");
  });

  it('should display image in the header', () => {
    expect(wrapper.find('header').contains(<img src="/images/product.jpg" alt="Simple Canvas"/>)).toBeTruthy()
  });

  it('should display the product label', () => {
    expect(wrapper.find('.label span').text()).toEqual("bestseller");
  })

  it('should display the price', () => {
    expect(wrapper.find('footer span').text()).toEqual("£15.00");
  });

  it('should display a "shop now" button', () => {
    expect(wrapper.find('a').prop('href')).toEqual("/random/link/to/no/where");
    expect(wrapper.find('a button').text()).toEqual("Shop Now");
  });

});


describe('formatCurrency', () => {
  it('should format the price to 2 decimal places', () => {
    const price = 3000;
    expect(formatCurrency(price)).toEqual("30.00");
  });

  it('should format the price to 2 decimal places if the price is a string', () => {
    const price = "3000";
    expect(formatCurrency(price)).toEqual("30.00");
  });
});
