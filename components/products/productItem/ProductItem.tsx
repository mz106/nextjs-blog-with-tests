
import React from 'react';

import Button from '@/components/ui/button/Button';

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

  const clickHandler = () => {
    console.log("click handler reached");
  };
    
  const productLink = {
    url: `/products/${id}`,
    productId: id,
  };

  return (
    <div className={classes.wrapper} >
      <li className={classes.img_wrapper}>
        <img src={image} className={classes.item_img} />
      </li>
      <li className={classes.list_item}>{title}</li>
      {/* <button>View</button> */}
      <Button link={productLink}>View</Button>
    </div>
  )
}

export default ProductItem