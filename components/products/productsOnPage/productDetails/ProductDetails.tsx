import React from 'react'

import classes from './productDetails.module.css';

type Props = {
    title: string,
    price: number,
    description: string,
    category: string,
    rating: number,
}

const ProductDetails = ( { title, price, description, category, rating }: Props) => {
  return (
    <div className={classes.wrapper}>
        <h3>{title}</h3>
        <p>Price: £{price}</p>
        <p className={classes.description}>Description: {description}</p>
        <p>Category: {category}</p>
        <p>Rating (out of 5): {rating}</p>
    </div>
  )
}

export default ProductDetails