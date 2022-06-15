import React from 'react'

import type { ProductType } from '../../../../lib/features/products/types';

import classes from './prevproduct.module.css';

type Props = {
  prevProduct: ProductType
}

const PrevProduct = (props: Props) => {
  return (
    <div className={classes.wrapper}>
        <h4>Prev</h4>
        <p className={classes.title}>{props.prevProduct.title}</p>
    </div>
  )
}

export default PrevProduct