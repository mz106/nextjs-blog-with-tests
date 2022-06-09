import React from 'react';

import type { ProductType } from '../../../lib/features/products/types';

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
    
  return (
    <div key={id} className={classes.wrapper} >{title}</div>
  )
}

export default ProductItem