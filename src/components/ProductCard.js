import React from 'react';
import Proptypes from 'prop-types';

function ProductCard ({product}) {
  const {
    title,
    description,
    image : {
      path,
      alt
    },
    price,
    currency,
    productLabel,
    cta,
    ctaLink,
  } = product;

  return (
    <div className="product-card">
      <header className="wrapper">
        <img src={ path } alt={ alt }/>
      </header>
      { productLabel &&  <div className="label"><span>{ productLabel }</span></div> }
      <div className="wrapper">
        <h2>{ title }</h2>
        <p>{ description }</p>
      </div>
      <footer className="wrapper">
        <p>From <span>{ currency }{ formatCurrency(price) }</span></p>
        <a href={ ctaLink }>{ cta }</a>
      </footer>
    </div>

  )
}

ProductCard.prototype = {
  product : Proptypes.shape({
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    image: Proptypes.shape({
      path: Proptypes.string.isRequired,
      alt: Proptypes.string.isRequired,
    }),
    price: Proptypes.string.isRequired,
    productLabel: Proptypes.string.isRequired,
    cta: Proptypes.string.isRequired,
    ctaLink: Proptypes.string.isRequired,
  }).isRequired
}

export {
  ProductCard,
  formatCurrency
}

/*************************************************/

function formatCurrency (price) {
  const units = Number(price) / 100;
  return units.toFixed(2);
}
