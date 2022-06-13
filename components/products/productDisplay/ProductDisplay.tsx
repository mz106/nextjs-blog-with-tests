
import React, { useState, useEffect } from 'react'

import ProductItem from '../productItem/ProductItem';

import type { ProductType, ProductsProps } from '../../../lib/features/products/types';

import classes from './productdisplay.module.css';

type Props = {}

const ProductDisplay = ({ filteredProductProps, allProducts }: ProductsProps) => {
  
  return (
    <div className={classes.product_display_wrapper}>
        <div className={classes.inner_wrapper}>
            {filteredProductProps.map((product: ProductType, index: number) => (
                <ProductItem 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rating={product.rating} 
                key={product.id}
                />
            ))}
        </div>
    </div>
  )
}

export default ProductDisplay;