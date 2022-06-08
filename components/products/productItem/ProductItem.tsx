import React from 'react';

import type { ProductType, ProductProps } from '../../../lib/features/products/types';

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
    <div key={id} >{title}</div>
  )
}

export default ProductItem