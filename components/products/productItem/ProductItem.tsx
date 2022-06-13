import { ClassNames } from '@emotion/react';
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
    <div className={classes.wrapper} >
      <li className={classes.img_wrapper}>
        <img src={image} className={classes.item_img} />
      </li>
      <li className={classes.list_item}>{title}</li>
      <button>View</button>
    </div>
  )
}

export default ProductItem