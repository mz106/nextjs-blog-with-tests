
import React from 'react'

import type { ProductType, ProductProps } from '../../../lib/features/products/types';

type Props = {}

const ProductDisplay = ({ productPageDisplay }: ProductProps) => {
    console.log(productPageDisplay)
  return (
    <div>{productPageDisplay.map((product: any) => (
        <p>{product.id}</p>
    ))}</div>
  )
}

export default ProductDisplay;