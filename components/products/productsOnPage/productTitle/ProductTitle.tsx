import React from 'react'

type Props = {
    title: string,
}

const ProductTitle = ( { title }: Props) => {
  return (
    <div>{title}</div>
  )
}

export default ProductTitle