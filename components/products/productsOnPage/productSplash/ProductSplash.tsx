
import React from 'react'

import classes from './productSplash.module.css';

type Props = {
    image: string, 
}

const ProductSplash = ({ image } : Props) => {
  return (
    <div className={classes.wrapper}>
        <img src={image} className={classes.img_wrapper}/>
    </div>
  )
}

export default ProductSplash