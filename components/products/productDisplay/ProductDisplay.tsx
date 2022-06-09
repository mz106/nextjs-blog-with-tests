
import React from 'react'

import ProductItem from '../productItem/ProductItem';

import type { ProductType, ProductProps } from '../../../lib/features/products/types';

import classes from './productdisplay.module.css';

type Props = {}

const ProductDisplay = ({ productPageDisplay }: ProductProps) => {
    
  return (
    <div className={classes.product_display_wrapper}>
        <h1>Product Display</h1>
        <div className={classes.inner_wrapper}>
            {productPageDisplay.map((product: ProductType, index: number) => (
                <ProductItem 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating} 
                />
            ))}
        </div>
    </div>
  )
}

export default ProductDisplay;