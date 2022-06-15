import React from 'react'

import type { ProductType } from '../../../../lib/features/products/types';

import classes from './nextproduct.module.css';

type Props = {
  nextProduct: ProductType
}

const NextProduct = (props: Props) => {
  return (
    <div className={classes.wrapper}>
        <h4>Next</h4>
        <p className={classes.title}>{props.nextProduct.title}</p>
    </div>
  )
}

export default NextProduct