import React from 'react';

import type { ProductType, ProductProps } from '../../../lib/features/products/types';

import classes from './productitem.module.css';

type Props = {}

const ProductItem = ({ 
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
 } : ProductType) => {
     console.log("hello world")
  return (
    <div key={id} className={classes.wrapper} >{title}</div>
  )
}

export default ProductItem